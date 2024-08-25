import { useState } from 'react';
import { HeaderApp, List } from '../../components';
import { useDebonce, useRequestGetTodos, useRequestCreateTodo } from '../../hooks';
import { getFilteredListTodos } from '../../utils';
import styles from './main-page.module.css';

export const MainPage = () => {
	const [searchValue, setSearchValue] = useState('');
	const [isSortFlag, setIsSortFlag] = useState(false);
	const { todos, setTodos, isLoading, errorGetting } = useRequestGetTodos();
	const { isCreatingFlag, errorCreating, requestCreateTodo } =
		useRequestCreateTodo(setTodos);
	const { debouncedValue } = useDebonce(searchValue, 300);

	const newListTodos = getFilteredListTodos(todos, isSortFlag, debouncedValue);

	if (errorGetting) return <div className={styles.error}>{errorGetting}</div>;

	const loaderRun = isLoading || isCreatingFlag;

	return (
		<>
			<HeaderApp
				isCreatingFlag={isCreatingFlag}
				errorCreating={errorCreating}
				requestCreateTodo={requestCreateTodo}
			>
				TODO List App
			</HeaderApp>
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
			<List loaderRun={loaderRun} todos={newListTodos} />
		</>
	);
};
