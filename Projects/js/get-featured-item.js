var xmlhttp = new XMLHttpRequest();
xmlhttp.open(
  "GET",
  "https://localhost/Projects/api/get_featured_items.php",
  true
);
xmlhttp.onload = function () {
  var array = JSON.parse(xmlhttp.responseText);
  var div = "";
  var carousel = "";
  carousel += `<div class="carousel-item active">
                    <img class="d-block w-100" src="${array[0]["image_url"]}" alt="First slide">
                </div>`;
  for(let i =1; i< array.length; i++){
    carousel+=`<div class="carousel-item"><img class="d-block w-100" src="${array[i]["image_url"]}"></div>`;
  }
  
  for (let i = 0; i < array.length; i++) {
    
    div += `<div class="item-card">
                <div class="feature-img">
                    <img src="${array[i]["image_url"]}"
                    alt="">
                </div>
                <h4>${array[i]["title"]}</h4>
                <p><span>${array[i]["price"]}</span> Tk.</p>
                <button class="addcart"> Add to Cart</button>
            </div>`;
  }

  document.getElementById("carousel-inner").innerHTML = carousel;
  document.getElementById("feature").innerHTML = div;
  console.log(carousel);
};
xmlhttp.send();
