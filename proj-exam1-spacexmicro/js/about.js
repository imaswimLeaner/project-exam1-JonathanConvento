const resultsContainer = document.querySelector(".companyInfo");

const url = "https://api.spacexdata.com/v4/company";

async function companyInfo() {

    try {
        const response = await fetch(url);
        const getInfo= await response.json();
        
        console.log(getInfo);

        createHTML(getInfo);
         } 
        catch(error) {
            console.log(error);
            resultsContainer.innerHTML = message("error", error);
        }
    }    
    
companyInfo();

function createHTML(getInfo) {

    
      
            
    resultsContainer.innerHTML +=
        
                `<div class="companyInfojs">
               
                </div>
                <h1 class="name"> ${getInfo.name}</h1>
                <br>
                <p class="desummary"> ${getInfo.summary}  </p>
                <br>
                <br>
                <h2 class="name2">Founder CEO </h2>
                <h1 class="name2">${getInfo.founder}</h1>
                <a href="${getInfo.links.elon_twitter}"><p class="dateapi"><i class="fab fa-twitter"></i> tweet to Elon here <i class="fab fa-twitter"></i></p></a>
                <p class="dateapi">founded year :  ${getInfo.founded}</p>
                <br>
                <h2 class="name2" > COO : ${getInfo.coo}</h2>
                <h2 class="name2"> CTO : ${getInfo.cto_propulsion}</h2>
                <br>
                <p class="desummary"> with total of ${getInfo.employees} high education employees</p>
                <p class="desummary"> with ${getInfo.launch_sites} Launch and ${getInfo.test_sites} test sites.<p>
                <p class="desummary"> Headquarters address : ${getInfo.headquarters.address} ${getInfo.headquarters.city}, ${getInfo.headquarters.state}.<p>
                </div>`;
    
}
