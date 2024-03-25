<template>
  <div
    style="background-color: black; height: 100vh"
    class="cal-flex cal-px-4"
  >
    <div style="padding-top: 20px; padding-left: 20px">
      <button @click="reserveDemocall">Create reservation</button>

      <button @click="confirmDemocall">Confirm reservation</button>

      <ZaptimeCalendar :config="config"></ZaptimeCalendar>
    </div>

    <!-- <ZaptimeCalendar
      :config="config2"
      calendarId="calendar-2"
    ></ZaptimeCalendar>
    <ZaptimeCalendar
      :config="config3"
      calendarId="calendar-3"
    ></ZaptimeCalendar> -->
  </div>
</template>

<script setup lang="ts">
import { default as ZaptimeCalendar } from '../src/App.vue';
import { ZaptimeConfig, reserve, confirm } from '@zaptime/core';
import { ref } from 'vue';
function confirmDemocall() {
  confirm();
}

function reserveDemocall() {
  reserve({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@doe.test',
  });
}

// const calypsoTheme: ZaptimeConfig['theme'] = {
//   mode: 'dark',
//   colors: {
//     accentLight: '#9e7700',
//     accentBase: '#ffc000',
//     accentDark: '#ffcc31',
//   },
// };

const config = ref<ZaptimeConfig>({
  token: 'AsnMxrapnCnVWzzJsKKRDkFiwwQ42he5',

  compact: false,

  apiBaseUrl: 'https://api.zaptime.test/',

  // redirectAfterBookingUrl: 'https://google.com',

  externalBooking: false,

  // min: 0,
  // max: 1,
  // externalBooking: false,
  // compact: true,

  profileImage: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',

  locale: {
    preset: 'en',

    hideTimePreferences: false,
    startDayOfWeek: 'sun',

    texts: {
      introduction: '<p>Book a <b>meeting</b> with me</p><p>new line</p>',
    },
    confirmationForm: {
      confirmBooking: 'Confirm booking',
      name: {
        label: 'Your name',
        placeholder: 'Enter your name',
      },

      email: {
        label: 'Your email',
        placeholder: 'Enter your email',
      },
      seats: {
        label: 'Number of seats',
        placeholder: 'Enter number of seats',
      },
      buttons: {
        confirmBooking: 'Confirm booking',
        goBack: 'Go back',
      },
    },
  },
  // theme: calypsoTheme,
});
</script>

<style>
body {
  margin: 0;
}
</style>
