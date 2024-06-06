import { defineStore } from 'pinia';
import { getProducts, getCategories } from '@/api';

export const useProductStore = defineStore('products', {
    state: () => ({
        products: [],
        categories: [],
        filteredProducts: [],
    }),
    actions: {
        async fetchProducts() {
            try {
                const response = await getProducts();
                this.products = response.data.products;
                this.filteredProducts = this.products;
            } catch (error) {
                console.error('Ошибка при получении товаров:', error);
            }
        },
        async fetchCategories() {
            try {
                const response = await getCategories();
                this.categories = response.data;
            } catch (error) {
                console.error('Ошибка при получении категорий:', error);
            }
        },

        filterProducts(selectedCategory, minPrice, maxPrice) {
            this.filteredProducts = this.products.filter(product => {
                const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
                const matchesPrice = product.price >= minPrice && product.price <= maxPrice;
                return matchesCategory && matchesPrice;
            });
        },
    },
});
