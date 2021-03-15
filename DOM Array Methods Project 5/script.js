//callinng Dom elements
const main = document.getElementById('main');
const addUserButton = document.getElementById('add-user');
const doubleMoney = document.getElementById('double-money');
const showMillionaire = document.getElementById('show-millionaire');
const sortButton = document.getElementById('sort-richest');
const totalButton = document.getElementById('calculate-total');

let data = [];

generateRandomUser();
generateRandomUser();
generateRandomUser();

//functin to fetch random user
// used https://randomuser.me/api/
async function generateRandomUser() {
    const res = await fetch(' https://randomuser.me/api/');
    const data = await res.json();
     const user = data.results[0];
     //console.log(user);
    const newUser = {
        name: `${user.name.first} ${user.name.last}`,
        worth: Math.round(Math.random() * 1000000)
    }
    //console.log(newUser);
     addData(newUser); 
    
}

//Add newly generated user to data array
const addData = (newUser) => {
    data.push(newUser);

   updateDom();
}

//function to update UI
const updateDom = (inputData = data) => {
    main.innerHTML = '<h2><strong>Name</strong> NetWorth</h2>';
    //forEach array method lagarhe hain
    //The forEach() method calls a function once for each element in an array, in order.
    inputData.forEach( item => {
        const element = document.createElement('div');
        element.classList.add('name');
        element.innerHTML = `<strong>${item.name}</strong> ${formatCurrency(item.worth)}`;
        main.appendChild(element);
    });
}

//function to format a number as a Currency
const formatCurrency = num => {
    return 'PKR ' + (num).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}
