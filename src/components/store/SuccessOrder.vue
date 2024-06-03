<template>
    <section class="modal _active" v-if="visible">
        <button class="modal__close" type="button" @click.prevent="visible = false">
            <img class="modal__close-icon" src="@/assets/img/icons/close.svg" width="18" height="18">
        </button>
        <div class="modal__inner">
            <p class="h3 modal__title mb-28">Ваш заказ успешно оформлен</p>
            <p>Менеджер свяжется с&nbsp;Вами в&nbsp;ближайшее время для уточнения деталей.</p>
        </div>
    </section>
</template>

<script setup>
import {defineProps, ref, watch} from "vue";
const visible = ref(false)

const props = defineProps({
    visible: {
        type: Boolean,
        default: false
    }
});

watch(() => props.visible, (newVal) => {
    visible.value = newVal;
});
</script>

<style scoped lang="scss">
.modal {
    --modalBorderRadius: 0;
    --modalBC: var(--c-white);
    --modalBoxShadow: 0 -29px 60px rgba(0, 0, 0, 0.1);
    --modalTransition: opacity 0.4s linear;
    position: fixed;
    z-index: 1000;
    top: 0;
    left: 0;
    display: none;
    width: min(100%, 400px);
    height: 100vh;
    padding: 40px 20px 60px;
    border-radius: var(--modalBorderRadius);
    background-color: var(--modalBC);
    animation: modal 1s ease;
    overflow-y: auto;
    @media (min-width: 560px) {
        top: 50%;
        left: 50%;
        height: auto;
        min-height: 100vh;
        padding: 60px 32px;
        box-shadow: var(--modalBoxShadow);
        transform: translate(-50%, -50%);
    }
    @media (min-width: 768px) {
        max-height: 95vh;
        min-height: auto;
    }

    &._active {
        display: block;
        @media (min-width: 992px) {
            display: grid;
            place-items: center;
        }
    }

    &__close {
        position: absolute;
        top: 30px;
        right: 30px;
        width: 24px;
        height: 24px;
        border: none;
        background: none;
        cursor: pointer;
        transition: var(--modalTransition);

        .icon {
            width: inherit;
            height: inherit;
        }

        &:hover {
            opacity: 0.7;
        }

        &:active {
            opacity: 0.5;
        }
    }

    &__title {
        text-align: center;
    }

    .form {
        margin: 0 auto;
    }
}
</style>