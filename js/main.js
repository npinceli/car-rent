let cars = [] 
    const dataBase = 'db.json'
    getSearchCars()

    async function getSearchCars() { 
        const res = await fetch(dataBase)
        cars = await res.json()
        showCars(cars)
}

const insertCars = document.getElementById('cars') 

function showCars (carList) {
    insertCars.innerHTML = ''
    carList.forEach( car => {
        insertCars.innerHTML += `
            <div class="cars-content-cards-car">
                <img class="cars-content-cards-image" src="${car.image}" alt="">
                <span class="cars-content-cards-brand tag flex"> <span class="material-symbols-outlined">settings</span> <p>${car.brand}</p> </span>
                <span class="cars-content-cards-type tag flex"><span class="material-symbols-outlined">key</span> <p>${car.type}</p></span>
                <span class="cars-content-cards-year tag flex"> <span class="material-symbols-outlined">calendar_month</span>  <p>${car.year}</p> </span>          
                <h2 class="cars-content-cards-name">${car.name}</h2>
                <p class="cars-content-cards-description">${car.desc}</p>
                <p class="cars-content-cards-price">$ ${car.price}/day</p>
                <a href="" class="cars-content-cards-btn">Rent Now</a>
            </div>
        `
    })
}