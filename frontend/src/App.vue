<script setup lang="ts">
import { ref, onMounted } from 'vue'

const API_BASE = import.meta.env.VITE_API_URL

const message = ref('')
const loading = ref(false)
const error = ref('')

async function fetchHello() {
  loading.value = true
  error.value = ''
  try {
    const res = await fetch(`${API_BASE}/hello`)
    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`)
    const data = await res.json()
    message.value = data.message
  } catch (err) {
    error.value = 'API\'ye bağlanılamadı.'
    console.error(err)
  } finally {
    loading.value = false
  }
}

onMounted(() => fetchHello())
</script>

<template>
  <div>
    <h1>Linklio App</h1>

    <p v-if="loading">Yükleniyor...</p>
    <p v-else-if="error" style="color: red">{{ error }}</p>
    <p v-else>{{ message }}</p>

    <button @click="fetchHello" :disabled="loading">
      Tekrar İste
    </button>
  </div>
</template>

<style scoped>
button {
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
}
</style>