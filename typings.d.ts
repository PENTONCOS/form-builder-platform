declare module '*.css';
declare module '*.less';
declare type envType = 'dev' | 'qa' | 'prod';
declare const process: {
  env: {
    __fle_env__: envType;
    __fle_bundler_type__: 'webpack5' | 'vite';
    __fle_runTime__: 'serve' | 'online';
    __fle_title__: string;
    __fle_favicon__: string;
    __fle_miniBaseRouter__: string;
    __fle_baseRouter__: string;
    __fle_loginErrUrl__: string;
    __fle_mockId__: number;
    __fle_umdFormBaseRouter__: boolean;
    __SENTRY_RELEASE__: string;
    __SENTRY_PROJECT_NAME__: string;
    fleEnv: envType | mock;
    REACT_APP_API_ENV: envType;
  }
};
declare const fleProcess: {
  fleEnv: envType | mock,
  REACT_APP_API_ENV: envType,
};

declare module 'axios' {
  import './src/types/tools/service';
  export default axios;
}