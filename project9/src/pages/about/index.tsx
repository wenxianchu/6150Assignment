import React from 'react';
import styles from './index.less';
import { connect } from 'dva';

const About: React.FC = props => {
  return (
    <div
      className={styles.container}
      style={{ background: props.home.isFlag ? props.home.THIME[1] : props.home.THIME[0] }}
    >
      <div>
        <p> E-Mail: wenxianchu@163.com</p>
        <p> Linkedin: https://www.linkedin.com/in/xianchu-wen-701245200/</p>
        <p>Github: https://github.com/wenxianchu </p>
        <p>Steam: 889979219</p>
      </div>
      <div>
        <div>
          {/* <span>Music Education</span> */}
          <img src={require('../../assets/img/3.jpeg')} alt="" />
        </div>
        <div>
          {/* <span>Music Education</span> */}
          <img src={require('../../assets/img/4.jpeg')} alt="" />
        </div>
      </div>
    </div>
  );
};
export default connect(s => s)(About);
