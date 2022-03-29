//inst classes//

const ft = new Fetch();
const ui = new UI();

//add event listener//

const search = document.getElementById("searchUser");
const button = document.getElementById("submit");

button.addEventListener("click", () => {
    const currentVal = search.value

    ft.getCurrent(currentVal).then((data) => {
        //call a ui method
        ui.populateUI(data);
        //call aveToLs
        ui.saveToLs(data);
    });
});