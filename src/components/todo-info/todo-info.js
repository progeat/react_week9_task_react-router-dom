import { useParams } from 'react-router-dom';
import styles from './todo-info.module.css';

export const TodoInfo = () => {
	const params = useParams();

	console.log(params);

	return (
		<div className={styles['todo-info']}>
			<h3 className={styles['todo-info_title']}>Todo info</h3>
		</div>
	);
};
