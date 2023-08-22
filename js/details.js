// import { getCard } from "./index.js";

export class Details {
    constructor(){
    }

    showDeta (data,cardNum){
        let add = `
        
         <div class="col-md-4">
        <h2 class="mb-3">Details Game</h2>
        <img src="${data[cardNum].thumbnail}" class="w-100" alt="${data[cardNum].genre} game">
    </div>
    <div class="col-md-8">
        <h3 class="mt-5">Title:${data[cardNum].title}</h3>
       <p>Category: <span class="rounded text-black fw-bold">${data[cardNum].genre}</span> </p>
       <p>Platform: <span class="rounded text-black fw-bold">${data[cardNum].platform}</span> </p>
       <p>Status: <span class="rounded text-black fw-bold">Live</span> </p>

       <p class="mt-3 mb-4">${data[cardNum].short_description}

       </p>
        <a class="showGame rounded" href="${data[cardNum].game_url}">Show Game</a>
    </div> 
        
        `
        document.getElementById("rowDet").innerHTML = add;
    }
    
}


