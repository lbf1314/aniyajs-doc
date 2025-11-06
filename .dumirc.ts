import { defineConfig } from 'dumi';
import path from 'path';

export default defineConfig({
  logo: '/aniyajs-doc/img/logo.jpg',
  publicPath: "/aniyajs-doc/",
  outputPath: 'docs',
  resolve: {
    docDirs: ["docs-src"],
    atomDirs: [
      { type: 'component', dir: 'components/form' },
      { type: 'component', dir: 'components/extra' },
    ],
    codeBlockMode: 'passive',
  },
  favicons: ['/aniyajs-doc/img/favicon.ico'],
  themeConfig: {
    name: 'aniyajs',
    nav: [
      { title: '组件库', link: '/aniyajs-doc/components' },
      { title: '脚手架', link: '/aniyajs-doc/scaffold', },
      { title: '工具集', link: '/aniyajs-doc/tools/generator', },
    ],
    sidebar: {
      '/aniyajs-doc/': [],
    },
  },
  extraBabelPlugins: [],
  alias: {
    '@aniyajs/components': path.join(__dirname, 'components'),
  },
  hash: true,
});
