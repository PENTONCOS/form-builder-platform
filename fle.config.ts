import { defineConfig } from '@fle-cli/react-script';
import Config from './package.json';

export default defineConfig({
  title: '表单解决方案',
  favicon: 'https://oss.elebuys.com/resource/programme/202106211028580003961886.png',
  app: {
    baseRouter: Config.appName,
    miniBaseRouter: Config.homePath,
    umdFormBaseRouter: true
  }
})