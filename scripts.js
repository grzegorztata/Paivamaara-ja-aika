function lahtolaskenta () {

	var tanaan = new Date();

	var paiva = tanaan.getDate();
	var kuukausi = tanaan.getMonth() + 1; //0 - tammikuu, 11 - joulukuu
	var vuosi = tanaan.getFullYear();

	var tunti = tanaan.getHours();
		if (tunti<10) tunti = "0" +tunti;
	var minuutti = tanaan.getMinutes();
		if (minuutti<10) minuutti = "0" +minuutti;
	var sekunti = tanaan.getSeconds();
		if (sekunti<10) sekunti = "0" +sekunti;

// innerHtml - wstawianie bez konieczności przeładowania strony
document.getElementById("kello").innerHTML = paiva+"/"+kuukausi+"/"+vuosi+"  "+tunti+":"+minuutti+":"+sekunti;

// co sekundę czas będzie się teraz zmieniał
setTimeout("lahtolaskenta()",1000);
}