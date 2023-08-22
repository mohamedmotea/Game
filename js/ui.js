export class DisplayGame {
    constructor(){}


    display(data){
    let container = ``
        for(let i = 0 ; i < data.length; i++){
            
                    container +=`
                    <div class="col-md-3">
                                <div class="card mb-3 p-3 h-100 rounded" role="button" id="${data[i].id}" data-num="${i}">
                                    <div class="header-card mb-3"><img src="${data[i].thumbnail}" class="w-100" alt="${data[i].gen} game"></div>
                                    <div class="card-title d-flex justify-content-between">
                                        <h6 class="text-light">${data[i].title}</h6>
                                        <a href="#" class="card-salary rounded fw-bold">Free</a>
                                    </div>
                                    <div class="card-body m-0 px-0 py-3">
                                        <p class="fw-bolder text-center">${data[i].short_description}</p>
                                    </div>
                                    <div class="footer-card pt-3 d-flex justify-content-between">
                                        <span class="rounded p-2 fw-bold">${data[i].genre}</span>
                                        <span class="rounded p-2 fw-bold">${data[i].platform}</span>
                                    </div>
                                </div>
                            </div>
                            
                    
                    `
                }
                document.getElementById("rowBody").innerHTML = container;
    }
}