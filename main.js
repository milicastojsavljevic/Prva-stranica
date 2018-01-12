var text = '**SREĆNA NOVA GODINA!**';
var stext = text.split('');

var scroll = document.getElementById('scroll');
var loop; //ovde je undefinie, ali u funkciji joj je dodeljena vrednost
function start(){
	if(stext.length > 0){
		//if(nasArray.length[i] > 0){
		scroll.innerHTML += stext.shift(); //+= ynaci dodavacemo svaki put kad se ponovi funkcija , shift/prvo slovo
		loop = setTimeout(start,200); //ovim cu ponovo pozvati funkciju, ali mormad da je deklariserm
	}else {i++
	}
}
start();
