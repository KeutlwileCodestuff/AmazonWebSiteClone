
import dayjs from 'https://unpkg.com/dayjs@1.8.9/esm/index.js';

export function deliveryDates(days){
  // returns todays date + the number of 'days'
    let today = dayjs();
    let plusDays = today.add(days , 'day');
    let display =  dayjs(plusDays).format('dddd, MMMM D');
    return display;
  }

export function today(){
  return dayjs().format('dddd, MMMM D');
}