const apiKey = "ecfee61f";
const baseUrl = "http://www.omdbapi.com/?apikey=" + apiKey;

let name, filmDetails, nameList, year, poster;


async function GetData() {
    const name = document.getElementById("movieName").value;
    const year = document.getElementById("movieYear").value;

    if (name === "" ) {
        alert("Film adı girilmesi zorunludur")
        return
    }

    const url = `${baseUrl}&t=${name}&y=${year}`;

    const response = await fetch(url);
    const data = await response.json();

    filmDetails = data;

    console.log(data);

    document.querySelector("#filmDetails").innerHTML +=
    `   <div class="container">
            <div class="card" style="text-align: center;">
                <div class="card-header bg-dark" style="color: white;"> Movie Name : ${data.Title}</div>
                <div class="card-body"> <img src="${data.Poster}">  </div>
                <div class="card-footer bg-dark" style="color: white;"> Movie Year : ${data.Year} </div>
                <div class="card-footer " > Director of Movie : ${data.Director} </div>
            </div>
        </div>
    `

    document.getElementById("movieName").value = "";
    document.getElementById("movieYear").value = "";
}


