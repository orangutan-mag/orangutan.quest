fetch('/navPrevious.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('navPrevious-loader').innerHTML = data;
    })
    .catch(error => console.log('Error loading nav:', error));