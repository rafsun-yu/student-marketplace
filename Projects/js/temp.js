
var xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET", "http://localhost/Projects/api/get_items.php", true);
xmlhttp.onload = function () {
    var myObj = JSON.parse(xmlhttp.responseText);
    console.log(myObj);
};
xmlhttp.send();