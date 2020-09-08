import axios from 'axios';
import { getGeocodeDataUrl } from './getUrl';

export const getGeocodePosition = (setInputValue, fetchDataByLocalization) => {
    navigator.geolocation.getCurrentPosition(async (position) => {
        const { latitude, longitude } = position.coords;
        console.log(latitude, longitude);

        const placeData = await axios(getGeocodeDataUrl(latitude, longitude));
        const approximateName = placeData.data.results[0].address_components[0].long_name;

        fetchDataByLocalization({ lat: latitude, lon: longitude });
        setInputValue(approximateName);
    });
};
