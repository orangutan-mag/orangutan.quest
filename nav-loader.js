fetch('nav.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('nav-loader').innerHTML = data;
    })
    .catch(error => console.log('Error loading nav:', error));