var xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET", "http://localhost/Projects/api/get_items.php", true);
xmlhttp.onload = function () {
  var array = JSON.parse(xmlhttp.responseText);
  var div = "";

  for (let i = 0; i < array.length; i++) {
    div += `<div class="col-md-3">
                <div class="item-display">
                    <div class="item-image">
                        <img src="${array[i]["image_url"]}">
                    </div>
                    <h1 style="margin-top: 20px; font-size: 130%;">${array[i]["title"]}</h1>
                    <p>${array[i]["description"]}</p>
                    <p><span>${array[i]["price"]}</span> Tk.</p>
                    <button class="addcart">Add to cart</button>
                </div>
            </div>`;
  }

  document.getElementById("row").innerHTML = div;
};
xmlhttp.send();
