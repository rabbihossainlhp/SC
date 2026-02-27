import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { authService, userService } from '../api';

const useUserStore = create(
  persist(
    (set, get) => ({
      user: null,
      isAuthenticated: false,
      enrolledCourses: [],
      purchasedProducts: [],
      wishlist: [],
      loading: false,
      error: null,
      
      // Login with API
      login: async (email, password) => {
        set({ loading: true, error: null });
        
        const result = await authService.login(email, password);
        
        if (result.success) {
          const { token, refreshToken, user } = result.data;
          
          // Store tokens in localStorage
          localStorage.setItem('accessToken', token);
          if (refreshToken) {
            localStorage.setItem('refreshToken', refreshToken);
          }
          
          set({
            user,
            isAuthenticated: true,
            loading: false,
            error: null
          });
          
          return { success: true, user };
        } else {
          set({
            loading: false,
            error: result.error.message
          });
          return { success: false, error: result.error.message };
        }
      },
      
      // Register with API
      register: async (userData) => {
        set({ loading: true, error: null });
        
        const result = await authService.register(userData);
        
        if (result.success) {
          const { token, refreshToken, user } = result.data;
          
          // Store tokens in localStorage
          localStorage.setItem('accessToken', token);
          if (refreshToken) {
            localStorage.setItem('refreshToken', refreshToken);
          }
          
          set({
            user,
            isAuthenticated: true,
            loading: false,
            error: null
          });
          
          return { success: true, user };
        } else {
          set({
            loading: false,
            error: result.error.message
          });
          return { success: false, error: result.error.message };
        }
      },
      
      // Logout with API
      logout: async () => {
        set({ loading: true });
        
        await authService.logout();
        
        // Clear tokens
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        
        set({
          user: null,
          isAuthenticated: false,
          enrolledCourses: [],
          purchasedProducts: [],
          wishlist: [],
          loading: false,
          error: null
        });
      },
      
      // Get current user from API
      fetchCurrentUser: async () => {
        const token = localStorage.getItem('accessToken');
        if (!token) {
          set({ isAuthenticated: false, user: null });
          return;
        }
        
        set({ loading: true });
        
        const result = await authService.getMe();
        
        if (result.success) {
          set({
            user: result.data.data,
            isAuthenticated: true,
            loading: false
          });
        } else {
          // Token might be invalid
          localStorage.removeItem('accessToken');
          localStorage.removeItem('refreshToken');
          set({
            user: null,
            isAuthenticated: false,
            loading: false
          });
        }
      },
      
      // Update user profile with API
      updateProfile: async (updates) => {
        set({ loading: true, error: null });
        
        const result = await userService.updateProfile(updates);
        
        if (result.success) {
          set({
            user: result.data.data,
            loading: false
          });
          return { success: true };
        } else {
          set({
            loading: false,
            error: result.error.message
          });
          return { success: false, error: result.error.message };
        }
      },
      
      // Fetch wishlist from API
      fetchWishlist: async () => {
        const result = await userService.getWishlist();
        
        if (result.success) {
          set({ wishlist: result.data.data });
        }
      },
      
      // Add to wishlist with API
      addToWishlist: async (itemId, itemType) => {
        const result = await userService.addToWishlist(itemId, itemType);
        
        if (result.success) {
          set((state) => ({
            wishlist: [...state.wishlist, result.data.data]
          }));
          return { success: true };
        }
        return { success: false };
      },
      
      // Remove from wishlist with API
      removeFromWishlist: async (itemId) => {
        const result = await userService.removeFromWishlist(itemId);
        
        if (result.success) {
          set((state) => ({
            wishlist: state.wishlist.filter(item => item._id !== itemId)
          }));
          return { success: true };
        }
        return { success: false };
      },
      
      // Enroll in course (mock - can be enhanced with backend)
      enrollInCourse: (course) => set((state) => ({
        enrolledCourses: [...state.enrolledCourses, course]
      })),
      
      // Add purchased product (called after successful order)
      addPurchasedProduct: (product) => set((state) => ({
        purchasedProducts: [...state.purchasedProducts, product]
      })),
      
      // Change password
      changePassword: async (currentPassword, newPassword) => {
        set({ loading: true, error: null });
        
        const result = await authService.changePassword(currentPassword, newPassword);
        
        if (result.success) {
          set({ loading: false });
          return { success: true };
        } else {
          set({
            loading: false,
            error: result.error.message
          });
          return { success: false, error: result.error.message };
        }
      },
      
      // Forgot password
      forgotPassword: async (email) => {
        set({ loading: true, error: null });
        
        const result = await authService.forgotPassword(email);
        
        set({ loading: false });
        
        if (result.success) {
          return { success: true, message: result.data.message };
        } else {
          return { success: false, error: result.error.message };
        }
      },
      
      // Reset password
      resetPassword: async (token, password) => {
        set({ loading: true, error: null });
        
        const result = await authService.resetPassword(token, password);
        
        if (result.success) {
          const { token: accessToken, refreshToken, user } = result.data;
          
          // Store tokens
          localStorage.setItem('accessToken', accessToken);
          if (refreshToken) {
            localStorage.setItem('refreshToken', refreshToken);
          }
          
          set({
            user,
            isAuthenticated: true,
            loading: false
          });
          
          return { success: true };
        } else {
          set({
            loading: false,
            error: result.error.message
          });
          return { success: false, error: result.error.message };
        }
      },
    }),
    {
      name: 'user-storage',
      partialize: (state) => ({
        user: state.user,
        isAuthenticated: state.isAuthenticated,
        enrolledCourses: state.enrolledCourses,
        purchasedProducts: state.purchasedProducts,
        wishlist: state.wishlist,
      }),
    }
  )
);

export default useUserStore;
