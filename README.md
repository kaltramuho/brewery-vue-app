# Brewery Explorer

## Project Background
A Vue.js application to explore breweries using the Open Brewery API. The app allows users to search, filter, group, and visualize data related to breweries across the US.

### Features
- Connects to the Open Brewery API.
- Fetches and displays a list of breweries.
- Filters by name and type.
- Groups breweries by brewery_type.
- Displays results in a grouped table view.
- Shows a chart (bar chart) visualizing the count of breweries per type.

### Tech Stack
- Vue.js 3 with <script setup> syntax
- Tailwind CSS for styling
- Chart.js with vue-chartjs for visualizations
- Axios for HTTP requests

## Project clone
```
git clone https://github.com/kaltramuho/brewery-vue-app.git
cd brewery-vue-app
```

## Project setup
```
npm install 
```

### Run Development Server
```
npm run dev 
```

### Usage
- Enter a brewery name or select a type using the dropdown.
- Click the "Filter" button.
- Breweries will be grouped by type and listed in tables.
- A bar chart displays the total count for each type.

### Run Unit Tests
```
npm run test
```
