import api, { handleApiError } from './config';

// Course API Service
const courseService = {
  // Get all courses with filters
  getCourses: async (params = {}) => {
    try {
      const response = await api.get('/courses', { params });
      return { success: true, data: response.data };
    } catch (error) {
      return { success: false, error: handleApiError(error) };
    }
  },

  // Get single course
  getCourse: async (id) => {
    try {
      const response = await api.get(`/courses/${id}`);
      return { success: true, data: response.data };
    } catch (error) {
      return { success: false, error: handleApiError(error) };
    }
  },

  // Get featured courses
  getFeaturedCourses: async (limit = 8) => {
    try {
      const response = await api.get('/courses/featured/list', {
        params: { limit },
      });
      return { success: true, data: response.data };
    } catch (error) {
      return { success: false, error: handleApiError(error) };
    }
  },

  // Get course categories
  getCategories: async () => {
    try {
      const response = await api.get('/courses/categories/list');
      return { success: true, data: response.data };
    } catch (error) {
      return { success: false, error: handleApiError(error) };
    }
  },

  // Enroll in course
  enrollInCourse: async (id) => {
    try {
      const response = await api.post(`/courses/${id}/enroll`);
      return { success: true, data: response.data };
    } catch (error) {
      return { success: false, error: handleApiError(error) };
    }
  },

  // Get my enrolled courses
  getMyEnrolledCourses: async () => {
    try {
      const response = await api.get('/courses/my-courses/list');
      return { success: true, data: response.data };
    } catch (error) {
      return { success: false, error: handleApiError(error) };
    }
  },

  // Update course progress
  updateProgress: async (courseId, lessonId, progressData) => {
    try {
      const response = await api.put(
        `/courses/${courseId}/progress/${lessonId}`,
        progressData
      );
      return { success: true, data: response.data };
    } catch (error) {
      return { success: false, error: handleApiError(error) };
    }
  },

  // Create course (admin/instructor)
  createCourse: async (courseData) => {
    try {
      const response = await api.post('/courses', courseData);
      return { success: true, data: response.data };
    } catch (error) {
      return { success: false, error: handleApiError(error) };
    }
  },

  // Update course (admin/instructor)
  updateCourse: async (id, courseData) => {
    try {
      const response = await api.put(`/courses/${id}`, courseData);
      return { success: true, data: response.data };
    } catch (error) {
      return { success: false, error: handleApiError(error) };
    }
  },

  // Delete course (admin)
  deleteCourse: async (id) => {
    try {
      const response = await api.delete(`/courses/${id}`);
      return { success: true, data: response.data };
    } catch (error) {
      return { success: false, error: handleApiError(error) };
    }
  },
};

export default courseService;
