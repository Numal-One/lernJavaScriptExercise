let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };

  console.log(topSalary(salaries));

  
  function topSalary(sal) {
    let resultArr = Object.entries(sal).sort((itm1,itm2) => itm2[1] - itm1[1]);
    return resultArr[0][0];
  } 