let cars = [] 
    const dataBase = 'db.json'
    getSearchCars()

    async function getSearchCars() { 
        const res = await fetch(dataBase)
        cars = await res.json()
    
        console.log(cars)
}