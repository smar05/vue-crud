<template>
  <div>
    <h2>Item List</h2>
    <ul>
      <li v-for="item in items" :key="item.id">
        {{ item.name }}
        <button @click="$emit('edit', item)">Edit</button>
        <button @click="$emit('delete', item.id)">Delete</button>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ItemList",
  props: {
    items: Array,
  },
  emits: ["edit", "delete"],
});
</script>
