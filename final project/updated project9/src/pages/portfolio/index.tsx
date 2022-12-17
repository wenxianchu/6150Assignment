import React from 'react';
import styles from './index.less';
import BasketballStatistics from './components/Basketball Statistics';
import { connect } from 'dva';

const Portfolio: React.FC = props => {
  return (
    <div
      className={styles.container}
      style={{ background: props.home.isFlag ? props.home.THIME[1] : props.home.THIME[0] }}
    >
      <div>
        <div>
          <BasketballStatistics {...{ style: { backgroundColor: '#2980b9' } }} />
        </div>
        {/* <div>2</div> */}
      </div>
      <div>
        <div>3</div>
        <div>4</div>
      </div>
      <div>
        <div>5</div>
        <div>2</div>
      </div>
    </div>
  );
};
export default connect(s => s)(Portfolio);
