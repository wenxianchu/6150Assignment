import React, { useEffect } from 'react';
import 'antd-mobile/dist/antd-mobile.less';
import NotFound from '@/pages/404';
import AppNavbar from '@/components/navbar';
import { Modal, Toast } from 'antd-mobile';
import { ComponentProps } from '@/typings';

const BasicLayout: React.FC<ComponentProps> = props => {
  useEffect(() => {}, [props.location]);

  return (
    <>
      <div>{props.children}</div>
    </>
  );
};

export default BasicLayout;
