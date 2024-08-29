<template>
  <el-form ref="formRef" :model="formValue" :rules="formRules" size="large">
    <el-form-item prop="account">
      <el-input v-model="formValue.account" prefix-icon="user" placeholder="用户名" />
    </el-form-item>
    <el-form-item prop="password">
      <el-input
        v-model="formValue.password"
        prefix-icon="lock"
        type="password"
        placeholder="密码"
        show-password
        autocomplete="new-password"
      >
      </el-input>
    </el-form-item>
  </el-form>
  <div class="login-btn">
    <el-button :icon="CircleClose" round size="large" @click="onReset">
      {{ $t('login.reset') }}
    </el-button>
    <el-button
      :icon="UserFilled"
      round
      size="large"
      type="primary"
      :loading="isLoad"
      @click="onLogin"
    >
      {{ $t('login.login') }}
    </el-button>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, readonly, onMounted, onBeforeUnmount } from 'vue';
import { useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';
import { GLOBAL__CONFIG } from '@/constants/config';
import { ElNotification } from 'element-plus';
import { loginApi } from '@/api/modules/login';
import { useUserStore } from '@/store/modules/user';
import { useTabsStore } from '@/store/modules/tabs';
import { useGlobalStore } from '@/store/modules/global';
import { useKeepAliveStore } from '@/store/modules/keepAlive';
import { initDynamicRouter } from '@/router/modules/dynamicRouter';
import { CircleClose, UserFilled } from '@element-plus/icons-vue';
import type { ElForm } from 'element-plus';
// import md5 from "md5";
type FormInstance = InstanceType<typeof ElForm>;

const router = useRouter();
useKeydownSub();
const { formValue, formRef, formRules, onReset } = useLoginForm();

const isLoad = ref(false);
const onLogin = () => {
  formRef.value?.validate(async valid => {
    if (!valid) return;
    isLoad.value = true;
    const { data, code } = await loginApi(formValue);
    isLoad.value = false;
    if (code !== 0) return;
    useUserStore().setToken(data.access_token);
    await initDynamicRouter();
    // 3.清空 tabs、keepAlive 数据
    useTabsStore().setTabs([]);
    useKeepAliveStore().setKeepAliveName([]);

    router.push(GLOBAL__CONFIG.homeUrl);
    // ElNotification({
    //   title: getTimeState(),
    //   message: "欢迎登录 Geeker-Admin",
    //   type: "success",
    //   duration: 3000
    // });
  });
};

function useLoginForm() {
  const formRef = ref<FormInstance>();
  const formValue = reactive({ account: '', password: '' });
  const formRules = readonly({
    account: [{ required: true, message: '请输入用户名' }],
    password: [{ required: true, message: '请输入密码' }]
  });
  const onReset = () => {
    formRef.value?.resetFields();
  };
  return { formValue, formRef, formRules, onReset };
}

function useKeydownSub() {
  onMounted(() => {
    document.onkeydown = (e: KeyboardEvent) => {
      if (['Enter', 'enter', 'NumpadEnter'].includes(e.code)) {
        !isLoad.value && onLogin();
      }
    };
  });
  onBeforeUnmount(() => {
    document.onkeydown = null;
  });
}
</script>

<style scoped lang="scss">
.el-form-item {
  margin-bottom: 40px;
}
.login-btn {
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 40px;
  white-space: nowrap;
  .el-button {
    width: 185px;
  }
}
</style>
