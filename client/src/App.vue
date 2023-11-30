<script setup>
import { onMounted,ref } from "vue";
import DataTable from "./components/DataTable.vue";
const items = ref([]);
onMounted(async () => {
  const response = await fetch("/api/tasks");
  const tasks = await response.json();
  console.log('tasks',tasks);
  
  items.value = tasks;
});
</script>

<template>
  <h1 class="p-8 bg-gray-100 min-h-screen">
    <DataTable :items="items" />
  </h1>
</template>
