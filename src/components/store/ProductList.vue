<template>
    <div class="product-list">
        <ProductCard v-for="product in props.products" :key="product.id" :product="product" />
    </div>
</template>

<script setup>
import { defineProps } from 'vue';
import ProductCard from './ProductCard.vue';

const props = defineProps({
    products: {
        type: Array,
        required: true
    }
});
</script>

<style lang="scss">
.product-list {
    display: grid;
    grid-gap: 16px;
    @media (min-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media (min-width: 992px) {
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 20px;
    }
    @media (min-width: 1200px) {
        grid-template-columns: repeat(4, 1fr);
    }
}
</style>
