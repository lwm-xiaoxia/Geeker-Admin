import type { BuildOptions } from "vite";

export default function createBuildOpts(): BuildOptions {
  return {
    outDir: "dist",
    minify: "esbuild",
    // esbuild 打包更快，但是不能去除 console.log，terser打包慢，但能去除 console.log
    // minify: "terser",
    // terserOptions: {
    // 	compress: {
    // 		drop_console: viteEnv.VITE_DROP_CONSOLE,
    // 		drop_debugger: true
    // 	}
    // },
    sourcemap: false,
    // 禁用 gzip 压缩大小报告，可略微减少打包时间
    reportCompressedSize: false,
    // 规定触发警告的 chunk 大小
    chunkSizeWarningLimit: 200,
    rollupOptions: {
      output: {
        // Static resource classification and packaging
        chunkFileNames: "assets/js/[name]-[hash].js",
        entryFileNames: "assets/js/[name]-[hash].js",
        assetFileNames: "assets/[ext]/[name]-[hash].[ext]"
      }
      // output: {
      //   entryFileNames: chunkInfo => {
      //     // 获取当前的文件路径
      //     const path = chunkInfo.facadeModuleId;
      //     // 提取目录名
      //     const directoryName = path?.split("/").slice(-2, -1)[0];
      //     // 使用目录名作为文件名
      //     return `${directoryName}/[name].js`;
      //   },
      //   chunkFileNames: "assets/js/[name].[hash].js",
      //   assetFileNames: "assets/[ext]/[name].[hash].[ext]"
      // }
    }
  };
}
