const API_URL = "https://fish-tracker-backend-9v9n.onrender.com/api/v1/fishes";

fetch(API_URL)
.then(Response => Response.json())
.then(data => {
    const formattedData = data.map(fish => [
        fish.id,
        fish.fishname
    ]);

    new gridjs.Grid({
        columns: ["ID","FishName"],
        data: formattedData,
        search: true,
        sort: true,
        pagination: {
            enabled: true,
            limit: 5
        },
        resizable: true,
        style: {
            table: {
                border: "1px solid #ccc"
            },
            th: {
                "background-color": "#f4f4f4",
                "text-align": "left"
            },
            td: {
                "padding": "8px",
                "border-bottom": "1px solid #ddd"
            }
        }
    }).render(document.getElementById("grid-container"));
})
  .catch(error => console.error('Error fetching data', error));