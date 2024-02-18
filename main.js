

function addTableRow(buttonText){


    const newRow = document.createElement('tr')
    newRow.id = buttonText

    const seatCell = document.createElement('td')
    seatCell.textContent =buttonText

    const classCell = document.createElement('td')
    classCell.textContent = 'Ecomomy'

    const priceCell = document.createElement('td')
    priceCell.textContent = '550'

    newRow.appendChild(seatCell);
    newRow.appendChild(classCell);
    newRow.appendChild(priceCell);

    const tbody = document.getElementById("tickets")

    tbody.appendChild(newRow)


    let totalPrice = parseInt(document.getElementById('total-price').innerText) + 550

    document.getElementById('total-price').innerText = totalPrice

}


function removeTableRow(tableId){

    const tbody = document.getElementById("tickets")

    const row = document.getElementById(tableId)

    tbody.removeChild(row)

    let totalPrice = parseInt(document.getElementById('total-price').innerText) - 550

    document.getElementById('total-price').innerText = totalPrice

}


// Button select

 
// Get all the buttons
 
 
 const buttons = document.querySelectorAll('.bus-seat button');
 
 // seat to add

 const seatAdd = document.getElementById('seat-add')



 

 // Initialize counter for selected buttons
 let selectedCount = 0;
 // Get the seat left element
 const seatLeftElement = document.getElementById('seats-left');
 // Get the current seat left value
 let seatLeft = parseInt(seatLeftElement.innerText);
 
 // Add click event listener to each button
 buttons.forEach(button => {
     button.addEventListener('click', (e) => {
         // Toggle background color between green and default color
         if (!button.classList.contains('bg-green-500') && selectedCount < 4) {
             button.classList.add('bg-green-500');
             selectedCount++;
             seatLeft--;
             addTableRow(e.target.innerText)
         } else {
            
            if (button.classList.contains('bg-green-500')) {
                button.classList.remove('bg-green-500'); 
                    selectedCount--;
                    seatLeft++
                    removeTableRow(e.target.innerText)
                    console.log(selectedCount)
            }
        }
        seatAdd.innerText =selectedCount
        document.getElementById('seats-left').innerText = seatLeft
     });
 });


// Form button functionality

function checkInputs() {
    var phoneNumber = document.getElementById('phoneNumber').value;
    var passengerName = document.getElementById('passengerName').value;
    var submitButton = document.getElementById('submitButton');

    if (phoneNumber && passengerName) {
        submitButton.disabled = false;
    } else {
        submitButton.disabled = true;
    }
}