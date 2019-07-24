import { ajax } from 'rxjs/ajax';

// https://home.openweathermap.org/api_keys
const apikey = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx';

export function weather() {
  return ajax(`https://api.openweathermap.org/data/2.5/weather?zip=10017,us&appid=${apikey}`);
}
