// Fetch the list of schools from the API
fetch('https://nigeria-universites.p.rapidapi.com/universities/', {
    headers: {
      'X-RapidAPI-Key': 'YOUR-RAPIDAPI-KEY',
      'X-RapidAPI-Host': 'nigeria-universites.p.rapidapi.com'
    }
  })
    .then(response => response.json())
    .then(data => {
      var selectElement = document.getElementById('school');

      data.forEach(function(school) {
        var option = document.createElement('option');
        option.value = school.code;
        option.textContent = school.name + ' - ' + school.city;
        selectElement.appendChild(option);
      });
    })
    .catch(error => console.error(error));