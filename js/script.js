
document.getElementById('button').addEventListener('click', fetchUserData);

function fetchUserData() {
    fetch('https://randomuser.me/api/')
        .then(response => {
            if (!response.ok) {
                throw new Error('Error' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
           let hero = document.getElementById("hero");
           hero.style.backgroundImage = "../heropandajs.jpg";
            displayUserData(data.results[0]);
        })
        .catch(error => {
            console.error('Det är ett problem med fetch operation', error);
        });
}

/*Funktionen displayUserData(user) uppdaterar en specifik del av webbsidan (user-info div) med information om en användare som hämtats från ett API.
Genom att använda template literals och DOM-manipulering visar den en användares bild, kön, e-post, telefonnummer och namn*/

function displayUserData(user) {
    const userInfoDiv = document.getElementById('user-info');
    userInfoDiv.innerHTML = `
        <img src="${user.picture.large}" alt="User Picture" class="user-image">
        <div class="user-detail"><strong>Kön:</strong> ${user.gender}</div>
        <div class="user-detail"><strong>Email:</strong> ${user.email}</div>
        <div class="user-detail"><strong>Telefon:</strong> ${user.phone}</div>
        <div class="user-detail"><strong>Namn:</strong> ${user.name.first} ${user.name.last}</div>
    `;
}