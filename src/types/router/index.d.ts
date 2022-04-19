import { ComponentType, ReactElement } from 'react';
import type { RouteComponentProps } from 'react-router-dom';

export interface RouterConfigInterface {
  path?: string;
  component?: string;
  layout?: string; 
  redirect?: string;
  exact?: boolean;
  routers?: any
  loading?: LoadingForm;
}

export interface RouterConfigItemInterface {
  path?: string;
  component?: any;
  CombineComponent?: any;
  layout?: any; 
  redirect?: string;
  exact?: boolean;
  routers?: any[]
  loading?: LoadingForm;
}

export interface RouterParams extends RouterConfigItemInterface {
  render?: (props: RouteComponentProps<any>) => React.ReactNode;
}



export type RouterForm = RouterConfigInterface[];
export type LoadingForm = ComponentType<any>;