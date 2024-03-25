import { Location } from '../types/InitData';
import { ref, Ref, computed } from 'vue';

type LocationsState = Ref<Location[]> | Record<string, Ref<Location[]>>;
let locationState: LocationsState = {};

export default function useLocations(calendarId?: string) {
  const setLocations = (locations: Location[]) => {
    if (calendarId === undefined) {
      locationState.value = locations;
    } else {
      locationState = {
        calendarId: ref(locations),
      };
    }
  };

  const locations = computed(() => {
    if (calendarId === undefined) {
      return locationState.value as Location[];
    }

    return locationState[calendarId as keyof LocationsState] as Location[];
  });

  const isPhoneCall = computed(() => {
    return locations.value.some((location) => location.value === 'phone');
  });

  return {
    setLocations,
    locations,
    isPhoneCall,
  };
}
