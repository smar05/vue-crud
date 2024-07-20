<template>
  <div>
    <h2>{{ isEditing ? "Edit" : "Add" }} IItem</h2>
    <form @submit.prevent="handleSubmit">
      <div>
        <label for="name">Name</label>
        <input v-model="item.name" type="text" id="name" required />
      </div>
      <button type="submit">{{ isEditing ? "Update" : "Add" }} Item</button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from "vue";
import { IItem } from "@/interfaces/IItem";

export default defineComponent({
  name: "ItemForm",
  props: {
    itemToEdit: {
      type: Object as () => IItem | null,
      default: null,
    },
  },
  emits: ["submit"],
  setup(props, { emit }) {
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

    return {
      item,
      isEditing,
      handleSubmit,
    };
  },
});
</script>
