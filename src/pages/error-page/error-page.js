import { LinkBack } from '../../components';
import styles from './error-page.module.css';

export const ErrorPage = () => {
	return (
		<div className={styles['error-page']}>
			<LinkBack />
			<h1 className={styles['error-page_title']}>ERROR 404</h1>
		</div>
	);
};
