import { Routes, Route } from 'react-router-dom';
import { MainPage, TodoPage, ErrorPage, NotFound } from './pages';
import styles from './app-todo.module.css';

export const TodoApp = () => {
	return (
		<div className={styles.app}>
			<h1 className={styles['title-app']}>TODO List App</h1>
			<Routes>
				<Route path="/" element={<MainPage />} />
				<Route path="/todos/:id" element={<TodoPage />} />
				<Route path="/not-found" element={<NotFound />} />
				<Route path="*" element={<ErrorPage />} />
			</Routes>
		</div>
	);
};
