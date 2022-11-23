document.getElementById("cv").addEventListener("click", ajaxCV);


function ajaxCV() {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange= function() 
    {
        if (this.readyState == 4 && this.status == 200) 
        {
            console.debug("Reponse OK");
            document.getElementById("cvPage").innerHTML = this.responseText;
        }
    };
    console.debug("Envoi de la requete GET");
    xhttp.open("GET","cv.html");
    xhttp.send();
}


document.getElementById("Conec").addEventListener("click", ajaxconnexion);


function ajaxconnexion() {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange= function() 
    {
        if (this.readyState == 4 && this.status == 200) 
        {
            console.debug("Reponse OK");
            document.getElementById("cvPage").innerHTML = this.responseText;
        }
    };
    console.debug("Envoi de la requete GET");
    xhttp.open("GET","formulaire_connexion.html");
    xhttp.send();
}

document.getElementById("Inscrip").addEventListener("click", ajaxinscription);


function ajaxinscription() {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange= function() 
    {
        if (this.readyState == 4 && this.status == 200) 
        {
            console.debug("Reponse OK");
            document.getElementById("cvPage").innerHTML = this.responseText;
          
document.getElementById("form_inscription").addEventListener('submit', validationFormulaireInscription);

document.getElementById("mdp1").addEventListener('input', validationDuMotDePasse);
        }
    };
    console.debug("Envoi de la requete GET");
    xhttp.open("GET","formulaire_inscription.html");
    xhttp.send();
}
window.onload = (ajaxmeteo)

function ajaxmeteo() {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange= function() 
    {
        if (this.readyState == 4 && this.status == 200) 
        {
            var jsonmeteo = this.responseText;
            var jsonmeteo1 = JSON.parse(jsonmeteo);
            
            document.getElementById("meteo").innerHTML =" <span>Visibility :" +  jsonmeteo1.visibility + "</span><span>temps :" + 
                                                        jsonmeteo1.main.temp + "°C </span><span>Vitesse du vent :" + 
                                                        jsonmeteo1.wind.speed+ "</span><span> Visibility:"+ jsonmeteo1.visibility+"</span><span>"+ "<img src='http://openweathermap.org/img/wn/"+jsonmeteo1.weather[0].icon+"@2x.png'</img></span>";

        }
    };
    xhttp.open("GET","https://api.openweathermap.org/data/2.5/weather?q=paris&appid=2c53627e2c15513f0c62bae5dc45c530&units=metric");
    xhttp.send();
}



