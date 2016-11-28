// JavaScript Document

function tab(n){
	var obj=document.getElementById("tabs").getElementsByTagName("li")
	for(var i=0;i<obj.length;i++){
		if(i==n){
			obj[i].className="hoverbg"
			document.getElementById(obj[i].id+"text").style.display="block";
			}
		else{
			obj[i].className=""
		document.getElementById(obj[i].id+"text").style.display="none";
		}
	    }

	}
	

function tab1(n){
	var obj=document.getElementById("else").getElementsByTagName("a")
	for(var i=0;i<obj.length;i++){
		if(i==n){
			obj[i].className="ehover"
			document.getElementById(obj[i].id+"text").style.display="block";
			}
		else{
			obj[i].className=""
		document.getElementById(obj[i].id+"text").style.display="none";
		}
	    }

	}
	
	

