<template>
  <div v-for="(group, type) in breweries" :key="type" class="mb-10">
    <h2 class="text-2xl font-semibold capitalize border-b pb-2 text-gray-700">{{ type }} ({{ group.length }})</h2>
    <div class="overflow-x-auto rounded-lg shadow-md mt-4">
      <table class="w-full text-left text-sm text-gray-700">
        <thead class="text-gray-800 bg-indigo-100">
          <tr>
            <th class="py-3 px-4">Name</th>
            <th class="py-3 px-4">City</th>
            <th class="py-3 px-4">State</th>
            <th class="py-3 px-4">Country</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="brewery in group"
            :key="brewery.id"
            class="bg-white border-b hover:bg-gray-50 transition"
          >
            <td class="py-3 px-4 font-medium text-indigo-600">{{ brewery.name }}</td>
            <td class="py-3 px-4">{{ brewery.city }}</td>
            <td class="py-3 px-4">{{ brewery.state }}</td>
            <td class="py-3 px-4">{{ brewery.country }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
defineProps({ breweries: Object });
</script>
