const main = document.getElementById('main');
const addUserButton = document.getElementById('add-user');
const doubleMoneyButton = document.getElementById('double-money');
const showMillionaireButton = document.getElementById('show-millionaire');
const sortButton = document.getElementById('sort-richest');
const totalButton = document.getElementById('calculate-total');

// Initializing Data Array 
let data = [];


//functin to fetch random user
// used https://randomuser.me/api/
const generateRandomUser = async () => {
    const res = await fetch('https://randomuser.me/api/');
    const data = await res.json();
    const user = data.results[0];
    //console.log(user.name);
    const newUser = {
        name: `${user.name.first} ${user.name.last}`,
        worth: Math.round(Math.random() * 1000000)
    };

    addData(newUser);
}

//add newly generated user to data array
const addData = newUser => {
    data.push(newUser);

    updateDom();
}

//console.log(data);

//function to update UI
const updateDom = (inputdata = data) => {
    main.innerHTML = '<h2><strong>Name</strong> NetWorth</h2>';
    //forEach array method lagarahe hain]
    //The forEach() method calls a function once for each element in an array, in order.
    inputdata.forEach((item) => {
        const element = document.createElement('div');
        element.classList.add('name');
        element.innerHTML = `<strong>$(item.name) </strong>`;
    });
}











generateRandomUser();
generateRandomUser();
generateRandomUser();


