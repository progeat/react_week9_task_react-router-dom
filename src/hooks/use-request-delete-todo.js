import { useState } from 'react';
import config from '../config.json';

export const useRequestDeleteTodo = () => {
	const [isDeletingFlag, setIsDeleting] = useState(false);
	const [errorDeleting, setErrorDeleting] = useState('');

	const onDelete = (id, setIsDeletedTodo) => {
		const todoEndpoint = config.baseURL + 'todos/' + id;
		setIsDeleting(true);

		fetch(todoEndpoint, {
			method: 'DELETE',
		})
			.then((responseData) => {
				if (!responseData.ok) {
					throw Error('data could not be sent to this resource');
				}

				return responseData.json();
			})
			.then((deletedTodo) => {
				console.log('The task has been deleted', deletedTodo);
				setIsDeletedTodo(true);
				setErrorDeleting('');
			})
			.catch((error) => {
				console.error(error);
				setErrorDeleting(error.message);
			})
			.finally(() => setIsDeleting(false));
	};

	return {
		isDeletingFlag,
		errorDeleting,
		onDelete,
	};
};
