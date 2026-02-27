import { create } from 'zustand';
import { courseService } from '../api';

const useCourseStore = create((set, get) => ({
  courses: [],
  featuredCourses: [],
  currentCourse: null,
  myEnrolledCourses: [],
  categories: [],
  loading: false,
  error: null,
  
  filters: {
    category: '',
    level: '',
    priceType: '',
    rating: 0,
    searchQuery: ''
  },
  
  pagination: {
    page: 1,
    limit: 12,
    total: 0,
    pages: 0
  },
  
  // Fetch all courses with filters
  fetchCourses: async (params = {}) => {
    set({ loading: true, error: null });
    
    const filters = get().filters;
    const pagination = get().pagination;
    
    const queryParams = {
      page: params.page || pagination.page,
      limit: params.limit || pagination.limit,
      ...(filters.category && { category: filters.category }),
      ...(filters.level && { level: filters.level }),
      ...(filters.priceType && { priceType: filters.priceType }),
      ...(filters.rating && { rating: filters.rating }),
      ...(filters.searchQuery && { search: filters.searchQuery }),
      ...params
    };
    
    const result = await courseService.getCourses(queryParams);
    
    if (result.success) {
      const { data, pagination: paginationData } = result.data;
      set({
        courses: data,
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
  
  // Fetch single course
  fetchCourse: async (id) => {
    set({ loading: true, error: null });
    
    const result = await courseService.getCourse(id);
    
    if (result.success) {
      set({
        currentCourse: result.data.data,
        loading: false
      });
    } else {
      set({
        loading: false,
        error: result.error.message
      });
    }
  },
  
  // Fetch featured courses
  fetchFeaturedCourses: async (limit = 8) => {
    const result = await courseService.getFeaturedCourses(limit);
    
    if (result.success) {
      set({ featuredCourses: result.data.data });
    }
  },
  
  // Fetch categories
  fetchCategories: async () => {
    const result = await courseService.getCategories();
    
    if (result.success) {
      set({ categories: result.data.data });
    }
  },
  
  // Enroll in course
  enrollInCourse: async (id) => {
    set({ loading: true, error: null });
    
    const result = await courseService.enrollInCourse(id);
    
    if (result.success) {
      set({ loading: false });
      // Refresh enrolled courses
      await get().fetchMyEnrolledCourses();
      return { success: true };
    } else {
      set({
        loading: false,
        error: result.error.message
      });
      return { success: false, error: result.error.message };
    }
  },
  
  // Fetch my enrolled courses
  fetchMyEnrolledCourses: async () => {
    const result = await courseService.getMyEnrolledCourses();
    
    if (result.success) {
      set({ myEnrolledCourses: result.data.data });
    }
  },
  
  // Update course progress
  updateProgress: async (courseId, lessonId, progressData) => {
    const result = await courseService.updateProgress(courseId, lessonId, progressData);
    
    if (result.success) {
      // Refresh current course to update progress
      if (get().currentCourse?._id === courseId) {
        await get().fetchCourse(courseId);
      }
      return { success: true };
    }
    return { success: false };
  },
  
  // Set filter
  setFilter: (filterName, value) => {
    set((state) => ({
      filters: {
        ...state.filters,
        [filterName]: value
      }
    }));
    // Auto-fetch courses when filter changes
    get().fetchCourses({ page: 1 });
  },
  
  // Reset filters
  resetFilters: () => {
    set({
      filters: {
        category: '',
        level: '',
        priceType: '',
        rating: 0,
        searchQuery: ''
      }
    });
    // Fetch courses with no filters
    get().fetchCourses({ page: 1 });
  },
  
  // Set page
  setPage: (page) => {
    set((state) => ({
      pagination: {
        ...state.pagination,
        page
      }
    }));
    get().fetchCourses({ page });
  },
}));

export default useCourseStore;
