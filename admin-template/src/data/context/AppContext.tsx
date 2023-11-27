import { createContext, useState, useEffect } from "react"

interface AppContextProps {
  theme?: string;
  toggleTheme?: () => void;
}

const AppContext = createContext<AppContextProps>({});

export function AppProvider(props: any) {
  const [theme, setTheme] = useState<any>('dark');

  useEffect(() => {
    const currentTheme = localStorage.getItem('theme');
    setTheme(currentTheme);
  }, [])

  function toggleTheme() {
    const themeToSet = theme === '' ? 'dark' : ''
    setTheme(themeToSet);
    localStorage.setItem('theme', themeToSet);
  }

  return (
    <AppContext.Provider value={{
      theme,
      toggleTheme
    }}>
      {props.children}
    </AppContext.Provider>
  )
}

export default AppContext;