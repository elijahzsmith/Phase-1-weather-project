class Fetch {
    async getCurrent(input)  {
        const myKey = "b7e2af74e156c332bc89ae56e18c355a";

        //make request to url

        const response =  fetch(
            `http://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${myKey}`
        );

        const data = await response.json();

        console.log(data);

        return data;




    }


}
