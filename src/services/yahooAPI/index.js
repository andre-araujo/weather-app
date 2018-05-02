
import { YAHOO_API_URL } from '../../lib/constants';

export const getWeatherByLocationName = locationName => fetch(`${YAHOO_API_URL}/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22${locationName}%22)&format=json&u=c&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys`);

export const getWeatherByLatLong = (lat, long) => fetch(`${YAHOO_API_URL}/yql?q=select * from weather.forecast where woeid in (SELECT woeid FROM geo.places WHERE text="(${lat},${long})")&format=json`);

