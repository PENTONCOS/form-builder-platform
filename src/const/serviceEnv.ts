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