import { useState } from 'react';
import config from '../config.json';

export const useRequestUpdateTodo = () => {
	const [isUpdatingFlag, setIsUpdatingFlag] = useState(false);
	const [errorUpdating, setErrorUpdating] = useState('');

	const onUpdating = (id, title, completed, setTodo) => {
		setIsUpdatingFlag(true);

		const todoEndpoint = config.baseURL + 'todos/' + id;

		fetch(todoEndpoint, {
			method: 'PUT',
			headers: { 'Content-Type': 'application/json;charset=utf-8' },
			body: JSON.stringify({ title, completed }),
		})
			.then((responseData) => {
				if (!responseData.ok) {
					throw Error('data could not be sent to this resource');
				}

				return responseData.json();
			})
			.then((updatedTodo) => {
				console.log('The task has been updated', updatedTodo);
				setTodo(updatedTodo);
				setErrorUpdating('');
			})
			.catch((error) => {
				console.error(error);
				setErrorUpdating(error.message);
			})
			.finally(() => setIsUpdatingFlag(false));
	};

	return {
		isUpdatingFlag,
		errorUpdating,
		onUpdating,
	};
};
