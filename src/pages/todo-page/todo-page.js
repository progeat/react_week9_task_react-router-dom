import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
	useRequestDeleteTodo,
	useRequestUpdateTodo,
	useRequestGetTodo,
} from '../../hooks';
import styles from './todo-page.module.css';
import { Loader } from '../../components';

export const TodoPage = () => {
	const [editInputValue, setEditInputValue] = useState('');
	const [isEditTodo, setIsEditTodo] = useState(false);
	const [isDeletedTodo, setIsDeletedTodo] = useState(false);

	const { id } = useParams();

	const { todo, setTodo, isTodoLoaded } = useRequestGetTodo(id);
	const { isDeletingFlag, errorDeleting, onDelete } = useRequestDeleteTodo();
	const { isUpdatingFlag, errorUpdating, onUpdating } = useRequestUpdateTodo();

	const navigate = useNavigate();

	let { title, completed } = todo;

	const errorOperation = errorUpdating || errorDeleting;

	if (isTodoLoaded || isUpdatingFlag || isDeletingFlag) return <Loader />;

	return (
		<div className={styles['todo-page']}>
			<h3 className={styles['todo-page_title']}>Todo info</h3>
			<button className={styles['todo-page_btn-back']} onClick={() => navigate(-1)}>
				❮ Back
			</button>
			<div
				className={
					styles['todo-page_inner'] +
					' ' +
					(completed && styles['todo-page__completed'])
				}
			>
				{errorOperation && (
					<div className={styles['todo-page_error']}>{errorOperation}</div>
				)}
				{isDeletedTodo ? (
					<div className={styles['todo-page_deleted']}>
						The TODO has been deleted
					</div>
				) : (
					<>
						{isEditTodo ? (
							<textarea
								type="text"
								className={styles['input-edit']}
								value={editInputValue}
								autoFocus
								onChange={({ target }) => setEditInputValue(target.value)}
							></textarea>
						) : (
							<p className={styles['todo-page_text']}>{title}</p>
						)}
						<div className={styles['item_button-wrapp']}>
							{isEditTodo ? (
								<button
									className={styles['item_button-edit']}
									onClick={() => {
										onUpdating(
											id,
											editInputValue,
											completed,
											setTodo,
										);
										setIsEditTodo(false);
									}}
								>
									confirm
								</button>
							) : (
								<button
									className={styles['item_button-edit']}
									onClick={() => {
										setIsEditTodo(true);
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
								onClick={() =>
									onUpdating(
										id,
										title,
										(completed = !completed),
										setTodo,
									)
								}
								disabled={isUpdatingFlag}
							>
								complete
							</button>
							<button
								className={styles['item_button-delete']}
								onClick={() => onDelete(id, setIsDeletedTodo)}
								disabled={isDeletingFlag}
							>
								delete
							</button>
						</div>
					</>
				)}
			</div>
		</div>
	);
};
