import { defineStore } from "pinia";
import { ProductDoc } from "../types/product";
import { initProducts } from "../data-init";

export const useProductStore = defineStore("ProductStore", {
  
  state: () => ({products: <ProductDoc[]>[]}),
  getters:{

  },
  actions:{
    init(){
      this.products = initProducts;
    },
     filterByCategory(category: String){
      this.products.filter(x => x.data.category == category);
    },
    filterByRating(minRating: number){
      this.products.filter(x => x.data.rating >= minRating)
    }
  }

});
