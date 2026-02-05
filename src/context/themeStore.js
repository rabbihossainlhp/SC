import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useThemeStore = create(
  persist(
    (set) => ({
      theme: 'light',
      toggleTheme: () => set((state) => {
        const newTheme = state.theme === 'light' ? 'dark' : 'light';
        // Update document class for Tailwind dark mode
        if (typeof document !== 'undefined') {
          if (newTheme === 'dark') {
            document.documentElement.classList.add('dark');
          } else {
            document.documentElement.classList.remove('dark');
          }
        }
        return { theme: newTheme };
      }),
      setTheme: (theme) => set({ theme }),
      initTheme: () => {
        if (typeof document !== 'undefined') {
          const stored = localStorage.getItem('theme-storage');
          if (stored) {
            try {
              const { state } = JSON.parse(stored);
              if (state?.theme === 'dark') {
                document.documentElement.classList.add('dark');
              }
            } catch (e) {
              console.error('Error parsing theme:', e);
            }
          }
        }
      }
    }),
    {
      name: 'theme-storage',
    }
  )
);

export default useThemeStore;
