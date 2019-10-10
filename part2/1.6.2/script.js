let link = document.querySelectorAll('ul a');
for (let el of link) {
  let linkCont = el.getAttribute("href");
  if (linkCont.includes('://') && (!linkCont.includes('http://internal.com'))) {
    el.style.color = 'orange';
  }
  console.log (el.href, el.getAttribute('href'));
}