var xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET", "https://localhost/Projects/api/get_carousel_items.php", true);
xmlhttp.onload = function () {
  var array = JSON.parse(xmlhttp.responseText);
  var div = `<div class="carousel-item active">
                <img class="d-block w-100" src="${array[0]["image_url"]}" alt="First slide">
            </div>`;

  for (let i = 1; i < array.length; i++) {
    div += `<div class="carousel-item">
                <img class="d-block w-100" src="${array[i]["image_url"]}">
            </div>`;
  }

  document.getElementById("carousel-inner").innerHTML = div;
};
xmlhttp.send();
