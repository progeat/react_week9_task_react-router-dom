import { useEffect, useState } from 'react';
import config from '../config.json';
import { useNavigate } from 'react-router-dom';

export const useRequestGetTodo = (id) => {
	const [todo, setTodo] = useState({});
	const [isTodoLoaded, setIsTodoLoaded] = useState(false);

	const navigate = useNavigate();

	const todoEndpoint = config.baseURL + 'todos/' + id;

	useEffect(() => {
		setIsTodoLoaded(true);

		fetch(todoEndpoint)
			.then((responseData) => {
				if (!responseData.ok) {
					throw Error('There is no such TODO');
				}

				return responseData.json();
			})
			.then((todoData) => setTodo(todoData))
			.catch((error) => {
				console.error(error);
				navigate('/not-found');
			})
			.finally(() => setIsTodoLoaded(false));
	}, [todoEndpoint, id, navigate]);

	return {
		todo,
		setTodo,
		isTodoLoaded,
	};
};
