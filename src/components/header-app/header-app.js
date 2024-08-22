import { FormCreateTodo } from '../index';
import styles from './header-app.module.css';

export const HeaderApp = ({ setTodos }) => {
	return (
		<div className={styles['header-app']}>
			<FormCreateTodo setTodos={setTodos} />
		</div>
	);
};
