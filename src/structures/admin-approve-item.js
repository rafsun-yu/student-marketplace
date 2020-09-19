$(document).ready(function () {

  loadData(updateDom);

  function loadData(callback) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        callback(this.responseText);
      }
    };
    xhttp.open("GET", "admin-approve-item-dummy.json", true);
    xhttp.send();
  }

  function updateDom(data) {
    var arr = JSON.parse(data);

    if (arr["error"]) {
      alert(arr["error"]);
      return;
    }

    for (i = 0; i < arr.length; i++) {
      var tr = "<tr>";
      tr += "<td>" + arr[i]["seller_id"] + "</td>";
      tr += "<td>" + arr[i]["seller_name"] + "</td>";
      tr += "<td>" + arr[i]["item_id"] + "</td>";
      tr += "<td>" + arr[i]["title"] + "</td>";
      tr += "<td>" + arr[i]["desc"] + "</td>";
      tr += "<td>" + arr[i]["category"] + "</td>";
      tr += "<td>" + arr[i]["image_url"] + "</td>";
      tr += "<td>" + arr[i]["price"] + "</td>";
      tr += '<td><button type="button" class="btn btn-link edit-button approve-button" data-item-id="' + arr[i]["item_id"] + '">Approve</button>'
        + '<button type="button" class="btn btn-link delete-button reject-button" data-item-id="' + arr[i]["item_id"] + '">Reject</button></td>';

      tr += "</tr>";
      $('#mng-table tr:last').after(tr);
    }
  }

  $("#mng-table").on("click", ".approve-button", function () {
    var itemId = $(this).data("itemId");
    var url = "...";

    // execute post here

    if (true) { // Replace true with "Whether API returns success"
      $(this).closest('tr').remove();
    } else {
      alert("Error");
    }
  });

  $("#mng-table").on("click", ".reject-button", function () {
    var itemId = $(this).data("itemId");
    var url = "...";

    // execute post here

    if (true) { // Replace true with "Whether API returns success"
      $(this).closest('tr').remove();
    } else {
      alert("Error");
    }
  });

});