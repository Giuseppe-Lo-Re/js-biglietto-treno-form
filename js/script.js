

const generateButton = document.getElementById('generate-ticket');
generateButton.addEventListener('click',
    function() {
        const userName = document.getElementById('user-name').value;
        const userKm = parseInt( document.getElementById('user-km').value);
        const userAge = document.getElementById('user-age').value;
        
        const price = userKm * 0.21
        let discount = 0

        if(userAge === 'minorenne') {
            discount = price * 20 / 100;
        } else if (userAge === 'over') {
            discount = price * 40 / 100;
        }

        const finalPrice = (price - discount).toFixed(2);
        console.log(finalPrice)
        
        document.getElementById('user-name').innerHTML = userName;
        document.getElementById('user-offer').innerHTML = userAge;
        document.getElementById('user-carriage').innerHTML = Math.floor(Math.random() * 10) + 1;
        document.getElementById('user-code').innerHTML = Math.floor(Math.random() * 100000) + 1;
        document.getElementById('final_price').innerHTML = finalPrice; 

    }
);