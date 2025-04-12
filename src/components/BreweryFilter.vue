<template>
  <div class="flex flex-col md:flex-row items-center justify-center gap-4 mb-10">
    <input
      v-model="name"
      placeholder="Search by name..."
      class="p-3 rounded-lg shadow-lg border focus:ring-2 focus:ring-indigo-400 outline-none transition w-full md:w-60"
    />
    <select
      v-model="type"
      class="p-3 rounded-lg shadow-lg border bg-white focus:ring-2 focus:ring-indigo-400 outline-none transition w-full md:w-48"
    >
      <option value="">All Types</option>
      <option v-for="t in types" :key="t" :value="t" class="capitalize">{{ t }}</option>
    </select>
    <button
      @click="applyFilter"
      class="px-5 py-3 rounded-lg bg-gradient-to-r from-indigo-500 to-indigo-600 text-white shadow-md hover:shadow-xl transition duration-300"
    >
      Filter
    </button>
  </div>
</template>

<script setup>
import { ref, defineEmits } from 'vue';

const emit = defineEmits(['apply-filter']);
const name = ref('');
const type = ref('');

const types = ['micro', 'nano', 'regional', 'brewpub', 'large', 'planning', 'contract', 'proprietor', 'closed'];

const applyFilter = () => {
  emit('apply-filter', {
    name: name.value,
    type: type.value,
  });
};
</script>
