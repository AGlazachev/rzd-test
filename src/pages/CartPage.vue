<template>
    <section class="p-cart">
        <div class="container p-cart__container" v-if="cartStore.totalItems > 0">
            <h1 class="h1 mb-28">Корзина</h1>
            <div class="p-cart__order-list mb-20">
                <div class="p-cart__order-row _head mb-20">
                    <span>#</span>
                    <span></span>
                    <span>Название</span>
                    <span>Количество</span>
                    <span>Цена за ед.</span>
                    <span>Итого</span>
                </div>
                <CartItem v-for="(item, index) in cartItems" :key="item.id" :item="item" :index="index"/>
            </div>
            <div class="p-cart__total">
                <p class="h3">
                    Всего {{ cartStore.totalItems }} товаров на сумму {{ cartStore.totalSum }} руб.
                </p>
                <button class="btn" @click.prevent="checkout">Оформить заказ</button>
            </div>
        </div>
        <div class="container p-cart__container" v-else>
            <h1 class="h1 mb-28">Корзина пуста</h1>
            <router-link to="/" class="btn">Вернуться к покупкам</router-link>
        </div>
    </section>
    <SuccessOrder :visible="visibleSuccessModal"/>
</template>
<script setup>
import {ref, computed, onMounted} from 'vue';
import {useCartStore} from '@/stores/cart';
import CartItem from "@/components/store/CartItem.vue";
import SuccessOrder from "@/components/store/SuccessOrder.vue";

const cartStore = useCartStore();
const cartItems = computed(() => cartStore.items)
let visibleSuccessModal = ref(false);

onMounted(() => {
    cartItems.value = cartStore.items;
})

function checkout() {
    cartStore.clearCart();
    visibleSuccessModal.value = true;
}
</script>

<style scoped lang="scss">
.p-cart {
    &__order-row {
        display: grid;
        grid-template-columns: 40px 80px 1fr 80px 120px 120px;
        grid-gap: 20px;
        max-width: 800px;
        min-width: 760px;
        padding: 12px 16px;
        font-weight: 700;
        color: var(--c-white);
        background-color: var(--c-primary);
        overflow-x: auto;
    }

    &__total {
        display: flex;
        gap: 20px;
        max-width: 800px;
        @media (min-width: 992px) {
            justify-content: space-between;
            align-items: center;
        }
    }
}
</style>