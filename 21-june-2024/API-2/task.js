async function getAllDogImages(){
    const container = document.getElementById("dogImagesContainer")
    const codes = [100, 101, 102, 103, 200, 201, 202, 203, 204, 205, 206, 207, 208,
                   218, 226, 300, 301, 302, 303, 304, 305, 306, 307, 308, 400, 401, 
                   402, 403, 404, 405, 406, 407, 408, 409, 410, 411, 412, 413, 414,
                   415, 416, 417, 418, 419, 420, 421, 422, 423, 424, 425, 426, 428,
                   429, 430, 431, 440, 444, 449, 450, 451, 460, 463, 464, 494, 495, 
                   496, 497, 498, 499, 500, 501, 502, 503, 504, 505, 506, 507, 508,
                   509, 510, 511, 520, 521, 522, 523, 524, 525, 526, 527, 529, 530,
                   561, 598, 599, 999]

    codes.forEach(async (code)=>{
        try {
            const response = await fetch(`https://http.dog/${code}.jpg`)
            const result = await response.blob()
            
            // Create an image element to display the fetched image
            const imgElement = document.createElement('img')
            imgElement.src = URL.createObjectURL(result)
            imgElement.className = 'images' 
            
            // Append the image to the container
            container.appendChild(imgElement)
        } catch (error) {
            console.log("Error fetching image for code", code, error)
        }
    })
}

getAllDogImages()
