import api, { handleApiError } from './config';

// Review API Service
const reviewService = {
  // Create review
  createReview: async (reviewData) => {
    try {
      const response = await api.post('/reviews', reviewData);
      return { success: true, data: response.data };
    } catch (error) {
      return { success: false, error: handleApiError(error) };
    }
  },

  // Get product reviews
  getProductReviews: async (productId) => {
    try {
      const response = await api.get(`/reviews/product/${productId}`);
      return { success: true, data: response.data };
    } catch (error) {
      return { success: false, error: handleApiError(error) };
    }
  },

  // Get course reviews
  getCourseReviews: async (courseId) => {
    try {
      const response = await api.get(`/reviews/course/${courseId}`);
      return { success: true, data: response.data };
    } catch (error) {
      return { success: false, error: handleApiError(error) };
    }
  },

  // Update review
  updateReview: async (id, reviewData) => {
    try {
      const response = await api.put(`/reviews/${id}`, reviewData);
      return { success: true, data: response.data };
    } catch (error) {
      return { success: false, error: handleApiError(error) };
    }
  },

  // Delete review
  deleteReview: async (id) => {
    try {
      const response = await api.delete(`/reviews/${id}`);
      return { success: true, data: response.data };
    } catch (error) {
      return { success: false, error: handleApiError(error) };
    }
  },

  // Mark review as helpful
  markHelpful: async (id) => {
    try {
      const response = await api.put(`/reviews/${id}/helpful`);
      return { success: true, data: response.data };
    } catch (error) {
      return { success: false, error: handleApiError(error) };
    }
  },
};

export default reviewService;
