import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
const useStore = create(
  persist(
    (set) => ({
      cartNo: 0,
      carts: [],
      cartIncrement: () => set((state) => ({ cartNo: state.cartNo + 1 })),
      cartDecrement: () => set((state) => ({ cartNo: state.cartNo - 1 })),
      removeAllCart: () => set({ cartNo: 0, carts: [] }),
      updateCarts: (newCart) =>
        set((state) => ({ carts: [...state.carts, newCart] })),
    }),
    {
      name: "cart-storage", // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
    }
  )
);
export default useStore;
