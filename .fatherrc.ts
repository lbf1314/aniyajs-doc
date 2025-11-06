import { defineConfig } from 'father';

export default defineConfig({
  // more father config: https://github.es/umijs/father/blob/master/docs/config.md
  esm: { input: 'components', output: 'es', transformer: 'babel' },
  cjs: { input: 'components', output: 'lib', transformer: 'babel' },
  extraBabelPlugins: [
    [
      'babel-plugin-import',
      { libraryName: 'antd', libraryDirectory: 'es', style: true },
      'antd',
    ],
  ],
});
