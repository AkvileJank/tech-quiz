import { ref } from 'vue'
import { defineStore } from 'pinia'

const useParameterStore = defineStore(
  'parameters',
  () => {
    const category = ref('')
    const limit = ref(0)
    return { category, limit }
  },
  { persist: true }
)

export default useParameterStore
