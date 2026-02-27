import api, { handleApiError } from './config';

// User API Service
const userService = {
  // Update user profile
  updateProfile: async (profileData) => {
    try {
      const response = await api.put('/users/profile', profileData);
      return { success: true, data: response.data };
    } catch (error) {
      return { success: false, error: handleApiError(error) };
    }
  },

  // Get wishlist
  getWishlist: async () => {
    try {
      const response = await api.get('/users/wishlist');
      return { success: true, data: response.data };
    } catch (error) {
      return { success: false, error: handleApiError(error) };
    }
  },

  // Add to wishlist
  addToWishlist: async (itemId, itemType) => {
    try {
      const response = await api.post('/users/wishlist', { itemId, itemType });
      return { success: true, data: response.data };
    } catch (error) {
      return { success: false, error: handleApiError(error) };
    }
  },

  // Remove from wishlist
  removeFromWishlist: async (itemId) => {
    try {
      const response = await api.delete(`/users/wishlist/${itemId}`);
      return { success: true, data: response.data };
    } catch (error) {
      return { success: false, error: handleApiError(error) };
    }
  },

  // Update avatar
  uploadAvatar: async (avatarUrl) => {
    try {
      const response = await api.post('/users/avatar', { avatarUrl });
      return { success: true, data: response.data };
    } catch (error) {
      return { success: false, error: handleApiError(error) };
    }
  },

  // Delete account
  deleteAccount: async () => {
    try {
      const response = await api.delete('/users/account');
      return { success: true, data: response.data };
    } catch (error) {
      return { success: false, error: handleApiError(error) };
    }
  },
};

export default userService;
