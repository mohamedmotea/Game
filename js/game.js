
// mmorpg
export class Game {
    constructor(){

        
    }

   async getGameData(cat){
    const options = {
                    method: 'GET',
                    headers: {
                        'X-RapidAPI-Key': '009fe9591fmsh411ef11c53b473ap18b59ajsn9c918d71b0cd',
                        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
                    }
                };
                const api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${cat}`,options)
                const apiData = await api.json();
                return apiData; 
    }
}















// export class Game{
//     constructor (category){
//         this.category = category
//     }
//   async getData() {
//         const options = {
//             method: 'GET',
//             headers: {
//                 'X-RapidAPI-Key': '009fe9591fmsh411ef11c53b473ap18b59ajsn9c918d71b0cd',
//                 'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
//             }
//         };
//         const api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${this.category}`,options)
//         const apiData = await api.json();
//         // console.log(apiData)
//         return apiData; 
//     }

//     }


    

// export function displayGame(data){
//     let containerGame = ``;

//     for(let i = 0 ; i < data.length; i++){
//          let games = new Game(data[i].id,data[i].thumbnail,data[i].title,data[i].short_description,data[i].genre,data[i].platform)

//         containerGame +=`
//         <div class="col-md-3">
//                     <div class="card mb-3 p-3 h-100 rounded" role="button" id="${games.id}" data-num="${i}">
//                         <div class="header-card mb-3"><img src="${games.img}" class="w-100" alt="${games.gen} game"></div>
//                         <div class="card-title d-flex justify-content-between">
//                             <h6 class="text-light">${games.title}</h6>
//                             <a href="#" class="card-salary rounded fw-bold">Free</a>
//                         </div>
//                         <div class="card-body m-0 px-0 py-3">
//                             <p class="fw-bolder text-center">${games.desc}</p>
//                         </div>
//                         <div class="footer-card pt-3 d-flex justify-content-between">
//                             <span class="rounded p-2 fw-bold">${games.gen}</span>
//                             <span class="rounded p-2 fw-bold">${games.platform}</span>
//                         </div>
//                     </div>
//                 </div>
                
        
//         `
//     }
//     document.getElementById("rowBody").innerHTML = containerGame;
// }

