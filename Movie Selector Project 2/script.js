//getting dom element
const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row.seat:not(.occupied)');
const total = document.getElementById('total');
const count = document.getElementById('count');
const movieSelect = document.getElementById('movie');
const ticketPrice = +movieSelect.Value;

////////console.log(ticketPrice);

const updateSelectedCount = () => {
    const selectedSeats = document.querySelectorAll('.row .seat.selected');
    //console.log(selectedSeats);
    const countSelectedSeats = selectedSeats.length;
    //console.log(countSelectedSeats);

count.innerText = countSelectedSeats;
total.innerText = ticketPrice * countSelectedSeats;

}



//event listner for click on available seat

container.addEventListener('click', (e) => {
    //console.log(e.target);

    if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
        e.target.classList.toggle('selected');
    }
    updateSelectedCount();
    
})