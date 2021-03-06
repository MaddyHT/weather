export function weatherData(state = {}, action) {
    switch (action.type) {
        case 'FETCH_DATA_SUCCESS':
            return action.fetchedData;
        default:
            return state;
    }
}

export function activePlace(state = 0, action) {
    switch (action.type) {
        case 'SET_ACTIVE_PLACE':
            return action.placeIndex;
        default:
            return state;
    }
}

export function cities(state = citiesArr, action) {
    switch (action.type) {
        case 'SET_CITIES':
            return action.cities ;

        default:
            return state;
    }
}

var citiesArr = [
  { name: "Moscow, Russia", cityName: "Moscow, RU" },
  { name: "Sochi, Russia", cityName: "Sochi, RU" },
  { name: "Nizhniy Tagil, Russia", cityName: "Nizhniy Tagil, RU" },

        ]
