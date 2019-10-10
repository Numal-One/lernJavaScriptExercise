let target = document.querySelectorAll('body>ul li');
console.log(target);
for (let liEl of target) {
  let liLength = liEl.querySelectorAll('li').length;
  if (liLength) {
    liEl.firstChild.data += ` [${liLength}]`;
  }
}