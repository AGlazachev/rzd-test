<template>
    <article class="product-card">
        <img class="product-card__img"
             v-if="props.product.images"
             :src="props.product.images[0]"
             :alt="props.product.title"
             loading="lazy"
        >
        <p class="product-card__name">{{ props.product.title }}</p>
        <span class="product-card__price mb-16">{{ props.product.price }} $</span>
        <button @click.prevent="addToCart(props.product)" class="btn product-card__btn">В&nbsp;корзину</button>
    </article>
</template>

<script setup>
import {useCartStore} from '@/stores/cart';
import {defineProps} from 'vue';

const props = defineProps({
    product: {
        type: Object,
        required: true
    }
});

const cartStore = useCartStore();

const addToCart = (product) => {
    cartStore.addProduct(product);
};
</script>

<style lang="scss">
/* Стили для карточки товара */
.product-card {
    display: flex;
    flex-direction: column;
    padding: 16px 16px 20px;
    border: 1px solid var(--c-lines);

    &__img {
        aspect-ratio: 1/1;
        object-fit: contain;
    }

    &__name {
        display: block;
        margin-bottom: 8px;
        font-weight: 600;
    }

    &__price {
        margin-top: auto;
        display: block;
        font-weight: 600;
    }
}
</style>
