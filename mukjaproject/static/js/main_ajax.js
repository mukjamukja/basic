function loadDetail(id="") {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(); {
        if(this.readyState == 4 && this.status == 200) {
            document.getElementById(id).innerHTML = this.responseText;
        };
    };
    xhttp.open("GET", "/store/"+id, true);
    xhttp.send();
}
