function hentKoeStudent(koe_id){

        if (window.XMLHttpRequest)
        {// code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp=new XMLHttpRequest();
        }
        else
        {// code for IE6, IE5
            xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange=function(){
            if (xmlhttp.readyState==4 && xmlhttp.status==200){
                document.getElementById("page-wrapper").innerHTML=xmlhttp.responseText;
            }

        }
        xmlhttp.open("POST","/koOversikt.htm",true);
        xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xmlhttp.send("koeid=" + koe_id);
}

function setKoeId(num){
    document.getElementById('hiddenKoe').value =num;
}

var delemnenr;
var emnenr;
function mysubmit() {
    var delemneNrField = document.getElementById("delemneNr");
    var emneNrField = document.getElementById("emneNr");
    delemneNrField.value=delemnenr;
    emneNrField.value=emnenr;
    }
function sjekkAktivKoe(status){
    alert(status);
    if(status){
        document.getElementById("stillIKo").disabled = false;
    }
}
function startStoppKoe(koe_id){
    if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    }
    else {// code for IE6, IE5

        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {

    }
    xmlhttp.open("POST", "/StartStoppKoe.htm", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send("KoeIndex=" + koe_id);
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
    }
    oppdaterKoe();
}
function settIKo(koe_id){
    if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    }
    else {// code for IE6, IE5

        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {

    }
    alert(emne_id);
    xmlhttp.open("POST", "/settIKo.htm", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send("KoeIndex=" + koe_id);

    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
    }
}
function StillIKo(emne_id){
    if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    }
    else {// code for IE6, IE5

        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {

    }
    xmlhttp.open("POST", "StillIKo", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send("KoeIndex=" + emne_id);

    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
    }
    oppdaterKoe();
}
function oppdaterKoe(){
    //TODO TED
}
//Fjernet visadmin, statuskoe og var statusknapp.


