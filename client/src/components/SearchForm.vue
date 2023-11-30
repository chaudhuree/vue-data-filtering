<script setup>
import { defineEmits } from "vue";
const emit = defineEmits(["search"]);
const handleSearch = (event) => {
  emit("search", event.target.value);
};
</script>
<template>
  <form class="py-3 px-4 flex items-center">
    <label class="sr-only">Search</label>
    <input
      type="text"
      class="w-full bg-gray-50 border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-offset-blue-500"
      placeholder="Search"
      @input="handleSearch"
    />
  </form>
</template>
