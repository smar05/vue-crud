<template>
  <div>
    <h2>Item List</h2>
    <ul>
      <li v-for="(item, index) in items" :key="item.id">
        <strong>{{ index + 1 }}</strong>
        {{ item.name }}
        <button @click="editItem(item)">Edit</button>
        <button @click="deleteItem(item.id)">Delete</button>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, defineEmits } from "vue";
import { IItem } from "@/interfaces/IItem";

const props = defineProps<{
  items: IItem[];
}>();

const emit = defineEmits<{
  (e: "edit", item: IItem): void;
  (e: "delete", id: number): void;
}>();

const editItem = (item: IItem) => {
  emit("edit", item);
};

const deleteItem = (id: number) => {
  emit("delete", id);
};
</script>
