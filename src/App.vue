<script setup lang="ts">
import { computed, reactive } from 'vue'
import ItemsListComponent from '@/components/items/ItemsList.component.vue'
// state
const itemsState = reactive({
  loading: false,
  items: [
    {
      id: 1,
      name: 'Item 1',
      selected: false
    },
    {
      id: 2,
      name: 'Item 2',
      selected: false
    },
    {
      id: 3,
      name: 'Item 3',
      selected: false
    },
    {
      id: 4,
      name: 'Item 4',
      selected: false
    },
    {
      id: 5,
      name: 'Item 5',
      selected: false
    }
  ]
})

// the items store actions implementation:
const toggleItemSelected = async (id: number) => {
  console.log('toggleItemSelected', id)
  const item = (itemsState.items || []).find((o) => o.id === id)
  if (item) {
    item.selected = !item.selected
  }
}

// computed:
const items = computed(() => {
  return itemsState.items
})
const loading = computed(() => {
  return itemsState.loading
})

// methods:
const onSelectItem = (id: number) => {
  toggleItemSelected(id)
}
</script>

<template>
  <div class="p-4">
    <div>💖 Hello `Electron + Vite + Vue + TypeScript`!</div>
    <div class="p-4 max-w-md">
      <ItemsListComponent :items="items" :loading="loading" @selectItem="onSelectItem" />
    </div>
  </div>
</template>
