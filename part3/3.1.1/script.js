const PATH = 'https://api.github.com/users/';

const users = ['Numal-One', 'Owll', 'Owlllz'];

async function getUsers(users){
  let output = [];
  output = users.map(async (user)=>{
    // console.log(user);
    let response = await fetch(`${PATH}${user}`);
    console.log(`ok - ${response.ok}`);
    if (!response.ok || response.status !== 200) {
      return null;
    }
    let userJson = await response.json();
    // console.log(userJson);
    return userJson;
  });
  console.log(`output - ${output}`);
  let result = await Promise.all(output);
  return result;
}


(async function (){
  let a;
  await getUsers(users).then((val) => {
    return a = val;
  });
  console.log(a);
})();
