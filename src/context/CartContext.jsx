import { createContext } from "react";

export const CART_STORAGE_KEY = "ecommerce-project-cart";
export const CartContext = createContext(null);

export function readStoredCart() {
  if (typeof window === "undefined") {
    return [];
  }

  try {
    const stored = window.localStorage.getItem(CART_STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
}