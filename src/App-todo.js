import { Routes, Route } from 'react-router-dom';
import { MainPage, TodoInfo } from './components';
import { useRequestGetTodos } from './hooks';
import styles from './app-todo.module.css';

export const TodoApp = () => {
	const props = useRequestGetTodos();

	return (
		<div className={styles.app}>
			<h1 className={styles['title-app']}>TODO List App</h1>
			<Routes>
				<Route path="/" element={<MainPage {...props} />} />
				<Route path="/task/:id" element={<TodoInfo {...props} />} />
			</Routes>
		</div>
	);
};
