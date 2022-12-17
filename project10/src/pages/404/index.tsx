import React from 'react'
import styles from './index.less'

const NotFound: React.FC = () => {
	return (
		<div className={styles.notFound}>
			<img src="default/404.png" alt="" />
			<div className={styles.warn}>您要找的页面似乎被偷走了……</div>
			<div className={`${styles.submit} button`}>
				返回首页
			</div>

		</div>
	)
}


export default NotFound;