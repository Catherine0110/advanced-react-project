import {useContext} from 'react'
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from "./ThemeContext";

interface useThemeResult {
    toggleTheme: () => void,
    theme: Theme
}

export function useTheme(): useThemeResult {
    const {setTheme,theme} = useContext(ThemeContext)

    const toggleTheme = () => {
        const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
        setTheme(newTheme)
        console.log('tr',newTheme)
        console.log('Theme',Theme)
        document.getElementById('app').className = newTheme
        console.log('app', document.getElementById('app'))
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
    }

    return {theme, toggleTheme}
}