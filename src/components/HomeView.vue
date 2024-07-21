<template>
  <div>
    <ItemForm :itemToEdit="itemToEdit" @submit="handleAddOrUpdateItem" />
    <ItemList
      :items="items"
      @edit="handleEditItem"
      @delete="handleDeleteItem"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
import ItemForm from "@/components/ItemForm.vue";
import ItemList from "@/components/ItemList.vue";
import { IItem } from "@/interfaces/IItem";
import itemService from "@/services/ItemService";

const items = ref<IItem[]>([]);
const itemToEdit = ref<IItem | null>(null);

const fetchUsers = async () => {
  try {
    const response = await itemService.getItems();

    items.value = response.data;
  } catch (error) {
    console.error("Error fetching items:", error);
  }
};

onMounted(fetchUsers);

const handleAddOrUpdateItem = (item: IItem) => {
  if (itemToEdit.value) {
    const index = items.value.findIndex((i) => i.id === itemToEdit.value!.id);
    items.value[index] = item;
    itemToEdit.value = null;
  } else {
    item.id = Date.now();
    items.value.push(item);
  }
};

const handleEditItem = (item: IItem) => {
  itemToEdit.value = { ...item };
};

const handleDeleteItem = (id: number) => {
  items.value = items.value.filter((item) => item.id !== id);
};
</script>
