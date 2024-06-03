<template>
    <AppHeader/>
    <div class="main">
        <router-view/>
    </div>
</template>

<script setup>
import AppHeader from "@/components/layouts/AppHeader.vue";
</script>

<style scoped lang="scss">
.main {
    padding-bottom: 80px;
}
</style>
