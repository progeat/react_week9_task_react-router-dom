import { Link } from 'react-router-dom';
import styles from './item.module.css';

export const Item = ({ id, title, completed }) => {
	return (
		<li className={styles.item + ' ' + (completed && styles['item-completed'])}>
			<Link to={`todos/${id}`} className={styles.link}>
				{title}
			</Link>
		</li>
	);
};
