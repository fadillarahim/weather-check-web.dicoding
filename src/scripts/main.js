
function main(){
    const buttonSearch = document.querySelector('#searchButtonElement');

    buttonSearch.addEventListener('click', () => {
        const inputKeyword = document.querySelector('#searchElement');

        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputKeyword.value}&appid=b578cffbc19e48933e718b9e1e28a2cc&units=metric`)
            .then(response => response.json())
            .then(response =>{
                let result = document.querySelector('.result');

                result.innerHTML = `
                <div class="card card-result">
                <h2 style="margin-bottom: 15px;">${response.name}, ${response.sys.country}</h2>
                <h3> </h3>
                <h5><span class="temp">${response.main.temp}°С</span> <span class="temp">${response.weather[0].description}</span></h5>
                <p style="margin-bottom: 17px;">Temperature from ${response.main.temp_min}°С to ${response.main.temp_max}°С</p>
                <h5>Wind Speed : ${response.wind.speed} m/s</h5>
                <h5 style="margin-bottom: 17px;">Clouds : ${response.clouds.all}%</h5>
                <h4 style="color: #97D2EC;">Geo Coordinates : [${response.coord.lat}, ${response.coord.lon}]</h4>
                </div>
                `; 
            })
            .catch(() =>{
                const inputKeyword = document.querySelector('#searchElement');
                let result = document.querySelector('.result');
                result.innerHTML = `
                <div class="eror-message"> 
                <h4 style="margin-bottom: 15px;"> Upps Sorry, I don't know a place with that name :(</h4>
                </div>
                `;
            });
    inputKeyword.value = null;
    });
}

export default main;



