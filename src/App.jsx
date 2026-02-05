import { RouterProvider } from 'react-router-dom';
import { useEffect } from 'react';
import router from './routes';
import useThemeStore from './context/themeStore';

function App() {
  const initTheme = useThemeStore(state => state.initTheme);

  useEffect(() => {
    // Initialize theme on mount
    initTheme();
  }, [initTheme]);

  return <RouterProvider router={router} />;
}

export default App;
