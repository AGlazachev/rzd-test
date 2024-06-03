import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', {
    state: () => ({
        items: JSON.parse(localStorage.getItem('cart')) || []
    }),
    getters: {
        totalItems: (state) => state.items.reduce((total, item) => total + item.quantity, 0),
        totalSum: function (state) {
            return state.items.reduce((sum, item) => sum + item.quantity * item.price, 0).toFixed(2);
        }
    },
    actions: {
        addProduct(product) {
            const existingItem = this.items.find(item => item.id === product.id);
            if (existingItem) {
                existingItem.quantity++;
            } else {
                this.items.push({ ...product, quantity: 1 });
            }
            this.updateCartLocalStorage();
        },
        increaseQuantity(productId) {
            const item = this.items.find(item => item.id === productId);
            if (item) item.quantity++;
            this.updateCartLocalStorage();
        },
        decreaseQuantity(productId) {
            const item = this.items.find(item => item.id === productId);
            if (item && item.quantity > 1) {
                item.quantity--;
            } else {
                this.items = this.items.filter(item => item.id !== productId);
            }
            this.updateCartLocalStorage();
        },
        clearCart() {
            this.items = [];
            this.updateCartLocalStorage();
        },
        updateCartLocalStorage() {
            localStorage.setItem('cart', JSON.stringify(this.items));
        }
    }
});
