import { defineStore } from "pinia";
import { ProductDoc } from "../types/product";
import { initProducts } from "../data-init";

export const useProductStore = defineStore("ProductStore", {
  state: () => ({ products: <ProductDoc[]>[] }),
  getters: {
    filteredProducts(state) {
      return state.products;
    },
  },
  actions: {
    init() {
      this.products = initProducts;
    },
    filterByCategory(category: string) {
      this.products = this.products.filter((x) => x.data.category === category);
      return this.products; // Return the filtered array
    },
    filterByRating(minRating: number) {
      this.products = this.products.filter((x) => x.data.rating >= minRating);
      return this.products; // Return the filtered array
    },
  },
});
