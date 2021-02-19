//getting dom element
const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row.seat:not(.occupied)');
const total = document.getElementById('total');
const count = document.getElementById('count');
const movieSelect = document.getElementById('movie');
let ticketPrice = +movieSelect.value;

//console.log(ticketPrice);


populateUI();

//pull data from local storage to bulid UI
function populateUI(){
    const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));

if (selectedSeats !== null && selectedSeats.length > 0 ){
    seats.forEach((seat, index) => {
        if (selectedSeats.indexOf(index) > -1 ) {
            seat.classList.add('selected');
        }
    });
}

const selectedMovieIndex = localStorage.getItem('selectedMovieIndex');
if (selectedMovieIndex !== null) {
    movieSelect.selectedIndex = selectedMovieIndex;
}
}


//event listner for click on available seat

container.addEventListener('click', (e) => {
    //console.log(e.target);

    if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
        e.target.classList.toggle('selected');
    }
    updateSelectedCount();
    
})

//Function to update counts

const updateSelectedCount = () => {
    const selectedSeats = document.querySelectorAll('.row .seat.selected')
    //console.log(selectedSeats)
    const countSelectedSeats = selectedSeats.length;
    //console.log(countSelectedSeats);

    const seatsIndex = [...selectedSeats].map(seat =>[...seats].indexOf(seat));
    localStorage.setItem('selectedSeats',JSON.stringify(seatsIndex));

count.innerText = countSelectedSeats;
total.innerText = ticketPrice * countSelectedSeats;
}

// Fucntion to save selected movie & its price
function setMovieData(movieIndex,moviePrice){
    localStorage.setItem('selectedMovieIndex',movieIndex);
    localStorage.setItem('selectedMoviePrice',moviePrice);

}


// event listner for change of select movie in dropdown

movieSelect.addEventListener('change', (e) => {

    ticketPrice = +e.target.value;
   setMovieData(e.target.selectedIndex, e.target.value);
    updateSelectedCount();
})

// calculate initial number of seats and total price
 updateSelectedCount();