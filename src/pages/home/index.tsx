import React, { FC, ReactElement, useEffect } from 'react';
import { observer } from 'mobx-react';
import { useHistory } from 'react-router-dom';
import { PageContainer } from '@fle-ui/pro-layout';
import { Button } from '@fle-ui/next';
import { CommonStore } from '@/stores'

import './index.less';

const Home: FC = (): ReactElement => {

  const history = useHistory();

  useEffect(() => {
    CommonStore.getMemberInfo();
  }, [])

  const handleDetails = () => {
    history.push('/home/details')
  }

  console.log('test')

  return (
    <PageContainer>
      hello fle app <Button type='link' onClick={handleDetails}>去详情</Button>
    </PageContainer>
  )
}

export default observer(Home);