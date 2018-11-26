function myProfile(){ 
var xmlhttp = new XMLHttpRequest(); 
	xmlhttp.onreadystatechange = function(){ 
		if (this.readyState == 4 && this.status == 200){ 

var myObj=JSON.parse(this.responseText); 

document.getElementById("title").innerHTML="<strong>" + myObj.title + "</strong>"; 
document.getElementById("detail").innerHTML=myObj.detail;
document.getElementById("title1").innerHTML="<strong>" + myObj.title1 + "</strong>";
document.getElementById("nameandplace").innerHTML=myObj.university[0].name + " - " + myObj.university[0].place;
document.getElementById("year1").innerHTML=myObj.university[0].year;
document.getElementById("degree1").innerHTML=myObj.university[0].degree;
document.getElementById("name2").innerHTML=myObj.university[1].name;
document.getElementById("year2").innerHTML=myObj.university[1].year;
document.getElementById("nameplaceyear").innerHTML=myObj.university[2].name+" - "+ myObj.university[2].place+" , "+ myObj.university[2].year;
document.getElementById("degree3").innerHTML=myObj.university[2].degree;
document.getElementById("additional1").innerHTML=myObj.university[2].additional;
document.getElementById("other1").innerHTML=myObj.university[2].other;
document.getElementById("title2").innerHTML="<strong>" + myObj.title2 + "</strong>";
document.getElementById("position1andname4").innerHTML=myObj.employer[0].position + " , " + myObj.employer[0].name;
document.getElementById("placeandyear1").innerHTML=myObj.employer[0].place + " , " + myObj.employer[0].year;
document.getElementById("detail1").innerHTML=myObj.employer[0].detail1;
document.getElementById("position2andname5").innerHTML=myObj.employer[1].position+ " , " + myObj.employer[1].name;;
document.getElementById("placeandyear2").innerHTML=myObj.employer[1].place+ " , " + myObj.employer[1].year;
document.getElementById("detail2").innerHTML=myObj.employer[1].detail2;
document.getElementById("last").innerHTML=myObj.last;
document.getElementById("first").innerHTML=myObj.first;
document.getElementById("position").innerHTML=myObj.position;
document.getElementById("detail3").innerHTML="<small>"+myObj.detail3+"</small>";
document.getElementById("title3").innerHTML=myObj.title3;
document.getElementById("firsttosixth").innerHTML="<ul><li>"+myObj.list[0].first1+"</li><li>"+myObj.list[0].second+"</li><li>"+myObj.list[0].third+"</li><li>"+myObj.list[0].fourth+"</li><li>"+myObj.list[0].fifth+"</li><li>"+myObj.list[0].sixth+"</li></ul>";
document.getElementById("title4").innerHTML=myObj.contact[0].description;
document.getElementById("street1").innerHTML=myObj.contact[0].street;
document.getElementById("city1").innerHTML=myObj.contact[0].city;
document.getElementById("country1").innerHTML=myObj.contact[0].country;
document.getElementById("email1").innerHTML=myObj.contact[0].email;
document.getElementById("website1").innerHTML=myObj.contact[0].website;
document.getElementById("telephone1").innerHTML=myObj.contact[0].telephone;
		}		
	};
			xmlhttp.open("GET","./api/myProfile.json",true);
			xmlhttp.send();
}