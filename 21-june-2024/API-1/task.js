// function getAllCatImages() {
//     // List of HTTP status codes available on http.cat
//     const statusCodes = [
//         100, 101, 200, 201, 202, 203, 204, 206, 207, 300, 301, 302, 303, 
//         304, 305, 307, 400, 401, 402, 403, 404, 405, 406, 408, 409, 410, 
//         411, 412, 413, 414, 415, 416, 417, 418, 420, 421, 422, 423, 424, 
//         425, 426, 429, 431, 444, 450, 451, 499, 500, 502, 503, 504, 506, 
//         507, 508, 509, 599
//     ];

//     // Get the container where the images will be added
//     const container = document.getElementById("catImagesContainer");

//     // Loop through each status code and create an image for it
//     statusCodes.forEach(async code => {
//         // Create a new img element
//         const imgElement = document.createElement("img");

//         // Set the src attribute to the http.cat image URL for the status code
//         imgElement.src = `https://http.cat/${code}`;
//         imgElement.className = "image";

//         // Append the img element to the container
//         container.appendChild(imgElement);
//     });
// }

// // Call the function to display all cat images
// getAllCatImages();


async function getAllCatImages(){
    const container = document.getElementById("catImagesContainer");
    const codes = [
        100, 101, 200, 201, 202, 203, 204, 206, 207, 300, 301, 302, 303, 
        304, 305, 307, 400, 401, 402, 403, 404, 405, 406, 408, 409, 410, 
        411, 412, 413, 414, 415, 416, 417, 418, 420, 421, 422, 423, 424, 
        425, 426, 429, 431, 444, 450, 451, 499, 500, 502, 503, 504, 506, 
        507, 508, 509, 599
    ];

    codes.forEach(async (code) => {
        try {
            const response = await fetch(`https://http.cat/${code}`, { mode: 'no-cors' });

            // Since we are in 'no-cors' mode, we can append the URL directly without blob
            const imgElement = document.createElement('img');
            imgElement.src = `https://http.cat/${code}`;
            imgElement.className = 'image'; 
            container.appendChild(imgElement);
        } catch (error) {
            console.log(`Error fetching image for code ${code}:`, error.message);
        }
    });
}

getAllCatImages();




