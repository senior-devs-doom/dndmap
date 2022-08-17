var guys=document.getElementsByClassName("sorting_1");
var i=0
var elmo=setInterval(function(){
	if(i>guys.length)
		clearInterval(elmo);
	else
		guys[i].click();
	i++
}, 50);


var file=`var vault=[
`
for(var i=0;i<=guys.length;i++){
				var data=guys[i].parentNode.nextSibling.children[0].children[0];
				var name =guys[i].innerHTML;
				var j=0;
				var gotime=false;
				if(data.getElementsByClassName("faded")[0].children[1].innerHTML=="0")
					var initiative="d20+"+data.getElementsByClassName("faded")[0].children[1].innerHTML;
				else
					var initiative="d20"+data.getElementsByClassName("faded")[0].children[1].innerHTML;
				var ac="";
				while(j<=data.getElementsByTagName("span")[1].innerHTML.length){
					if(isNumeric(data.getElementsByTagName("span")[1].innerHTML[j])){
						ac+=data.getElementsByTagName("span")[1].innerHTML[j];
					}
					j++
				}
				j=0;
				var hp=""
				while(j<=data.getElementsByTagName("span")[2].innerHTML.length){
					if(data.getElementsByTagName("span")[2].innerHTML[j]==")")
						break;
					if(gotime)
						hp+=data.getElementsByTagName("span")[2].innerHTML[j];
					if(data.getElementsByTagName("span")[2].innerHTML[j]=="(")
						gotime=true;
					j++
				}
				var type=data.getElementsByTagName("i")[2].innerHTML;
				file+='["'+name+'","'+initiative+'","'+ac+'","'+hp+'","'+type+'"," "," ';
				file+=`"],
`
}
file+="];";


var file2 = new File([file], "MonsterVault.js");
var url = URL.createObjectURL(file2);
var a = document.createElement("a");
a.href = url;
a.download = "MonsterVault.js";
a.innerHTML='hi';
document.body.appendChild(a);
a.click();
a.remove();


/////

var passed=0;
var deaded=0;
var lived=0;
var alll=0;
var roll1=0;
var roll2=0;
var inwhilel=0;
var inwhilew=0;
for(var i=1;i<=10000000;i++){
	while(inwhilew!=3 && inwhilel!=3){
	roll1=Math.floor(Math.random() * (21 - 1)) + 1;
	roll2=Math.floor(Math.random() * (21 - 1)) + 1;
	if(roll1>=10||roll2>=10){
		lived++
		if(roll1==20||roll2==20){
			passed++;
			break;
		}
		inwhilew++
	}
	else{
		if(roll1==1&&roll2==20)
			inwhilel+=2;	
		else
		inwhilel++;	
	}
	alll++;
	}
	if(inwhilew==3)
		passed++;
	deaded++;
	var inwhilel=0;
	var inwhilew=0;
}
console.log("rolled:"+alll,"| passed death saves: "+lived,"| 'unconsious:'"+deaded,"| regained consiousness:"+passed);
console.log("passing death save:"+lived/alll*100+"%",'| standing up again: '+passed/deaded*100+"%");