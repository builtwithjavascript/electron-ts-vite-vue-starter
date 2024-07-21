<script setup lang="ts">
import { computed, onMounted } from 'vue'
import ItemsListComponent from '@/components/items/ItemsList.component.vue'
import { useAppStore } from '@/store'

const { itemsStore } = useAppStore()
const { actions: itemsStoreActions } = itemsStore

// computed:
const items = computed(() => {
  return itemsStore.getters.items
})
const loading = computed(() => {
  return itemsStore.getters.loading
})

// methods:
const onSelectItem = (id: number) => {
  itemsStoreActions.toggleItemSelected(id)
}

// lifecycle event handlers:
onMounted(() => {
  itemsStoreActions.loadItems()
})
</script>

<template>
  <div class="p-4">
    <div>💖 Hello `Electron + Vite + Vue + TypeScript`!</div>
    <div class="p-4 max-w-md">
      <ItemsListComponent :items="items" :loading="loading" @selectItem="onSelectItem" />
    </div>
  </div>
</template>
