

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
    document.getElementById('grand-total').innerText = totalPrice

}


function removeTableRow(tableId){

    const tbody = document.getElementById("tickets")

    const row = document.getElementById(tableId)

    tbody.removeChild(row)

    let totalPrice = parseInt(document.getElementById('total-price').innerText) - 550

    document.getElementById('total-price').innerText = totalPrice
    document.getElementById('grand-total').innerText = totalPrice
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
     button.addEventListener('click', function(e){
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
                    
            }
        }

        if(selectedCount==4){
            document.getElementById('applyButton').disabled = false
        }
        else{
            document.getElementById('applyButton').disabled = true
        }
        seatAdd.innerText =selectedCount
        document.getElementById('seats-left').innerText = seatLeft

        checkInputs()


     });
 });

 

let applyCoupon = false;
const discountCode1 = "NEW15";
const discountCode2 = "Couple 20";

const applyButton = document.getElementById('applyButton');

applyButton.addEventListener('click',function(){
    const couponInput = document.getElementById('coupon').value
    const couponApplied = document.getElementById('couponApplied')
    let grandTotal = parseInt(document.getElementById('grand-total').innerText)



    if(couponInput===discountCode1){
        document.getElementById('grand-total').innerText = grandTotal - grandTotal * 0.15;
        document.getElementById('discountPrice').innerText = grandTotal * 0.15
        document.getElementById('couponInput').classList.add('hidden')
        couponApplied.classList.remove('hidden')
        

    }
    else if(couponInput===discountCode2){
        document.getElementById('grand-total').innerText = grandTotal - grandTotal * 0.20;
        document.getElementById('discountPrice').innerText = grandTotal * 0.20
        document.getElementById('couponInput').classList.add('hidden')
        couponApplied.classList.remove('hidden')
    }

    else{
        alert("Invalid coupon code")
    }
    
});

function openModal(event) {
    event.preventDefault(); 
    my_modal_1.showModal(); 
}

const closeButton = document.getElementById('closeButton');

// Add a click event listener to the close button
closeButton.addEventListener('click', function() {
    // Close the modal dialog
    my_modal_1.close();
});

// Form button functionality

const phoneNumberInput = document.getElementById('phoneNumber');
const passengerNameInput = document.getElementById('passengerName');



function checkInputs() {

    const phoneNumberInput = document.getElementById('phoneNumber');
    const passengerNameInput = document.getElementById('passengerName');
    let phoneNumber = phoneNumberInput.value.trim();
    let passengerName = passengerNameInput.value.trim();
    let submitButton = document.getElementById('submitButton');
    let count = parseInt(document.getElementById('seat-add').innerText);

    
    if (phoneNumber && passengerName) {
        
        if (count > 0) {
            submitButton.disabled = false; 
        } else {
            submitButton.disabled = true; 
        }
    } else {
        submitButton.disabled = true; 
    }
}
