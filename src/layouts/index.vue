<!-- 💥 这里是一次性加载 LayoutComponents -->
<template>
  <el-watermark id="watermark" :font="font" :content="watermark ? ['Geeker Admin', 'Happy Working'] : ''">
    <el-container class="layout">
      <el-aside><Aside /></el-aside>
      <el-container>
        <el-header>
          <ToolBarLeft />
          <ToolBarRight />
        </el-header>
        <Main />
      </el-container>
    </el-container>
    <ThemeDrawer />
  </el-watermark>
</template>

<script setup lang="ts" name="layout">
import { computed, reactive, watch } from "vue";
import { useGlobalStore } from "@/stores/modules/global";
import ThemeDrawer from "./components/ThemeDrawer/index.vue";
import Main from "./components/Main/index.vue";
import ToolBarLeft from "./components/Header/ToolBarLeft.vue";
import ToolBarRight from "./components/Header/ToolBarRight.vue";
import Aside from "./components/Aside/Aside.vue";

const globalStore = useGlobalStore();

const isDark = computed(() => globalStore.isDark);
const watermark = computed(() => globalStore.watermark);

const font = reactive({ color: "rgba(0, 0, 0, .15)" });
watch(isDark, () => (font.color = isDark.value ? "rgba(255, 255, 255, .15)" : "rgba(0, 0, 0, .15)"), {
  immediate: true
});
</script>

<style scoped lang="scss">
.layout {
  min-width: 600px;
}
.el-container {
  width: 100%;
  height: 100%;
  :deep(.el-aside) {
    width: auto;
    background-color: var(--el-menu-bg-color);
    border-right: 1px solid var(--el-aside-border-color);
  }
  .el-header {
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 55px;
    padding: 0 15px;
    background-color: var(--el-header-bg-color);
    border-bottom: 1px solid var(--el-header-border-color);
  }
}
</style>
