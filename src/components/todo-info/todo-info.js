import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useRequestDeleteTodos, useRequestUpdateTodos } from '../../hooks';
import styles from './todo-info.module.css';
import { Loader } from '../loader/loader';

export const TodoInfo = ({ todos, setTodos }) => {
	const [editId, setEditId] = useState('');
	const [editInputValue, setEditInputValue] = useState('');
	const { isDeletingFlag, errorDeleting, onDelete } = useRequestDeleteTodos(setTodos);
	const { isUpdatingFlag, errorUpdating, onUpdating } = useRequestUpdateTodos(setTodos);
	const { id } = useParams();

	if (!todos[0]) return <Loader />;

	let { title, completed } = todos.find((todo) => todo.id === Number(id));

	return (
		<div className={styles['todo-info']}>
			<h3 className={styles['todo-info_title']}>Todo info</h3>
			<div
				className={
					styles['todo-info_inner'] +
					' ' +
					(completed && styles['todo-info__completed'])
				}
			>
				{editId ? (
					<textarea
						type="text"
						className={styles['input-edit']}
						value={editInputValue}
						autoFocus
						onChange={({ target }) => setEditInputValue(target.value)}
					></textarea>
				) : (
					<p className={styles['todo-info_text']}>{title}</p>
				)}
				<div className={styles['item_button-wrapp']}>
					{editId ? (
						<button
							className={styles['item_button-edit']}
							onClick={() => {
								onUpdating(id, editInputValue, completed);
								setEditId('');
							}}
						>
							confirm
						</button>
					) : (
						<button
							className={styles['item_button-edit']}
							onClick={() => {
								setEditId(id);
								setEditInputValue(title);
							}}
						>
							edit
						</button>
					)}
					<button
						className={
							styles['item_button-complete'] +
							' ' +
							(completed && styles['item_button-complete__active'])
						}
						onClick={() => onUpdating(id, title, (completed = !completed))}
						disabled={isUpdatingFlag}
					>
						complete
					</button>
					<button
						className={styles['item_button-delete']}
						onClick={() => onDelete(id)}
						disabled={isDeletingFlag}
					>
						delete
					</button>
				</div>
			</div>
		</div>
	);
};
