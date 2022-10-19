function sub(){
    var Name = document.getElementById("Name");
    var Email = document.getElementById("Email");
    var output = document.getElementById("output");
    var out = document.getElementById("out");
    output.style.color = "red";
    out.style.color = "red";
    output.innerHTML = "Please Enter your name";
    out.innerHTML = "Please Enter your Email";
    Name.style.border = " 1px red solid";
    Email.style.border = "1px red solid";
    
    
}