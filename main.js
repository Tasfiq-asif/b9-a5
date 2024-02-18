



// Button select

 // Get all the buttons
 const buttons = document.querySelectorAll('.bus-seat button');
 
 // seat to add

 const seatAdd = document.getElementById('seat-add')

 // seat to decrease

 

 // Initialize counter for selected buttons
 let selectedCount = 0;
 // Get the seat left element
 const seatLeftElement = document.getElementById('seats-left');
 // Get the current seat left value
 let seatLeft = parseInt(seatLeftElement.innerText);
 
 // Add click event listener to each button
 buttons.forEach(button => {
     button.addEventListener('click', () => {
         // Toggle background color between green and default color
         if (!button.classList.contains('bg-green-500') && selectedCount < 4) {
             button.classList.add('bg-green-500');
             selectedCount++;
             seatLeft--;
             
             console.log(seatLeft)
         } else {
            
            if (button.classList.contains('bg-green-500')) {
                button.classList.remove('bg-green-500'); 
                    selectedCount--;
                    seatLeft++
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