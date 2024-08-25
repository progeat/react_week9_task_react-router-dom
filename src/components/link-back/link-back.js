import { Link } from 'react-router-dom';
import styles from './link-back.module.css';

export const LinkBack = () => (
	<Link className={styles['link-back']} to="/">
		❮ Back
	</Link>
);
