import { useNavigate } from 'react-router-dom';
import styles from './not-found.module.css';

export const NotFound = () => {
	const navigate = useNavigate();

	return (
		<div className={styles['not-found-page']}>
			<h3 className={styles['not-found-page_title']}>Todo info</h3>
			<button
				className={styles['not-found-page_btn-main']}
				onClick={() => navigate('/')}
			>
				❮ Main
			</button>
			<div className={styles['not-found-page_inner']}>
				<p className={styles['not-found-page_text']}>
					The TODO page was not found
				</p>
			</div>
		</div>
	);
};
