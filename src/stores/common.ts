import { makeAutoObservable } from 'mobx';
import { request } from '@fle-tools/request';
import commonApi from '@/api/common';

import type { StateProps } from '@/types/common/store';

class CommonStore {

  [key: string]: any;

  constructor() {
    makeAutoObservable(this);
  }

  updateState = (params: StateProps) => {
    for (let [key, value] of Object.entries(params)) {
      this[key] = value;
    }
  };

  memberInfo = {};

  getMemberInfo = async (params: any = {}) => {
    try {
      const { data } = await request.get(commonApi.memberInfo, { params });
      console.log(data);
    } catch (ex) {
      console.warn(ex);
    }
  }

  getStructureEmployees = async (params: any = {}) => {
    // try {
    //   const data = await $http.get(commonApi['structure-employees'], { params });
    //   console.log(data);
    // } catch (ex) {
    //   console.warn(ex);
    // }
    
  }

}

export default new CommonStore();