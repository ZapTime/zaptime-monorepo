<template>
  <div class="cal-mt-3 cal-flex cal-gap-2 cal-px-2.5">
    <div
      class="cal-h-5 cal-w-5 dark:cal-text-theme-200"
      v-html="selectedLocation?.icon"
    ></div>
    <p class="cal-text-sm dark:cal-text-theme-200">{{ selectedLocation?.name }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref, inject } from 'vue';
import { useLocations } from '@zaptime/core';

const { locations } = useLocations(inject('calendarId'));

const locationOptions = ref([
  {
    id: 'no-location',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin-off"><path d="M5.43 5.43A8.06 8.06 0 0 0 4 10c0 6 8 12 8 12a29.94 29.94 0 0 0 5-5"/><path d="M19.18 13.52A8.66 8.66 0 0 0 20 10a8 8 0 0 0-8-8 7.88 7.88 0 0 0-3.52.82"/><path d="M9.13 9.13A2.78 2.78 0 0 0 9 10a3 3 0 0 0 3 3 2.78 2.78 0 0 0 .87-.13"/><path d="M14.9 9.25a3 3 0 0 0-2.15-2.16"/><line x1="2" x2="22" y1="2" y2="22"/></svg>',
    name: 'No Location',
  },
  {
    id: 'google-meet',
    icon: '<svg viewBox="0 0 24 24"><g fill-rule="nonzero" fill="none"><path fill="#188038" d="M13.58 11.87l2.33 2.68 3.15 2 .55-4.66-.55-4.56-3.2 1.76z"></path><path d="M0 16.12v3.98c0 .91.74 1.65 1.65 1.65h3.97l.82-3.01-.82-2.62-2.73-.82-2.89.82z" fill="#1967D2"></path><path fill="#EA4335" d="M5.62 2L0 7.62l2.9.82 2.72-.82.81-2.58z"></path><path fill="#4285F4" d="M5.62 7.62H0v8.5h5.62z"></path><path d="M22.65 4.38l-3.59 2.95v9.23l3.61 2.96a.82.82 0 001.33-.65V5.02c0-.7-.8-1.08-1.35-.64zm-9.07 7.5v4.24H5.62v5.63h11.8c.9 0 1.64-.74 1.64-1.65v-3.54l-5.48-4.69z" fill="#34A853"></path><path d="M17.42 2H5.62v5.62h7.96v4.25l5.48-4.54V3.65c0-.91-.74-1.65-1.64-1.65z" fill="#FBBC04"></path></g></svg>',

    name: 'Google Meet',
  },
  {
    id: 'zoom',
    icon: '<svg viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path fill="#2D8CFF" d="M6.55 0A6.55 6.55 0 000 6.55v10.9A6.55 6.55 0 006.55 24h10.9A6.55 6.55 0 0024 17.45V6.55A6.55 6.55 0 0017.45 0H6.55z"></path><path fill="#fff" d="M6 8a1 1 0 00-1 1v4a3 3 0 003 3h6a1 1 0 001-1v-4a3 3 0 00-3-3H6zM18.22 8.18L15.94 9.7a1 1 0 00-.44.83v2.93a1 1 0 00.44.83l2.28 1.55a.5.5 0 00.78-.41V8.59a.5.5 0 00-.09-.28.5.5 0 00-.41-.22.5.5 0 00-.28.09z"></path></g></svg>',
    name: 'Zoom',
  },
  {
    id: 'phone',
    icon: `
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-phone"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`,
    name: 'Phone Call',
  },
  {
    id: 'in-person',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>',
    name: 'In-Person Meeting',
  },
]);

const selectedLocation = locationOptions.value.find((location) => location.id === locations.value[0].label);

console.log(selectedLocation);
</script>
