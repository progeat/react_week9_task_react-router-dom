import { useEffect, useState } from 'react';
import config from '../config.json';

export const useRequestGetTodo = (id) => {
	const [todo, setTodo] = useState([]);
	const [isTodoLoaded, setIsTodoLoaded] = useState(false);
	const [errorGetting, setErrorGetting] = useState('');

	const todoEndpoint = config.baseURL + 'todos/' + id;

	useEffect(() => {
		setIsTodoLoaded(true);

		fetch(todoEndpoint)
			.then((responseData) => {
				if (!responseData.ok) {
					throw Error('could not fetch the data for that resourse');
				}

				return responseData.json();
			})
			.then((todoData) => {
				setTodo(todoData);
				setErrorGetting('');
			})
			.catch((error) => {
				console.error(error);
				setErrorGetting(error.message);
			})
			.finally(() => setIsTodoLoaded(false));
	}, [todoEndpoint, id]);

	return {
		// setTodo,
		todo,
		isTodoLoaded,
		errorGetting,
	};
};
