let sum = 0; 

document.querySelector('#addEntry1').addEventListener('click', entry1)  
document.querySelector('#addEntry2').addEventListener('click' entry2)

let entry1 = Number(entry1);
let entry2 = Number(entry2);

function addEntries() {
    sum = entry1 + entry2;
    document.querySelector('#putSumHere').innerText = sum 
}