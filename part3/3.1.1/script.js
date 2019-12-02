const PATH = 'https://api.github.com/users/';

const users = ['Numal-One', 'Owll', 'Owlllz'];

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
  return Promise.all(users.map(async (user)=>{
    
    let respons = fetch(`${PATH}${user}`)
    .then(
      function(response){
      let res = response.json();
      console.log(res);
      return res;
    });
   
    
  }));
  
 
}


let a = getUsers(users);
console.log(a)