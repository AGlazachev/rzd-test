<template>
    <div class="sidebar">
        <select v-model="selectedCategory">
            <option value="all">Все категории</option>
            <option v-for="category in categories" :key="category.slug" :value="category.name.toLowerCase()">
                {{ category.name }}
            </option>
        </select>
        <div class="sidebar__row">
            <div class="input">
                <input class="input__text" v-model="minPrice" type="number" placeholder="Минимальная цена" min="0" :max="props.maxPrice">
            </div>
            <div class="input">
                <input class="input__text" v-model="maxPrice" type="number" placeholder="Максимальная цена" min="0" :max="props.maxPrice">
            </div>
        </div>
        <div class="sidebar__row">
            <button class="btn _success" @click.prevent="applyFilters">Применить</button>
            <button class="btn _error" @click.prevent="resetFilters">Сбросить</button>
        </div>
    </div>
</template>

<script setup>
import {ref, watch, defineProps, defineEmits, onMounted} from 'vue';

const props = defineProps({
    categories: {
        type: Array,
        required: true
    },
    maxPrice: Number
});
const emit = defineEmits(['filterProducts']);

const selectedCategory = ref('all');
const minPrice = ref(0);
const maxPrice = ref(props.maxPrice);

onMounted(() => {
    maxPrice.value = props.maxPrice
})

const applyFilters = () => {
    emit('filterProducts', {
        selectedCategory: selectedCategory.value,
        minPrice: minPrice.value,
        maxPrice: maxPrice.value,
    });
};

const resetFilters = () => {
    selectedCategory.value = 'all';
    minPrice.value = 0;
    emit('filterProducts', {
        selectedCategory: selectedCategory.value,
        minPrice: minPrice.value,
        maxPrice: maxPrice.value,
    });
};

watch(() => props.maxPrice, () => {
    maxPrice.value = props.maxPrice;
});
</script>

<style lang="scss">
.sidebar {
    display: grid;
    grid-gap: 20px;
    height: fit-content;

    &__row {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 16px;
    }
}
</style>
