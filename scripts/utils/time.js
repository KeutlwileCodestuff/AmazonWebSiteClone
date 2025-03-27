
import dayjs from 'https://unpkg.com/dayjs@1.8.9/esm/index.js';

export function deliveryDates(days){
    let today = dayjs();
    let plusDays = today.add(days , 'day');
    let display =  dayjs(plusDays).format('dddd, MMMM D');
    return display;
  }