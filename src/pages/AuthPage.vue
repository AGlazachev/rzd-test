<template>
    <section class="p-auth">
        <div class="container">
            <form class="form" @submit.prevent="auth">
                <div class="input">
                    <input type="email" class="input__text" placeholder="Email" v-model="email" required>
                    <span v-if="emailError" class="input__error">{{ emailError }}</span>
                </div>
                <div class="input">
                    <input type="password" class="input__text" placeholder="Password" v-model="password" required>
                </div>
                <button class="btn">Авторизация</button>
            </form>
        </div>
    </section>
</template>
<script setup>
import {ref} from 'vue';
import { useRouter } from 'vue-router'

const email = ref(null)
const emailError = ref(null)
const password = ref(null)
const router = useRouter()
const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    return re.test(email)
}

function auth() {
    if (!validateEmail(email.value)) {
        emailError.value = 'Введите корректный email'
        return
    } else {
        emailError.value = null;
    }

    if (email.value && password.value) {
        localStorage.setItem('auth', 'true')
        router.push('/')
    }
}
</script>