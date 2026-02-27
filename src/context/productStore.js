import { create } from 'zustand';
import { productService } from '../api';

const useProductStore = create((set, get) => ({
  products: [],
  featuredProducts: [],
  currentProduct: null,
  categories: [],
  loading: false,
  error: null,
  
  filters: {
    category: '',
    minPrice: '',
    maxPrice: '',
    rating: 0,
    searchQuery: '',
    inStock: false
  },
  
  sorting: {
    sortBy: 'createdAt',
    order: 'desc'
  },
  
  pagination: {
    page: 1,
    limit: 12,
    total: 0,
    pages: 0
  },
  
  // Fetch all products with filters
  fetchProducts: async (params = {}) => {
    set({ loading: true, error: null });
    
    const filters = get().filters;
    const sorting = get().sorting;
    const pagination = get().pagination;
    
    const queryParams = {
      page: params.page || pagination.page,
      limit: params.limit || pagination.limit,
      sortBy: params.sortBy || sorting.sortBy,
      order: params.order || sorting.order,
      ...(filters.category && { category: filters.category }),
      ...(filters.minPrice && { minPrice: filters.minPrice }),
      ...(filters.maxPrice && { maxPrice: filters.maxPrice }),
      ...(filters.rating && { rating: filters.rating }),
      ...(filters.searchQuery && { search: filters.searchQuery }),
      ...(filters.inStock && { inStock: true }),
      ...params
    };
    
    const result = await productService.getProducts(queryParams);
    
    if (result.success) {
      const { data, pagination: paginationData } = result.data;
      set({
        products: data,
        pagination: paginationData,
        loading: false
      });
    } else {
      set({
        loading: false,
        error: result.error.message
      });
    }
  },
  
  // Fetch single product
  fetchProduct: async (id) => {
    set({ loading: true, error: null });
    
    const result = await productService.getProduct(id);
    
    if (result.success) {
      set({
        currentProduct: result.data.data,
        loading: false
      });
    } else {
      set({
        loading: false,
        error: result.error.message
      });
    }
  },
  
  // Fetch featured products
  fetchFeaturedProducts: async (limit = 8) => {
    const result = await productService.getFeaturedProducts(limit);
    
    if (result.success) {
      set({ featuredProducts: result.data.data });
    }
  },
  
  // Fetch categories
  fetchCategories: async () => {
    const result = await productService.getCategories();
    
    if (result.success) {
      set({ categories: result.data.data });
    }
  },
  
  // Set filter
  setFilter: (filterName, value) => {
    set((state) => ({
      filters: {
        ...state.filters,
        [filterName]: value
      }
    }));
    // Auto-fetch products when filter changes
    get().fetchProducts({ page: 1 });
  },
  
  // Reset filters
  resetFilters: () => {
    set({
      filters: {
        category: '',
        minPrice: '',
        maxPrice: '',
        rating: 0,
        searchQuery: '',
        inStock: false
      }
    });
    // Fetch products with no filters
    get().fetchProducts({ page: 1 });
  },
  
  // Set sorting
  setSorting: (sortBy, order = 'desc') => {
    set({
      sorting: { sortBy, order }
    });
    get().fetchProducts({ sortBy, order, page: 1 });
  },
  
  // Set page
  setPage: (page) => {
    set((state) => ({
      pagination: {
        ...state.pagination,
        page
      }
    }));
    get().fetchProducts({ page });
  },
}));

export default useProductStore;
