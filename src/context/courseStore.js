import { create } from 'zustand';

const useCourseStore = create((set) => ({
  filters: {
    category: '',
    level: '',
    priceType: '',
    rating: 0,
    searchQuery: ''
  },
  
  setFilter: (filterName, value) => set((state) => ({
    filters: {
      ...state.filters,
      [filterName]: value
    }
  })),
  
  resetFilters: () => set({
    filters: {
      category: '',
      level: '',
      priceType: '',
      rating: 0,
      searchQuery: ''
    }
  }),
}));

export default useCourseStore;
