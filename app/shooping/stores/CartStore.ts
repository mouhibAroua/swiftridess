import { create } from 'zustand'

type cartType = Object[];
type CartStore = {
  cart: cartType,
  setCart: (cart: cartType) => void
}

export const useCartStore = create<CartStore>()((set) => ({
  cart: [],
  setCart: (cart: cartType) => set({cart}),
}));