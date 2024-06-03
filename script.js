//  Unplash API
const count = 30;
const apiKey = '6d34AzjplnXv3gfUCjmlwMJHMLq8oDjZItNfnxQKLow';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// Get photos
async function getPhotos() {
    try {
        const response = await fetch(apiUrl);
        const date = await response.json();
    } catch (error) {
        
    }
}

getPhotos();