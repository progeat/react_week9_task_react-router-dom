import { Loader, Item } from '../index';
import styles from './list.module.css';

export const List = ({ isLoading, todos, setTodos }) => {
	if (isLoading) return <Loader />;

	return (
		<ul className={styles.list}>
			{todos.map(({ id, title, completed }) => (
				<Item
					key={id}
					id={id}
					title={title}
					completed={completed}
					setTodos={setTodos}
				/>
			))}
		</ul>
	);
};
