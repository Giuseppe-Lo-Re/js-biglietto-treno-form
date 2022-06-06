
// Variable to collect user data:
const generateButton = document.getElementById('generate-ticket');
generateButton.addEventListener('click',
    function() {
        const userName = document.getElementById('user-name').value;
        const userKm = parseInt( document.getElementById('user-km').value);
        const userAge = document.getElementById('user-age').value;
        
        // Set price to 0.21/km:
        const price = userKm * 0.21

        // Set discount to 0 to default:
        let discount = 0

        // Set discount for under18 and over65:
        if(userAge === 'minorenne') {
            discount = price * 20 / 100;
        } else if (userAge === 'over') {
            discount = price * 40 / 100;
        }

        // Set decimal digits to 2:
        const finalPrice = (price - discount).toFixed(2);
        
        // Fill ticket with user data: 
        document.getElementById('username').innerHTML = userName;
        document.getElementById('user-offer').innerHTML = userAge;

        // Fill ticket with random numbers generator : 
        document.getElementById('user-carriage').innerHTML = Math.floor(Math.random() * 10) + 1;
        document.getElementById('user-code').innerHTML = Math.floor(Math.random() * 100000) + 1;

        // Fill ticket with final Price: 
        document.getElementById('final-price').innerHTML = '€ ' + finalPrice; 

        // Add class "active" to ticket to change display from "none" to "block"
        document.getElementById('ticket').classList.add('active');  
    }
); 

// Variable to clean up user data after generate the ticket:
const CancelTicket = document.getElementById('cancel-ticket');
CancelTicket.addEventListener('click',
    function() {
        document.getElementById('user-name').value = '';
        document.getElementById('user-km').value = '';
        document.getElementById('user-age').value = 'maggiorenne';

        // Remove class "active" to ticket to change display from "block" to "block"        
        document.getElementById('ticket').classList.remove('active');
    }
);