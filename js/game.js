
$(document).ready(function(){
	var answer = Math.ceil(Math.random()*100);
var number = [];
var dif, d;
function diff(a,b){
	return Math.abs(b-a);
}
	alert("the answer is " + answer);
		$('#submit').on('click', function(){
			number = $('#guess_txt').val();
			d = answer - number;
			if(number<1 || number >101)
			{
				alert("Invalid number! Please enter from 1 to 100.");
			}
			else
			{
				dif = diff(number,answer);
				if (dif == 0){
					alert("Congratulations! you are correct.")
				}
				else if(dif<5)
				{
					alert("You are Boiling Hot");
					if(d>0)
					{
						alert("guess higher");
					}
					else
					{
						alert("guess lower");
					}
				}
				else if(dif < 15)
				{
					alert("You are hot");
					if(d>0)
					{
						alert("guess higher");
					}
					else
					{
						alert("guess lower");
					}
				}
				else if(dif <35)
				{
					alert("you are luck warm");
					if(d>0)
					{
						alert("guess higher");
					}
					else
					{
						alert("guess lower");
					}
				}
				else if(dif <65)
				{
					alert("You are cold");
					if(d>0)
					{
						alert("guess higher");
					}
					else
					{
						alert("guess lower");
					}
				}
				else
				{
					alert("You are freezing cold");
					if(d>0)
					{
						alert("guess higher");
					}
					else
					{
						alert("guess lower");
					}
				}
			}
		return false;
		})
})