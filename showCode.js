var showCode = (fileName) => {
    fetch(fileName)
        .then(response => response.text())  // Get the file content as text
        .then(data => {
            document.getElementById('jsCodeDisplay').textContent = data;  // Inject the code into the pre tag
        })
        .catch(error => {
            document.getElementById('jsCodeDisplay').textContent = "Error loading JS file!";
            console.error('Error:', error);
        });
    }