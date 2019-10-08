let elem1 = document.getElementById('age-table');
let elem2 = elem1.getElementsByTagName('label');
let elem3 = elem1.querySelector('#age-table > tbody > tr > td:first-child');
let elem4 = document.getElementsByName('search')[0];
let elem5 = elem4.querySelector('input');
let elem6 = elem4.getElementsByTagName('input')[1];


elem1.style.background = 'grey';
for (let el of elem2) {
  el.style.background = 'green';
}
console.log(elem2.length);

elem3.style.background = 'purple';
elem4.style.background = 'orange';
elem5.style.background = 'wheat';
elem6.style.background = 'red';

