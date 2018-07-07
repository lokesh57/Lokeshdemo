function getfile(file,callback){
  var xhr = new XMLHttpRequest();
  xhr.overrideMimeType("application/json");
  xhr.open("GET",file,true);
  xhr.onreadystatechange = function(){
    if(xhr.readyState === 4 && xhr.status == "200"){
      callback(xhr.responseText);
    }
  };
  xhr.send(null);
}
getfile("data.json",function(text){
  var data = JSON.parse(text);
  console.log(data);
  career(data.career);
  education(data.education);
  skills(data.skills);
})
var childTwo=document.querySelector(".childTwo");
function career(careerInfo){
  var careerHeading=document.createElement("h2");
  childTwo.appendChild(careerHeading);
  careerHeading.textContent="career Objective:";
  var ch=document.createElement("p");
  ch.textContent=careerInfo.info;
  childTwo.appendChild(ch);
}
function education(edu){
  var eduHeading=document.createElement("h3");
  eduHeading.textContent="Education:";
  childTwo.appendChild(eduHeading);

  var careerHeading=document.createElement("h3");
  childTwo.appendChild(careerHeading);

  var eduTable=document.createElement("table");
  eduTable.border="1";
  var tr1="<tr><td>Degree</td><td>Institute</td><td>Data</td><td></tr>";
  eduTable.innerHTML=tr1;

  //var tr2="";
  for(var i=0;i<edu.length;i++){
  tr1+="<tr><td>"+edu[i].degree+"</td><td>"+edu[i].institute+"</td><td>"+edu[i].data+"</td></tr>";
   eduTable.innerHTML=tr1;
  }

  childTwo.appendChild(eduTable);
}
 function skills(skil){
  var u1=document.createElement("u1");
  childTwo.appendChild(u1);
  for(var i=0;i<skil.length;i++){
    var li=document.createElement("li");
    li.textContent=skil[i].title+":"+skil[i].content;
    u1.appendChild(li);
  }
 }
