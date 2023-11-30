<script setup>
import { computed, defineProps, ref } from "vue";
const show = ref(false);
const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
});

const statuses = computed(() => {
  return [...new Set(props.items.map((item) => item.status))];
});
</script>
<template>
  <div class="relative flex items-center w-full px-4">
    <button
      @click="show = !show"
      class="w-full flex items-center justify-center py-2 px-4 text-sm font-bold text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white"
    >
      Filter
    </button>
    <div
      v-if="show"
      class="absolute top-12 right-0 z-10 w-64 p-3 bg-white rounded-lg shadow-xl border-blue-400 border-2"
    >
      <h6 class=" text-lg text-center border-b-2 font-medium text-gray-900">Status</h6>

      <ul class="space-y-3 text-sm my-6">
        <li class="flex items-center" v-for="(status, index) in statuses">
          <input
            type="checkbox"
            :value="status"
            :key="index"
            :id="status"
            class="w-4 h-4 bg-gray-100 border-gray-300 rounded"
            @change="$emit('filterStatus', $event.target.value)"
          />
          <label :for="status" :key="index" class="ml-2 font-bold text-gray-900">{{
            status
          }}</label>
        </li>
      </ul>
    </div>
  </div>
</template>
