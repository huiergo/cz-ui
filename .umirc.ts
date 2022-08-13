import { defineConfig } from 'dumi';

// 配置路由以及 publicPath
// 托管在 Github Pages，所以应用是挂在 ${username}.github.io/${repo} 下面，我们站点应用的静态资源路径publicPath以及路由basename都需要进行适配。
let base ='/cz-ui';
let publicPath='/cz-ui/'

if(process.env.SITE_BUILD_ENV==='PREVIEW'){
  base=undefined
  publicPath=undefined
}
export default defineConfig({
    title: 'CZ UI', // 站点名称
    mode: 'site',
    outputPath: 'doc-site', // 输出文件夹
    exportStatic: {}, // 后续会部署到 github pages 直接全部生成静态页面 不走前端路由
    dynamicImport: {}, // 拆包 站点过大时可以优化首屏加载速度
    base,
    publicPath
  });