import React, { useEffect, useState, useRef } from 'react';
import { connect } from 'dva';

import { Carousel, Modal, WingBlank } from 'antd-mobile';
import { ComponentProps } from '@/typings';
import styles from './index.less';
const Home: React.FC<ComponentProps> = props => {
  console.log(props.home.isFlag ? props.home.THIME[1] : props.home.THIME[0], '1111');
  return (
    <div
      className={styles.home}
      style={{ background: props.home.isFlag ? props.home.THIME[1] : props.home.THIME[0] }}
    >
      <div className={styles.home_top}>
        <div>
          <img src={require('../../assets/img/1.jpeg')} alt="" />
        </div>
        <div>
          <img src={require('../../assets/img/2.jpeg')} alt="" />

          {/* <p>I can't understand why people are </p>
          <p> frightened of new ideas, </p>
          <p> I'm frightened of of the old ones." </p>
          <p> - John Cage</p>
          font-family */}
        </div>
      </div>

      <div className={styles.card}>
        <h3>About Me</h3>
        <p>
          Born in 2000.04.07 Graduated from Sun Yat-Sen University Studying in Northeastern meeting
        </p>
        <p>
          University Champion in the 2020 discus throw events at the Sun Yat-sen University sport
        </p>
        <p>Champion in the 2020 baseball and softball league of four campus Single</p>
      </div>
      <div className={styles.card}>
        <h3>Skills</h3>
        <p>Java</p>
        <p>Javascript/CSS/Html</p>
        <p>Python</p>
        <p> Baseball</p>
        <p> Frisbee </p>
        <p> Video</p>
      </div>
    </div>
  );
};

export default connect(s => s)(Home);
