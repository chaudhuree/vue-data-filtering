<script setup>
import { computed, defineProps, ref } from "vue";
import FilterDropdown from "@/components/FilterDropdown.vue";
import FilterRadios from "@/components/FilterRadios.vue";
import SearchForm from "@/components/SearchForm.vue";
const searchByUserTask = ref("");
const filterByDay = ref("");
const filterByStatus = ref([]);
const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
});
const filteredItems = computed(() => {
  let items = props.items;
  // filter by date
  switch (filterByDay.value) {
    case "today":
      items = items.filter((item) => {
        // console.log("item.due_at", new Date(item.due_at).getDate());
        // console.log("new Date().getDate()", new Date().getDate());

        return new Date(item.due_at).getDate() === new Date().getDate();
      });
      break;
    case "past":
      items = items.filter((item) => {
        return new Date(item.due_at).getDate() < new Date().getDate();
      });
      break;
  }
  // filter by user and title
  if (searchByUserTask.value !== "") {
    items = items.filter((item) => {
      return (
        item.title.toLowerCase().includes(searchByUserTask.value.toLowerCase()) ||
        item.assigned_to.toLowerCase().includes(searchByUserTask.value.toLowerCase())
      );
    });
  }
  // filter by status
  if (filterByStatus.value.length > 0) {
    items = items.filter((item) => {
      return filterByStatus.value.includes(item.status);
    });
  }
  return items;
});
const handleSearch = (value) => {
  searchByUserTask.value = value;
};
const handleFilter = (value) => {
  filterByDay.value = value;
};
const handleStatus = (value) => {
  if (filterByStatus.value.includes(value)) {
    filterByStatus.value = filterByStatus.value.filter((item) => item !== value);
  } else {
    filterByStatus.value.push(value);
  }
};
</script>

<template>
  <div class="bg-white relative border rounded-lg">
    <div class="flex items-center justify-between">
      <SearchForm @search="handleSearch" />
      <div class="flex items-center justify-end text-sm font-semibold">
        <FilterRadios @filter="handleFilter" />
        <FilterDropdown :items="items" @filterStatus="handleStatus" />
      </div>
    </div>
  </div>
  <div>
    <table class="w-full text-sm text-left text-gray-500">
      <thead class="text-xs text-gray-700 uppercase bg-gray-50">
        <tr>
          <th class="px-4 py-3">ID</th>
          <th class="px-4 py-3">Assigned</th>
          <th class="px-4 py-3">Status</th>
          <th class="px-4 py-3">Title</th>
          <th class="px-4 py-3">Due At</th>
          <th class="px-4 py-3">
            <span class="sr-only">Actions</span>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in filteredItems" :key="item.id" class="border-b">
          <td class="px-4 py-3 font-medium text-gray-900">{{ item.id }}</td>
          <td class="px-4 py-3 font-medium text-gray-900">
            {{ item.assigned_to }}
          </td>
          <td class="px-4 py-3 font-medium text-gray-900">
            {{ item.status.charAt(0).toUpperCase() + item.status.slice(1) }}
          </td>
          <td class="px-4 py-3 font-medium text-gray-900">{{ item.title }}</td>
          <td class="px-4 py-3 font-medium text-gray-900">{{ item.due_at }}</td>
          <td class="px-4 py-3 font-medium text-gray-900">Details</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
