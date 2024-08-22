import { useState } from 'react';
import { HeaderApp, List } from '../index';
import { useRequestGetTodos, useDebonce } from '../../hooks';
import { getFilteredListTodos } from '../../utils';
import styles from './main-page.module.css';

export const MainPage = ({ todos, setTodos, isLoading, errorGetting }) => {
	const [searchValue, setSearchValue] = useState('');
	const [isSortFlag, setIsSortFlag] = useState(false);
	const { debouncedValue } = useDebonce(searchValue, 300);

	// const { todos, setTodos, isLoading, errorGetting } = useRequestGetTodos();

	const newListTodos = getFilteredListTodos(todos, isSortFlag, debouncedValue);

	if (errorGetting) return <div className={styles.error}>{errorGetting}</div>;

	return (
		<>
			<HeaderApp setTodos={setTodos}>TODO List App</HeaderApp>
			<div className={styles['list-header']}>
				<button
					className={
						styles['button-sort'] +
						' ' +
						(isSortFlag && styles['button-sort--active'])
					}
					onClick={() => setIsSortFlag(!isSortFlag)}
				>
					Sort
				</button>
				<span className={styles.span}>|</span>
				<input
					type="text"
					value={searchValue}
					className={styles['input-search']}
					placeholder="Search..."
					onChange={({ target }) => setSearchValue(target.value)}
				/>
			</div>
			<List isLoading={isLoading} todos={newListTodos} setTodos={setTodos} />
		</>
	);
};
