<script setup>
</script>
<template>
  <label class="flex mr-4 items-center flex-nowrap">
    <input
      type="radio"
      name="show"
      value="all"
      checked
      @change="$emit('filter', $event.target.value)"
    />
    <span class="whitespace-nowrap ml-1">All</span>
  </label>
  <label class="flex mr-4 items-center flex-nowrap">
    <input
      type="radio"
      name="show"
      value="today"
      @change="$emit('filter', $event.target.value)"
    />
    <span class="whitespace-nowrap ml-1">Due Today</span>
  </label>
  <label class="flex mr-4 items-center flex-nowrap">
    <input
      type="radio"
      name="show"
      value="past"
      @change="$emit('filter', $event.target.value)"
    />
    <span class="whitespace-nowrap ml-1">Past Due</span>
  </label>
</template>
