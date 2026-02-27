import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { cartService } from '../api';

const useCartStore = create(
  persist(
    (set, get) => ({
      items: [],
      loading: false,
      error: null,
      synced: false,
      
      // Fetch cart from backend
      fetchCart: async () => {
        set({ loading: true, error: null });
        
        const result = await cartService.getCart();
        
        if (result.success) {
          const cart = result.data.data;
          set({
            items: cart.items || [],
            loading: false,
            synced: true
          });
        } else {
          set({
            loading: false,
            error: result.error.message,
            synced: false
          });
        }
      },
      
      // Add item to cart
      addItem: async (product, quantity = 1) => {
        // Optimistic update
        const existingItem = get().items.find(item => item.product?._id === product._id || item.product === product._id);
        
        if (existingItem) {
          set((state) => ({
            items: state.items.map(item =>
              (item.product?._id || item.product) === product._id
                ? { ...item, quantity: item.quantity + quantity }
                : item
            )
          }));
        } else {
          set((state) => ({
            items: [...state.items, { product, quantity }]
          }));
        }
        
        // Sync with backend
        const result = await cartService.addToCart(product._id || product.id, quantity);
        
        if (result.success) {
          const cart = result.data.data;
          set({ items: cart.items || [], synced: true });
          return { success: true };
        } else {
          // Revert on error
          await get().fetchCart();
          return { success: false, error: result.error.message };
        }
      },
      
      // Remove item from cart
      removeItem: async (productId) => {
        // Optimistic update
        const previousItems = get().items;
        set((state) => ({
          items: state.items.filter(item => 
            (item.product?._id || item.product) !== productId
          )
        }));
        
        // Sync with backend
        const result = await cartService.removeFromCart(productId);
        
        if (result.success) {
          const cart = result.data.data;
          set({ items: cart.items || [], synced: true });
          return { success: true };
        } else {
          // Revert on error
          set({ items: previousItems });
          return { success: false, error: result.error.message };
        }
      },
      
      // Update quantity
      updateQuantity: async (productId, quantity) => {
        if (quantity <= 0) {
          return await get().removeItem(productId);
        }
        
        // Optimistic update
        const previousItems = get().items;
        set((state) => ({
          items: state.items.map(item =>
            (item.product?._id || item.product) === productId 
              ? { ...item, quantity } 
              : item
          )
        }));
        
        // Sync with backend
        const result = await cartService.updateCartItem(productId, quantity);
        
        if (result.success) {
          const cart = result.data.data;
          set({ items: cart.items || [], synced: true });
          return { success: true };
        } else {
          // Revert on error
          set({ items: previousItems });
          return { success: false, error: result.error.message };
        }
      },
      
      // Clear cart
      clearCart: async () => {
        // Optimistic update
        const previousItems = get().items;
        set({ items: [] });
        
        // Sync with backend
        const result = await cartService.clearCart();
        
        if (result.success) {
          set({ synced: true });
          return { success: true };
        } else {
          // Revert on error
          set({ items: previousItems });
          return { success: false, error: result.error.message };
        }
      },
      
      // Get cart total
      getTotal: () => {
        const state = get();
        return state.items.reduce((total, item) => {
          const price = item.product?.price || 0;
          return total + (price * item.quantity);
        }, 0);
      },
      
      // Get item count
      getItemCount: () => {
        const state = get();
        return state.items.reduce((count, item) => count + item.quantity, 0);
      },
      
      // Sync cart with backend (call on login)
      syncCart: async () => {
        await get().fetchCart();
      }
    }),
    {
      name: 'cart-storage',
      partialize: (state) => ({
        items: state.items,
      }),
    }
  )
);

export default useCartStore;
