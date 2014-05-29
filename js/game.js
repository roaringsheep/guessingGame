
$(document).ready(function(){
	var answer = Math.ceil(Math.random()*100);
	var number = [];
	var dif=[], d, i=0, temp;
	function diff(a,b){
		return Math.abs(b-a);
	}
	alert(answer);
	$('#submit').on('click', function(){
		temp = $('#guess_txt').val();

			if(i==0)
			{
				number[i] = temp;
			}
			else
			{
				for(j=0; j<i; j++)
				{
					repeat = number[j] == temp;
					if(repeat==true)
					{
						alert("You already guessed that!");
						i--;
						break;
					}
				}
				if(repeat==false)
				{
					number[j] = temp;
				}
			}
		$("#sofar").text(number);
		d = answer - number[i];
		if(number[i]<1 || number[i] >101)
		{
			alert("Invalid number! Please enter from 1 to 100.");
			i--;
		}
		else
		{
			dif[i] = diff(number[i],answer);
			if (dif[i] == 0)
			{
				$("#status").text("Congratulations! You guessed it right.")
			}
			else if(dif[i] <5)
			{
				$("#status").text("You are Boiling Hot. ");
			}
			else if(dif[i] < 15)
			{
				$("#status").text("You are hot. ");
			}
			else if(dif[i] <35)
			{
				$("#status").text("you are luck warm. ");
			}
			else if(dif[i] <65)
			{
				$("#status").text("You are cold. ");
			}
			else
			{
				$("#status").text("You are freezing cold. ");
			}
			if(dif[i]!=0)
			{
				if(d>0)
				{
					$("#status").append("Guess higher.");
				}
				else
				{
					$("#status").append("Guess lower.");
				}
				if(dif[i]<=dif[i-1])
				{
					$('#status').append(" You are getting Hotter!")
				}
				else if (i != 0)
				{
					$('#status').append(" You are getting colder :'(")
				}
			}
		}
		if(i==4)
		{
				if (dif[i] == 0)
			{
				$("#status").text("Congratulations! You guessed it right.")
			}
			else
			{		
				$("#status").text('You used up all your chances! The answer is ' + answer + ".");
				$('#guess_txt').val("");
			}
		}
		else
		{
			i++;
			$('#guess_txt').val("");
		}
		return false;
	})
	$("#reset").on('click', function()
	{
		location.reload();
	})
})