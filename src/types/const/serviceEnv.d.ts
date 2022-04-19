
export type FleAppEnv = 'dev' | 'test' | 'prod' | string;
 
export interface ServiceMap {
  [key: string]: string
}

export interface BaseURLMap {
  [key: string]: ServiceMap;
}