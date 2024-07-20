<template>
  <div>
    <h2>{{ isEditing ? "Edit" : "Add" }} Item</h2>
    <form @submit.prevent="handleSubmit">
      <div>
        <label for="name">Name</label>
        <input v-model="item.name" type="text" id="name" required />
      </div>
      <button type="submit">{{ isEditing ? "Update" : "Add" }} Item</button>
    </form>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch, defineProps, defineEmits } from "vue";
import { IItem } from "@/interfaces/IItem";

const props = defineProps<{
  itemToEdit: IItem | null;
}>();

const emit = defineEmits<{
  (e: "submit", item: IItem): void;
}>();

const item = ref<IItem>({ name: "" });
const isEditing = ref(false);

watch(
  () => props.itemToEdit,
  (newItem) => {
    if (newItem && "name" in newItem) {
      item.value = { ...newItem };
      isEditing.value = true;
    } else {
      item.value = { name: "" };
      isEditing.value = false;
    }
  }
);

const handleSubmit = () => {
  emit("submit", item.value);
  item.value = { name: "" };
  isEditing.value = false;
};
</script>
