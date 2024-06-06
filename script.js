const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');

let photosArray = [];

// Helper function that set attributes
function setAttributes(element, attributes) {
    for (let key in attributes) {
        element.setAttribute(key, attributes[key]);
    }
}

// Display photos
function displayPhotos() {
    photosArray.forEach((photo) => {
        // Create <a>
        const item = document.createElement('a');
        setAttributes(item, {
            href: photo.links.html,
            target: '_blank',
        });
        // Create <img> for photos
        const img = document.createElement('img');
        setAttributes(img, {
            src: photo.urls.regular,
            alt: photo.alt_description,
            title: photo.alt_description,
        })
        // Put <img> inside <a>
        item.appendChild(img);
        imageContainer.appendChild(item);
    });
}

//  Unplash API
const count = 10;
const apiKey = 'BBPo3Q1lZK-Tc7WzOz5BZxT_zXekCGAVlVovuvBKslU';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// Get photos
async function getPhotos() {
    try {
        const response = await fetch(apiUrl);
        photosArray = await response.json();
        displayPhotos();
    } catch (error) {
        // console.log(error);
    }
}

getPhotos();