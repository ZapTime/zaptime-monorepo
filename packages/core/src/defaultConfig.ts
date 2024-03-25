import ZaptimeConfig from './types/ZaptimeConfig';

const config: ZaptimeConfig = {
  token: 'oG77Ft7Wv6v9stJTOw8cbMmW7zENDzXl',
  locale: {
    preset: 'en',
    texts: {
      chooseDate: 'Choose a date',
      noTimeSlotAvailable: 'There is no time slot available for chosen month.',
      choosePreferredTime: 'Choose preferred time',
      pickTime: 'Pick a time',
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
      phone: {
        label: 'Your phone',
        placeholder: 'Enter your phone',
      },
    },
  },
  theme: {
    preset: 'basic',
    borderRadius: '0.375rem',
  },
};

export default config;
