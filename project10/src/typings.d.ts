import { History } from 'history';
// 组件类型
interface ComponentProps {
	history: History;
	match: {
		params: {
			[key: string]: string;
		};
		[key: string]: any;
	};
	location: {
		pathname: string;
		query: {
			[key: string]: string;
		};
		search: string;
	};

}