import { makeAutoObservable } from 'mobx';
import $http from '@/tools/service';
import commonApi from '@/api/common';
import { Modal } from '@fle-ui/next';


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

  loginConfirmIndex: number = 0;

  // 去登录
  goLogin = () => {

    if (this.loginConfirmIndex > 0) {
      return;
    }
    Modal.confirm({
      title: "登陆已失效，点击确定跳转登录",
      icon: null,
      okCancel: false,
      okText: "确定",
      onOk: () => {
        // window.location.href = ``;
        this.loginConfirmIndex = 0;
      },
      zIndex: 999999
    });
    this.loginConfirmIndex = this.loginConfirmIndex + 1;
  }

  memberInfo = {};

  getMemberInfo = async (params: any = {}) => {
    try {
      const data = await $http.get(commonApi.memberInfo, { params });
      console.log(params);
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