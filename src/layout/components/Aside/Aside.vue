<!-- 纵向布局 -->
<template>
  <div class="aside-box" :style="{ width: isCollapse ? '65px' : '260px' }">
    <div class="logo flx-center">
      <span v-show="!isCollapse" class="logo-text">{{ title }}</span>
    </div>
    <el-scrollbar>
      <el-menu
        :router="false"
        :default-active="activeMenu"
        :collapse="isCollapse"
        :unique-opened="accordion"
        :collapse-transition="false"
      >
        <SubMenu :menu-list="menuListTree" />
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script setup lang="ts" name="layoutVertical">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { storeToRefs } from 'pinia';
import { useAuthStore } from '@/store/modules/auth';
import { useGlobalStore } from '@/store/modules/global';
import SubMenu from '@/layout/components/Menu/SubMenu.vue';

const title = import.meta.env.VITE_GLOB_APP_TITLE;

const route = useRoute();
const { menuListTree } = storeToRefs(useAuthStore());
const globalStore = useGlobalStore();
const accordion = computed(() => globalStore.accordion);
const isCollapse = computed(() => globalStore.isCollapse);
const activeMenu = computed(
  () => (route.meta.activeMenu ? route.meta.activeMenu : route.path) as string
);
</script>

<style scoped lang="scss">
@import './index.scss';
</style>
