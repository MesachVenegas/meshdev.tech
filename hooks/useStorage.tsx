import { useEffect, useState } from "react";

/**
 * Custom hook to use localStorage in React components.
 *
 * @param key The key to use for localStorage.
 * @param initialValue The initial value to use if the key is not found in localStorage.
 * @returns A tuple containing the current value and a function to update it.
 */
export default function useStorage<T>(
	key: string,
	initialValue: T
): [T, (newValue: T) => void] {
	const [state, setState] = useState<T>(() => {
		try {
			if (typeof window !== "undefined") {
				const storedValue = window.localStorage.getItem(key);
				return storedValue ? JSON.parse(storedValue) : initialValue;
			}
			return initialValue;
		} catch (error) {
			console.error(
				"Error al tratar de obtener el valor del localStorage:",
				error
			);
			return initialValue;
		}
	});

	// Update localStorage whenever state changes (except on initial render)
	useEffect(() => {
		if (typeof window !== "undefined") {
			window.localStorage.setItem(key, JSON.stringify(state));
		}
	}, [key, state]);

	const setValue = (newValue: T) => {
		try {
			const valueToStore =
				newValue instanceof Function ? newValue(state) : newValue;
			// Update state and localStorage atomically
			setState(valueToStore);
			if (typeof window !== "undefined") {
				window.localStorage.setItem(key, JSON.stringify(valueToStore));
			}
		} catch (error) {
			console.error("Error no se pudo guardar el valor:", error);
		}
	};

	return [state, setValue];
}
