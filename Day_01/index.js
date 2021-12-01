import {data} from './data.js';

const increasedDataPoints = [];
for(let x = 0; x < data.length; x++){
  if(data[x] < data[x+1]){
    increasedDataPoints.push(data[x]);
  }
}
console.log(increasedDataPoints.length);