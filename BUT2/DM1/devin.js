var inp;
var bouton;
var msg;
var nb;
var cmp;

window.onload = function(){
	init()
}

function init(){
	inp=document.getElementById('input')
	bouton=document.getElementById('valider')
	msg=document.getElementById('message')
	nb=nombre()
	cmp = 0
	bouton.addEventListener("click", verif);
	console.log(nb)
}



function m(){
	bouton.innerHTML = 'nb';
}


function verif(){
	bouton.textContent = "Essayer"
	if (inp.value != "" && Number(inp.value)) {
		++cmp
		if(cmp == 6 && inp.value != nb) {
			msg.textContent = "["+ cmp +"] C'est perdu ! Le nombre Mystère était " + nb
			msg.style.color = "red"
			fin()
		}else{
			if(inp.value < nb){
				msg.textContent = "["+ cmp +"] C'est plus"
				msg.style.color = "blue"
			}
			else if (inp.value > nb) {
				msg.textContent = "["+ cmp +"] C'est moins"
				msg.style.color = "blue"
			}
			else if (inp.value == nb){
				msg.textContent = "["+ cmp +"] C'est gagné ! Le nombre Mystère était bien " + nb
				msg.style.color = "green"
				fin()
			}

		}
	}
	else{
		msg.textContent = "On a dit un nombre entier !!!"
	}

}

function fin(){
	nb=nombre()
	bouton.innerHTML = "Rejouer ? <em>Mettez une nouvelle valeur et clickez !</em>"
	cmp = 0
}


function nombre(){
	nb = Math.floor(Math.random() * 100) + 1
	return nb
}