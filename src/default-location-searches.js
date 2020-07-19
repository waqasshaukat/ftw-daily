import { types as sdkTypes } from './util/sdkLoader';

const { LatLng, LatLngBounds } = sdkTypes;

// An array of locations to show in the LocationAutocompleteInput when
// the input is in focus but the user hasn't typed in any search yet.
//
// Each item in the array should be an object with a unique `id` (String) and a
// `predictionPlace` (util.types.place) properties.
export default [
  {
    id: 'default-lahore',
    predictionPlace: {
      address: 'Lahore, Punjab, Pakistan',
      bounds: new LatLngBounds(new LatLng(31.63342699, 74.44936752), new LatLng(31.38303071, 74.20732498)),
    },
  },
  {
    id: 'default-islamabad',
    predictionPlace: {
      address: 'Islamabad, Islamabad Capital Territory, Pakistan',
      bounds: new LatLngBounds(new LatLng(33.78461772, 73.21349157), new LatLng(33.55023701, 72.98140539)),
    },
  },
  {
    id: 'default-murree',
    predictionPlace: {
      address: 'Murree, Punjab, Pakistan',
      bounds: new LatLngBounds(new LatLng(33.98612729, 73.51116083), new LatLng(33.81170956, 73.33798324)),
    },
  },
  {
    id: 'default-naran',
    predictionPlace: {
      address: 'Naran, Kaghan valley, KPK, Pakistan',
      bounds: new LatLngBounds(new LatLng(35.06507457, 73.83380135), new LatLng(34.7203578, 73.48744617)),
    },
  },
  {
    id: 'default-karachi',
    predictionPlace: {
      address: 'Karachi, Sindh, Pakistan',
      bounds: new LatLngBounds(new LatLng(25.09107105, 67.31562926), new LatLng(24.69125919, 66.95239379)),
    },
  },
  {
    id: 'default-quetta',
    predictionPlace: {
      address: 'Quetta, Balochistan, Pakistan',
      bounds: new LatLngBounds(new LatLng(30.23802518, 67.0598072), new LatLng(30.14224211, 66.96848334)),
    },
  },
];
