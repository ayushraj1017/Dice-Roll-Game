

const firstRandomNum=
		Math.floor(Math.random()*6)+1;
		
const firstDiceImage='dice'+
				firstRandomNum+ '.png';

document.querySelectorAll('img')[0].setAttribute
				('src',firstDiceImage);


				

const secondRandomNum=
Math.floor(Math.random()*6)+1;

const secondDiceImage='dice'+
		secondRandomNum+ '.png';

document.querySelectorAll('img')[1].setAttribute
		('src',secondDiceImage);



	if (firstRandomNum>secondRandomNum){

	document.querySelector
	('h1').innerHTML='THE WINNER IS PLAYER 1';
	}	

	else if (firstRandomNum<secondRandomNum){

	document.querySelector
	('h1').innerHTML='THE WINNER IS PLAYER 2';
	}
	else if (firstRandomNum==secondRandomNum)
	{

	document.querySelector
	('h1').innerHTML='ITS A DRAW';
}		