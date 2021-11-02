import { useState } from 'react';

const useDarkMode = (initialBoolean) => {
    const [darkMode, setDarkMode] = useState(initialBoolean);

    const toggleMode = e => {
        e.preventDefault();
        setDarkMode(!darkMode);
    };

    return [darkMode, toggleMode];
};

export default useDarkMode;