import React from 'react';
import styles from './index.less';

const C_Layout: React.FC = ({ children, width = 1300, ...props }) => {
  return (
    <div className={styles.container} style={{ maxWidth: `${width}px` }} {...props}>
      {children}
    </div>
  );
};
export default C_Layout;
