import { create } from 'zustand';
import { orderService } from '../api';

const useOrderStore = create((set, get) => ({
  orders: [],
  currentOrder: null,
  loading: false,
  error: null,
  
  pagination: {
    page: 1,
    limit: 10,
    total: 0,
    pages: 0
  },
  
  // Create new order
  createOrder: async (orderData) => {
    set({ loading: true, error: null });
    
    const result = await orderService.createOrder(orderData);
    
    if (result.success) {
      set({
        currentOrder: result.data.data,
        loading: false
      });
      return { success: true, order: result.data.data };
    } else {
      set({
        loading: false,
        error: result.error.message
      });
      return { success: false, error: result.error.message };
    }
  },
  
  // Fetch my orders
  fetchMyOrders: async (params = {}) => {
    set({ loading: true, error: null });
    
    const pagination = get().pagination;
    
    const queryParams = {
      page: params.page || pagination.page,
      limit: params.limit || pagination.limit,
      ...params
    };
    
    const result = await orderService.getMyOrders(queryParams);
    
    if (result.success) {
      const { data, pagination: paginationData } = result.data;
      set({
        orders: data,
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
  
  // Fetch order by ID
  fetchOrder: async (id) => {
    set({ loading: true, error: null });
    
    const result = await orderService.getOrderById(id);
    
    if (result.success) {
      set({
        currentOrder: result.data.data,
        loading: false
      });
    } else {
      set({
        loading: false,
        error: result.error.message
      });
    }
  },
  
  // Cancel order
  cancelOrder: async (id, reason) => {
    set({ loading: true, error: null });
    
    const result = await orderService.cancelOrder(id, reason);
    
    if (result.success) {
      set({ loading: false });
      // Refresh orders
      await get().fetchMyOrders();
      return { success: true };
    } else {
      set({
        loading: false,
        error: result.error.message
      });
      return { success: false, error: result.error.message };
    }
  },
  
  // Set page
  setPage: (page) => {
    set((state) => ({
      pagination: {
        ...state.pagination,
        page
      }
    }));
    get().fetchMyOrders({ page });
  },
  
  // Clear current order
  clearCurrentOrder: () => {
    set({ currentOrder: null });
  }
}));

export default useOrderStore;
