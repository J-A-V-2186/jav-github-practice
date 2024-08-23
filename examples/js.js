fetch('/users.json')
  .then(response => response.json()) // Converts the response to JSON (a format for data)
  .then(data => {
    console.log(data); // Do something with the data, like display it
  })
  .catch(error => {
    console.error('Error fetching data:', error); // Handle any errors
  });