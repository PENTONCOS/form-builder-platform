import React, { FC, ReactElement } from 'react';
import { observer } from 'mobx-react';
import { useHistory } from 'react-router-dom';
import { PageContainer } from '@fle-ui/pro-layout';
import { Button } from '@fle-ui/next';

import './index.less';

const Home: FC = (): ReactElement => {

  const history = useHistory();

  const handleDetails = () => {
    history.push('/home/details')
  }

  return (
    <PageContainer>
      hello fle app <Button type='link' onClick={handleDetails}>去详情</Button>
    </PageContainer>
  )
}

export default observer(Home);