$(document).ready(function () {

  httpCall("http://localhost/api/admin-pending-items.php", updateDom);

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
    var id = $(this).data("itemId");

    httpCall("http://localhost/api/admin-approve-item.php?id=" + id + "&admin_id=" + getCookie("loggedInUserId"), function (data) {
      var obj = JSON.parse(data);

      if (obj["success"]) {
        location.reload();
      } else {
        alert("Error");
      }
    });

  });

  $("#mng-table").on("click", ".reject-button", function () {
    var id = $(this).data("itemId");

    httpCall("http://localhost/api/admin-reject-item.php?id=" + id, function (data) {
      var obj = JSON.parse(data);

      if (obj["success"]) {
        location.reload();
      } else {
        alert("Error");
      }
    });
  });

});