<template>
    <header class="header">
        <div class="header__container container">
            <router-link to="/" class="header__logo">
                <img class="header__logo-img" src="@/assets/img/logo.svg" alt="Логотип РЖД">
            </router-link>
            <router-link to="/cart" v-if="route.path !== '/cart'" class="header__cart">
                <img class="header__cart-icon" src="@/assets/img/icons/cart.svg">
                <span class="header__cart-count">{{ cartItemCount }}</span>
            </router-link>
        </div>
    </header>
</template>

<script setup>
import { computed } from 'vue';
import { useCartStore } from '@/stores/cart';
import {useRoute} from "vue-router";


const cartStore = useCartStore();
const route = useRoute();
const cartItemCount = computed(() => cartStore.totalItems);
</script>

<style scoped lang="scss">
.header {
    position: sticky;
    z-index: 100;
    top: 0;
    left: 0;
    padding: 20px 0;
    margin-bottom: 40px;
    background-color: var(--c-white);
    &__container {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    &__logo {
        display: block;
        max-width: 180px;
        @media (min-width: 992px) {
            max-width: 220px;
        }
    }

    &__cart {
        position: relative;
    }

    &__cart-icon {
        width: 24px;
        height: 24px;
    }

    &__cart-count {
        position: absolute;
        top: -4px;
        right: -4px;
        display: grid;
        place-items: center;
        width: 16px;
        height: 16px;
        padding: 2px;
        border-radius: 50%;
        font-size: var(--f-s-exsmall);
        color: var(--c-white);
        background-color: var(--c-primary);
    }
}
</style>