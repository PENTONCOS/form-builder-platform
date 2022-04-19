/*
 * @Author: your name
 * @Date: 2021-11-12 14:59:15
 * @LastEditTime: 2022-01-05 14:06:22
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /fle-cli/packages/creation-app/template/react-ts-pro/src/const/serviceEnv.ts
 */
import type { FleAppEnv, BaseURLMap } from '@/types/const/serviceEnv';

export const fleAppEnv: FleAppEnv = fleProcess.fleEnv || "dev";

export const baseURLMap: BaseURLMap = {
  'java': {
    dev: 'https://dev-gateway.fxqifu.net/pangu',
    test: 'https://qa-gateway.fxqifu.net/pangu',
    prod: 'https://gateway.fxqifu.net/pangu'
  }
}
export const baseServiceType: string = 'java';

export const baseURL: string = baseURLMap[baseServiceType][fleAppEnv] || '';