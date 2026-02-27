import { useEffect } from 'react';
import useUserStore from '../context/userStore';
import useCartStore from '../context/cartStore';
import useProductStore from '../context/productStore';
import useCourseStore from '../context/courseStore';

/**
 * Hook to initialize the app on mount
 * Checks authentication and loads initial data
 */
export const useAppInitialization = () => {
  const { isAuthenticated, fetchCurrentUser, fetchWishlist } = useUserStore();
  const { syncCart } = useCartStore();
  const { fetchFeaturedProducts } = useProductStore();
  const { fetchFeaturedCourses } = useCourseStore();

  useEffect(() => {
    const initializeApp = async () => {
      // Check if user has a token
      const token = localStorage.getItem('accessToken');
      
      if (token) {
        // Fetch current user from API
        await fetchCurrentUser();
        
        // If still authenticated after fetch, sync user data
        const { isAuthenticated: stillAuthenticated } = useUserStore.getState();
        
        if (stillAuthenticated) {
          // Sync cart with backend
          await syncCart();
          
          // Fetch wishlist
          await fetchWishlist();
        }
      }
      
      // Always fetch featured items for landing page
      await Promise.all([
        fetchFeaturedProducts(8),
        fetchFeaturedCourses(8)
      ]);
    };

    initializeApp();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { isAuthenticated };
};

/**
 * Hook to sync data after login
 * Call this after successful login
 */
export const usePostLoginSync = () => {
  const { fetchWishlist, fetchCurrentUser } = useUserStore();
  const { syncCart } = useCartStore();
  const { fetchMyEnrolledCourses } = useCourseStore();

  const syncAfterLogin = async () => {
    // Fetch fresh user data
    await fetchCurrentUser();
    
    // Sync cart with backend
    await syncCart();
    
    // Fetch wishlist
    await fetchWishlist();
    
    // Fetch enrolled courses
    await fetchMyEnrolledCourses();
  };

  return { syncAfterLogin };
};

/**
 * Hook to handle logout
 * Clears all data and redirects
 */
export const useLogout = () => {
  const { logout: logoutUser } = useUserStore();
  const { clearCart } = useCartStore();

  const handleLogout = async (redirectPath = '/') => {
    // Logout from backend
    await logoutUser();
    
    // Clear local cart
    await clearCart();
    
    // Redirect
    window.location.href = redirectPath;
  };

  return { handleLogout };
};

export default useAppInitialization;
