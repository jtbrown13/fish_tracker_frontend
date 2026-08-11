const API_URL = "https://fish-tracker-backend-9v9n.onrender.com/api/v1/fishes";

const fishSelect = document.getElementById("fishSelect");
const fishNameInput = document.getElementById("fishNameInput");
const formEl = document.querySelector('.updateForm');

let fishesData = [];

fetch(API_URL)
.then(Response => Response.json())
.then(data => {
   data.forEach(fish => {
    const option = document.createElement('option');
    option.value = fish.id;
    option.textContent = fish.fishname;
    fishSelect.appendChild(option);
   });
});

fishSelect.addEventListener('change', () => {
  const selectedOption = fishSelect.options[fishSelect.selectedIndex];
  fishNameInput.value = selectedOption.text;
});

formEl.addEventListener('submit', event =>{
    event.preventDefault();

    if(fishSelect.value == "" || fishNameInput.value == "") {
        $.toaster({priority : 'danger', title : 'Error', message : "Oops something broke"});
    }
    else {
        const payload = { fishname: fishNameInput.value };

        fetch(`https://fish-tracker-backend-9v9n.onrender.com/api/v1/fishes/${fishSelect.value}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
            }).then(res => res.text())
              .then(data => console.log(data))
              .catch(error => console.log(error))
              $.toaster({priority : 'success', title : 'Fish Updated', message : "Fish Updated"});
    }   
});

