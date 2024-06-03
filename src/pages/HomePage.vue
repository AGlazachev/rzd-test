<template>
    <section class="p-index">
        <div class="container p-index__container">
            <SidebarProducts
                :categories="categories"
                :maxPrice="maxPrice"
                @filterProducts="updateFilteredProducts"
            />
            <ProductList :products="products"/>
        </div>
    </section>
</template>

<script setup>
import {ref, onMounted, watchEffect} from 'vue';
import {useProductStore} from '@/stores/products';
import SidebarProducts from "@/components/store/SidebarProducts.vue";
import ProductList from "@/components/store/ProductList.vue";

const productStore = useProductStore();
const products = ref([]);
const categories = ref([]);
const maxPrice = ref(0);

onMounted(
    async () => {
        await productStore.fetchProducts();
        await productStore.fetchCategories();
            maxPrice.value = Math.max(...productStore.products.map(product => product.price));
    });

watchEffect(() => {
    products.value = productStore.filteredProducts;
    categories.value = productStore.categories;
});

const updateFilteredProducts = (filters) => {
    productStore.filterProducts(filters.selectedCategory, filters.minPrice, filters.maxPrice);
};
</script>

<style lang="scss">
.p-index {
    &__container {
        display: grid;
        grid-gap: 20px;
        @media (min-width: 992px) {
            grid-template-columns: 300px 1fr;
        }
    }
}
</style>
