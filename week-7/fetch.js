const fetchData = () => {
  fetch('https://swapi.dev/api/people/4')
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))
}

fetchData();