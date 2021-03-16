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


//Funtion to double the NetWorth of Each User
const doubleWorth = () => {
    //The map() method creates a new array with the results of calling a function for every array element.
    data = data.map((item) => {
        return { ...item, worth:item.worth * 2 }
    });

    updateDom();
}


//Funtion to Sort user by the Richest user
const sortRichest = () => {
    //The sort order can be either alphabetic or numeric, and either ascending (up) or descending (down).
    data.sort( (a, b) => b.worth - a.worth);

    updateDom();
}

//Funtion to show millionaires
const showMillionaires = () => {
      //The filter() method creates an array filled with all array elements that pass a test (provided as a function).
    data = data.filter (item => item.worth > 1000000 );

    updateDom();
}


//Funtion to calculate the total net worth of all users
const CalculateNetworth = () => {
    const totalWorth = data.reduce(
        (acc, item) => (acc += item.worth), 0 
    );
    
    const totalNetworthElement = document.createElement('div');
    totalNetworthElement.innerHTML = `<h3>Total Net Worth : <strong> ${formatCurrency(totalWorth)} </srong></h3>`
    main.appendChild(totalNetworthElement);
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

//Event Listners 
//1.Add User Event Listner
addUserButton.addEventListener('click', generateRandomUser);
//2.Add double money event listner
doubleMoney.addEventListener('click',doubleWorth);
//3.Add Sort Event Listner
sortButton.addEventListener('click',sortRichest);
//4.Add Show Millionaire Event listner
showMillionaire.addEventListener('click',showMillionaires);
//5.Add Calculate Total Wealth Event Listner
totalButton.addEventListener('click',CalculateNetworth);