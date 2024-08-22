import { Routes, Route } from 'react-router-dom';
import { MainPage, TodoInfo } from './components';
import styles from './app-todo.module.css';

export const TodoApp = () => {
	return (
		<div className={styles.app}>
			<h1 className={styles['title-app']}>TODO List App</h1>
			<Routes>
				<Route path="/" element={<MainPage />} />
				<Route path="/task/:id" element={<TodoInfo />} />
			</Routes>
		</div>
	);
};
