const url = "https://api.spacexdata.com/v4/dragons";

const resultsContainer = document.querySelector(".dragonDetails");

async function getdragonDetails() {

    try {
        const response = await fetch(url);
        const getDetails = await response.json();
        
        console.log(getDetails)
        createHTML(getDetails);
    }
        catch (error) {
            console.log(error);
            resultsContainer.innerHTML = message("error", error);
        }
    }


 getdragonDetails();

 function createHTML(getDetails) {

    resultsContainer.innerHTML = "";
    for (let i = 0; i < getDetails.length; i++) {

        
            
        resultsContainer.innerHTML += 
        
            `<div class="dragonStyleApi">
                <h1 class="name">${getDetails[i].name}</h1>
                <p>${getDetails[i].type}</p>
                <br>
                <div class="dragonImage" style="background-image: url('${getDetails[i].flickr_images[1]}')" atl="Dragon 1 Capsule image"></div>
                <p>${getDetails[i].description}</p>
                <br>
                <br>
                <p>A Crew Capacity of ${getDetails[i].crew_capacity}</p> 
                <br>
                <p>Wtih a height with trunk of ${getDetails[i].height_w_trunk.meters} meters and ${getDetails[i].height_w_trunk.feet} feet  </p> 
                <p>and a thick of Diameter ${getDetails[i].diameter.meters} meters and ${getDetails[i].diameter.feet}. feet </p> 
                <div class="dragonImage" style="background-image: url('${getDetails[i].flickr_images[2]}')" atl="Dragon 2 capsule image"></div>
                <p class="dateapi">First Flight ${getDetails[i].first_flight}</p>
                </div>
                <a href="${getDetails[i].wikipedia}}">
                <h5> Read more Here <i class="fas fa-external-link-alt"></i>

                </h5></a>`;
   

    }
}


    

