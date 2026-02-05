import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useUserStore = create(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      enrolledCourses: [],
      purchasedProducts: [],
      wishlist: [],
      
      // Mock login (frontend only)
      login: (userData) => set({
        user: userData,
        isAuthenticated: true
      }),
      
      // Mock logout
      logout: () => set({
        user: null,
        isAuthenticated: false
      }),
      
      // Update user profile
      updateProfile: (updates) => set((state) => ({
        user: { ...state.user, ...updates }
      })),
      
      // Enroll in course (mock)
      enrollInCourse: (course) => set((state) => ({
        enrolledCourses: [...state.enrolledCourses, course]
      })),
      
      // Add to wishlist
      addToWishlist: (item) => set((state) => {
        const exists = state.wishlist.find(w => w.id === item.id);
        if (exists) return state;
        return { wishlist: [...state.wishlist, item] };
      }),
      
      // Remove from wishlist
      removeFromWishlist: (itemId) => set((state) => ({
        wishlist: state.wishlist.filter(item => item.id !== itemId)
      })),
      
      // Add purchased product
      addPurchasedProduct: (product) => set((state) => ({
        purchasedProducts: [...state.purchasedProducts, product]
      })),
    }),
    {
      name: 'user-storage',
    }
  )
);

export default useUserStore;
