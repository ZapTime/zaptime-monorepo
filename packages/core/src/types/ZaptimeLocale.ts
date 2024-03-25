export default interface ZaptimeLocale {
  preset?: string;
  startDayOfWeek?: 'sun' | 'mon' | 'tue' | 'wed' | 'thu' | 'fri' | 'sat';
  headers?: {
    mon?: string;
    tue?: string;
    wed?: string;
    thu?: string;
    fri?: string;
    sat?: string;
    sun?: string;
  };
  hideTimePreferences?: boolean;
  texts?: {
    introduction?: string;
    chooseDate?: string;
    noTimeSlotAvailable?: string;
    choosePreferredTime?: string;
    pickTime?: string;
  };

  confirmationForm?: {
    confirmBooking?: string;
    name?: {
      label?: string;
      placeholder?: string;
    };
    email?: {
      label?: string;
      placeholder?: string;
    };
    seats?: {
      label?: string;
      placeholder?: string;
    };
    buttons?: {
      confirmBooking?: string;
      goBack?: string;
    };
    phone?: {
      label?: string;
      placeholder?: string;
    };
  };
}
