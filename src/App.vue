<template>
  <div class="bg-gradient-to-r from-indigo-50 to-blue-50 min-h-screen">
    <div class="max-w-6xl mx-auto py-10 px-4">
      <h1 class="text-4xl font-extrabold text-blue-500 text-center mb-10">
        Brewery Explorer
      </h1>
      <BreweryFilter @apply-filter="fetchBreweries" />
      <BreweryChart :data="chartData" />
      <BreweryList :breweries="breweriesGrouped" />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import axios from 'axios';
import BreweryFilter from './components/BreweryFilter.vue';
import BreweryList from './components/BreweryList.vue';
import BreweryChart from './components/BreweryChart.vue';

const breweries = ref([]);
const sortOption = ref('');

const fetchBreweries = async (filter = {}) => {
  sortOption.value = filter.sort || '';

  const params = {};
  if (filter.name) params.by_name = filter.name;
  if (filter.type) params.by_type = filter.type;
  if (filter.city) params.by_city = filter.city;
  if (filter.state) params.by_state = filter.state;
  if (filter.country) params.by_country = filter.country;

  params.per_page = 50;

  try {
    const { data } = await axios.get('https://api.openbrewerydb.org/v1/breweries', { params });
    breweries.value = data;
  } catch (error) {
    console.error('Error fetching breweries:', error);
  }
};

const breweriesSorted = computed(() => {
  if (!sortOption.value) return breweries.value;

  const [field, direction] = sortOption.value.split(':');
  return [...breweries.value].sort((a, b) => {
    const valA = a[field]?.toLowerCase?.() || '';
    const valB = b[field]?.toLowerCase?.() || '';
    if (valA < valB) return direction === 'asc' ? -1 : 1;
    if (valA > valB) return direction === 'asc' ? 1 : -1;
    return 0;
  });
});

const breweriesGrouped = computed(() => {
  const groups = {};
  breweriesSorted.value.forEach((brewery) => {
    (groups[brewery.brewery_type] ||= []).push(brewery);
  });
  return groups;
});

const chartData = computed(() => ({
  labels: Object.keys(breweriesGrouped.value),
  datasets: [
    {
      label: 'Breweries Count',
      data: Object.values(breweriesGrouped.value).map((group) => group.length),
      backgroundColor: ['#6366f1', '#14b8a6', '#ef4444', '#f59e0b', '#8b5cf6', '#10b981', '#f43f5e'],
    },
  ],
}));

fetchBreweries({});
</script>
