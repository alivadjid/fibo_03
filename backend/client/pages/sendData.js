

export default function sendData() {
fetch('http://localhost:3001/number', {
  method: 'POST',
  body: frontNumber
})
.then((responce) => {
  if (responce.status !== 200) {
      return Promise.reject(new Error(responce.statusText))
  }
  return Promise.resolve(responce)
})
.then((response) => {
return response.text();
})
.then((data) => {
console.log('data:', data);
})
.catch((error) => {
  console.log('error:', error)
});
//console.log(frontNumber);
}