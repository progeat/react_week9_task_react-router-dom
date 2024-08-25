import { FormCreateTodo } from '../index';
import styles from './header-app.module.css';

export const HeaderApp = (props) => {
	return (
		<div className={styles['header-app']}>
			<FormCreateTodo {...props} />
		</div>
	);
};
