const brandButton = document.querySelectorAll('.btn')
brandButton.forEach (btn => btn.addEventListener('click', carFilter))

const all = document.querySelector('.all-cars')
all.addEventListener('click', allCars)

function carFilter () {
    const idBtn = document.getElementById(this.id)
    const brandBtn = idBtn.value

    let carFiltered = cars.filter(car => car.brand == brandBtn)

    showCars(carFiltered)
}

function allCars() {
    let allCars = cars

    showCars(allCars)
}