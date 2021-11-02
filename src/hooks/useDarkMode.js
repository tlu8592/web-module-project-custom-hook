import { useState } from 'react';
import useLocalStorage from './useLocalStorage';

const useDarkMode = (key, initialBoolean) => {
    // const [darkMode, setDarkMode] = useState(initialBoolean);
    const [darkMode, setDarkMode] = useLocalStorage(key, initialBoolean);


    const toggleMode = e => {
        e.preventDefault();
        setDarkMode(!darkMode);
    };

    return [darkMode, toggleMode];
};

export default useDarkMode;