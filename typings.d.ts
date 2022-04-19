declare module '*.css';
declare module '*.less'
declare const fleProcess: any;

declare module 'axios' {
  import './src/types/tools/service';
  export default axios;
}