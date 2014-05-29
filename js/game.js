
$(document).ready(function(){
	var answer = Math.ceil(Math.random()*100);
var number = [];
var dif, d, i=0, temp;
function diff(a,b){
	return Math.abs(b-a);
}
	alert("the answer is " + answer);
		$('#submit').on('click', function(){
			temp = $('#guess_txt').val();
				if(i==0)
				{
					number[i] = temp;
				}
				else if (i!= 0)
				{
					for(j=0; j<i; j++)
					{
						if(number[j] == temp)
						{
							alert("You already guessed that!");
							break;
						}
						else
						{
							number[i] = temp;
						}
					}
				}
			$("#sofar").text(number);
			d = answer - number[i];
			if(number[i]<1 || number[i] >101)
			{
				$("#status").text("Invalid number! Please enter from 1 to 100.");
				$("#heat").text("");
			}
			else
			{
				dif = diff(number[i],answer);
				if (dif == 0)
				{
					$("#status").text("Congratulations! You guessed correct.")
					$("#heat").text("");
				}
				else if(dif<5)
				{
					$("#status").text("You are Boiling Hot");
					if(d>0)
					{
						$("#heat").text("guess higher");
					}
					else
					{
						$("#heat").text("guess lower");
					}
				}
				else if(dif < 15)
				{
					$("#status").text("You are hot");
					if(d>0)
					{
						$("#heat").text("guess higher");
					}
					else
					{
						$("#heat").text("guess lower");
					}
				}
				else if(dif <35)
				{
					$("#status").text("you are luck warm");
					if(d>0)
					{
						$("#heat").text("guess higher");
					}
					else
					{
						$("#heat").text("guess lower");
					}
				}
				else if(dif <65)
				{
					$("#status").text("You are cold");
					if(d>0)
					{
						$("#heat").text("guess higher");
					}
					else
					{
						$("#heat").text("guess lower");
					}
				}
				else if (dif >= 65)
				{
					$("#status").text("You are freezing cold");
					if(d>0)
					{
						$("#heat").text("guess higher");
					}
					else
					{
						$("#heat").text("guess lower");
					}
				}
			}
			if(i==4)
			{
				$("#status").text('You used up all your chances! The answer is ' + answer + ".");
				$("#heat").text("");
			}
			else
			{
				i++;
			}
				return false;
		})
$("#reset").on('click', function(){
				location.reload();
			})
})