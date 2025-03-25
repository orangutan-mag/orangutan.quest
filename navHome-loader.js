fetch('/navHome.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('navHome-loader').innerHTML = data;
    })
    .catch(error => console.log('Error loading nav:', error));