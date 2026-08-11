const formEl = document.querySelector('.form')

formEl.addEventListener('submit', event => {
    event.preventDefault();
    const formData = new FormData(formEl);
    const data = Object.fromEntries(formData)

    //validate the fields have data results
    if(data.name == "" || data.type == ""){
        $.toaster({priority : 'danger', title : 'Error', message : "Oops something broke"});
    }
    else {
        const payload ={
            fishname: data.name
        };

        fetch('https://fish-tracker-backend-9v9n.onrender.com/api/v1/fishes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        }).then(res => res.json())
          .then(data => console.log(data))
          .catch(error => console.log(error))
          $.toaster({priority : 'success', title : 'Fish Add', message : "New Fish Added"});
    }
    
});