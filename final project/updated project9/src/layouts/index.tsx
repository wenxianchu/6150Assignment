import React, { useEffect, useState } from 'react';
import 'antd-mobile/dist/antd-mobile.less';
import NotFound from '@/pages/404';
import AppNavbar from '@/components/navbar';
import { Modal, Toast } from 'antd-mobile';
import { ComponentProps } from '@/typings';
import styles from './index.less';
import C_Layout from '@/components/C_Layout';
import { connect } from 'dva';

const THIME = {
  0: '#fff',
  1: '#000',
};
const BasicLayout: React.FC<ComponentProps> = ({ children, history, location, ...props }) => {
  const [isFlag, setIsFlag] = useState(false);
  const [theme, setTheme] = useState(THIME[0]);
  useEffect(() => {}, [location]);
  return (
    <div className={styles.container}>
      <C_Layout style={{ height: '10vh' }}>
        <div className={styles.header}>
          <div>Xianchu Wen</div>
        </div>
        <div className={styles.h_box}>
          <div
            onClick={() =>
              props.dispatch({
                type: 'home/saveStatus',
                payload: { isFlag: !props.home.isFlag },
              })
            }
          >
            theme
          </div>
        </div>
      </C_Layout>
      <div className={styles.bottom}>
        <C_Layout>
          <div className={styles.b_box}>
            <span onClick={() => history.push('/home')}>
              <a>Home</a>
            </span>
            <span onClick={() => history.push('/about')}>
              <a>Contact Me</a>
            </span>
            <span onClick={() => history.push('/portfolio')}>
              <a>Project</a>
            </span>
          </div>
        </C_Layout>
      </div>
      <div style={{ marginTop: '8vh', backgroundColor: `${theme}` }}>{children}</div>
      {/* <div className={styles.footer}>
        <C_Layout>
          <div className={styles.f_box}>
            <span onClick={() => history.push('/home')}>home</span>
            <span onClick={() => history.push('/about')}>about</span>
            <span onClick={() => history.push('/portfolio')}>Portfolio</span>
          </div>
        </C_Layout>
      </div> */}
    </div>
  );
};

export default connect(s => s)(BasicLayout);
