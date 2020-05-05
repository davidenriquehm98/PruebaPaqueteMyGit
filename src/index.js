const greet = name => 'Hola ' + name
const axios = require('axios')

const users = async () => {
  const res = await axios.get('https://jsonplaceholder.typicode.com/users?_limit=2')
  // console.log(res)
  return res.data;
}

// users().then(res => console.log(res))

module.exports = {
  users, greet
}