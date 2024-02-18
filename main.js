



// Button select

 // Get all the buttons
 const buttons = document.querySelectorAll('.bus-seat button');
    
 // Initialize counter for selected buttons
 let selectedCount = 0;
 
 // Add click event listener to each button
 buttons.forEach(button => {
     button.addEventListener('click', () => {
         // Toggle background color between green and default color
         if (!button.classList.contains('bg-green-500') && selectedCount < 4) {
             button.classList.add('bg-green-500');
             selectedCount++;
             console.log(selectedCount)
         } else {
            
            if (button.classList.contains('bg-green-500')) {
                button.classList.remove('bg-green-500'); 
                    selectedCount--;
                    console.log(selectedCount)
            }
        }
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