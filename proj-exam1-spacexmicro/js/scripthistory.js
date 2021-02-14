const url = "https://api.spacexdata.com/v4/history";

const resultsContainer = document.querySelector(".historyresults");

async function resultHistory() {

    try {
        const response = await fetch(url);
        const getHistory= await response.json();
        resultsContainer.innerHTML = "";
        createHTML(getHistory);

       
        } 
        catch(error) {
            console.log(error);
            resultsContainer.innerHTML = message("error", error);
        }
    }    
    

resultHistory();

function createHTML(history) {

    resultsContainer.innerHTML = "";
    for (let i = 0; i < history.length; i++) {

        if (i === 9) {
            break;
        }
            
        resultsContainer.innerHTML += 
        
            `<div class="historyRes">
                <h1 class="name">${history[i].title}</h1>
                <p class"desummary">${history[i].details}</h4>
                <br>
                <br>
                <p class="dateapi"> This happend ${history[i].event_date_utc}</p>
                <a href="${history[i].links.article}}">
                <h5 class="desummary"> Read more Here <i class="fas fa-external-link-alt"></i>
                </h5></a>
                <br>
                </div>
                <br>`;
   

    }
}
