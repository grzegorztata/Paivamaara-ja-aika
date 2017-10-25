function lahtolaskenta () {

	var tanaan = new Date();

	var paiva = tanaan.getDate();
	var kuukausi = tanaan.getMonth() + 1; //0 - tammikuu, 11 - joulukuu
	var vuosi = tanaan.getFullYear();

	var tunti = dzisiaj.getHours();
		if (godzina<10) godzina = "0" +godzina;
	var minuutti = dzisiaj.getMinutes();
		if (minuta<10) minuta = "0" +minuta;
	var sekunti = dzisiaj.getSeconds();
		if (sekunda<10) sekunda = "0" +sekunda;

// innerHtml - wstawianie bez konieczności przeładowania strony
document.getElementById("zegar").innerHTML = dzien+"/"+miesiac+"/"+rok+"  "+godzina+":"+minuta+":"+sekunda;

// co sekundę czas będzie się teraz zmieniał
setTimeout("odliczanie()",1000);
}