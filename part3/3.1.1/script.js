const PATH = 'https://api.github.com/users/';
const PATH2 = '/homeWork/phone-catalog-static/phones-my/phones/phones.json';


const users = ['Numal-One', 'Owll223', 'Owlllz'];

function getUsers(users){
  let result = [];
  result = users.map(async (user)=>{
    console.log( user)
    let response = await fetch(`${PATH}${user}`);
    let userJson = await response.json();
    console.log(userJson);
    return userJson;
  });
  
 return result;
}

async function getUsers(users){
  let result = [];
  result = await Promise.all(users.map((user)=>{
    
    fetch(`${PATH}${user}`)
    .then(
      (response)=>{
       response.json();
    });
    
  }));
  
 return result;
}


let a = getUsers(users);
console.log(a)