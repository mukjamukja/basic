function loadDetail(store_id="") {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
            document.getElementById("store_detail").innerHTML = this.responseText;
            document.getElementById("myModal").style.display = "block";
        };
    };
    xhttp.open("GET", "/store/"+store_id+"/", true);
    xhttp.send();
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

var modal = document.getElementById("myModal");
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
    modal.style.display = "none";
    }
}