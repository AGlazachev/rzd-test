<template>
    <div class="cart-item">
        <span class="cart-item__num">{{ index + 1 }}</span>
        <img :src="props.item.images[0]" :alt="props.item.title" class="cart-item__img" />
        <span class="cart-item__name">{{ props.item.title }}</span>
        <div class="quantity-controls">
            <button @click="decreaseQuantity" class="quantity-btn">-</button>
            <span class="quantity">{{ props.item.quantity }}</span>
            <button @click="increaseQuantity" class="quantity-btn">+</button>
        </div>
        <span>{{ props.item.price }}$</span>
        <span>{{ (props.item.price * props.item.quantity).toFixed(2) }}$</span>
    </div>
</template>

<script setup>
import {defineProps} from 'vue';
import { useCartStore } from '@/stores/cart'
const props = defineProps(['item', 'index'])
const cartStore = useCartStore()

const increaseQuantity = () => {
    cartStore.increaseQuantity(props.item.id)
}

const decreaseQuantity = () => {
    cartStore.decreaseQuantity(props.item.id)
}
</script>

<style scoped lang="scss">
.cart-item {
    display: grid;
    grid-template-columns: 40px 80px 1fr 80px 120px 120px;
    grid-gap: 20px;
    align-items: center;
    max-width: 800px;
    padding: 12px 16px;

    &__img {
        width: 80px;
        height: 80px;
        object-fit: contain;
        aspect-ratio: 1/1;
    }

    &__name {
        font-weight: 600;
    }

    .quantity-controls {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 5px;
    }

    .quantity-btn {
        width: 30px;
        height: 30px;
        font-size: var(--f-s-small);
        color: var(--c-white);
        background-color: var(--c-primary);
        cursor: pointer;
        transition: opacity 0.4s linear;
        &:hover {
            opacity: 0.7;
        }
    }

    .quantity {
        display: inline-block;
        width: 30px;
        text-align: center;
    }
}
</style>
