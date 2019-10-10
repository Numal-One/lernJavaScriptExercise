let links = document.body.querySelectorAll('ul a');
for (let link of links) {
    let linkAttr = link.getAttribute('href');
    if (linkAttr.includes('://') && !(linkAttr.includes('http://internal.com'))) {
        link.style.color = 'orange';
    }
    
};
