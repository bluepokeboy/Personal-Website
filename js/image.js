function imchange() {
        if (document.getElementById("change").getAttribute('src') =="../img/lewa.jpg")
        {
            document.getElementById("change").src = "../img/kohli.jpg";
            document.getElementById("changetxt").innerHTML = "Kohli is one of the greatest batsman in the world with over 27,000 runs scored.";
        }
        else if (document.getElementById("change").getAttribute('src') =="../img/kohli.jpg")
        {
            document.getElementById("change").src = "../img/music.jpg";
            document.getElementById("changetxt").innerHTML = "Music is food for the soul.";
        }
        else if (document.getElementById("change").getAttribute('src') =="../img/music.jpg")
        {
            document.getElementById("change").src = "../img/coding.jpg";
            document.getElementById("changetxt").innerHTML = "Eat<br>Sleep<br>Code<br>Repeat<br>";
        }
        else if (document.getElementById("change").getAttribute('src') =="../img/coding.jpg")
        {
            document.getElementById("change").src = "https://staticdelivery.nexusmods.com/mods/1151/images/thumbnails/36452/36452-1544921242-525281819.png";
            document.getElementById("changetxt").innerHTML = "Subscribe to Pewdiepie!!!";
        }
        else if (document.getElementById("change").getAttribute('src') =="https://staticdelivery.nexusmods.com/mods/1151/images/thumbnails/36452/36452-1544921242-525281819.png")
        {
            document.getElementById("change").src = "../img/lewa.jpg";
            document.getElementById("changetxt").innerHTML = "Bayern Munich is one of the greatest teams in Europe with 5 UEFA Champions league trophies and 26 Bundesliga's";
        }
    }
