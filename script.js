var label=document.createElement("label");
label.setAttribute("for","Firstname");
label.innerHTML="Firstname";

var br1=document.createElement("br");

var input=document.createElement("input");
input.setAttribute("type","Firstname");
input.setAttribute("id","Firstname");

var br2=document.createElement("br");

var label1=document.createElement("label");
label1.setAttribute("for","Middlename");
label1.innerHTML="Middlename";

var br3=document.createElement("br");

var input1=document.createElement("input");
input1.setAttribute("type","Middlename");
input1.setAttribute("id","Middlename");

var br4=document.createElement("br");

var label2=document.createElement("label");
label2.setAttribute("for","Lastname");
label2.innerHTML="Lastname";

var br5=document.createElement("br");

var input2=document.createElement("input");
input2.setAttribute("type","Lastname");
input2.setAttribute("id","Lastname");

var br6=document.createElement("br");

var label3=document.createElement("label");
label3.setAttribute("for","Phonenumber");
label3.innerHTML="Phonenumber";

var br7=document.createElement("br");

var input3=document.createElement("input");
input3.setAttribute("type","Phonenumber");
input3.setAttribute("id","Phonenumber");

var br8=document.createElement("br");




var button=document.createElement("button");

button.innerHTML="Click Me";
document.body.append(label,br1,input,br2,label1,br3,input1,br4,label2,br5,input2,br6,label3,br7,input3,br8,button);