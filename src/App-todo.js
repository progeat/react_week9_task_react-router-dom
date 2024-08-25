import { Routes, Route, Navigate } from 'react-router-dom';
import { MainPage, TodoPage, NotFound } from './pages';
import styles from './app-todo.module.css';

export const TodoApp = () => {
	return (
		<div className={styles.app}>
			<h1 className={styles['title-app']}>TODO List App</h1>
			<Routes>
				<Route path="/" element={<MainPage />} />
				<Route path="/task/:id" element={<TodoPage />} />
				<Route path="/404" element={<NotFound />} />
				<Route path="*" element={<Navigate to="/404" />} />
			</Routes>
		</div>
	);
};
