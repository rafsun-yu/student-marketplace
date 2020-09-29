$(document).ready(function () {

    // Get balance
    httpCall("http://localhost/api/seller-get-earned-money.php?id=" + getCookie("loggedInUserId"), function (data) {
        var obj = JSON.parse(data);
        $("#balance-amount").text(obj["balance"]);
    });

    // Check whether seller was approved
    httpCall("http://localhost/api/seller-is-approved.php?id=" + getCookie("loggedInUserId"), function (data) {
        var obj = JSON.parse(data);

        if (obj["success"]) {
            $("#add-new-item").prop('disabled', false);
        }
    });

    // Get items
    httpCall("http://localhost/api/seller-get-items.php?id=" + getCookie("loggedInUserId"), updateDom);

    function updateDom(data) {
        var arr = JSON.parse(data);

        if (arr["error"]) {
            alert(arr["error"]);
            return;
        }

        for (i = 0; i < arr.length; i++) {
            var tr = "<tr>";
            tr += "<td>" + arr[i]["item_id"] + "</td>";
            tr += "<td>" + arr[i]["title"] + "</td>";
            tr += "<td>" + arr[i]["price"] + "</td>";
            tr += "<td>" + arr[i]["status"] + "</td>";
            // Edit button
            tr += '<td><button type="button" class="btn btn-link edit-button " data-item-id="' + arr[i]["item_id"] + '">Edit</button></td>'
            // Delete button
            tr += '<td><button type="button" class="btn btn-link delete-button " data-item-id="' + arr[i]["item_id"] + '">Delete</button></td>'

            tr += "</tr>";
            $('#mng-table tr:last').after(tr);
        }
    }

    $("#add-new-item").on("click", function () {
        window.open("modify-item.html", "_self");
    });

    $("#mng-table").on("click", ".delete-button", function () {
        var id = $(this).data("itemId");

        httpCall("http://localhost/api/delete-item.php?id=" + id + "&user_id=" + getCookie("loggedInUserId"), function (data) {
            var obj = JSON.parse(data);

            if (obj["success"]) {
                location.reload();
            } else {
                alert("Error");
            }
        });
    });

    $("#mng-table").on("click", ".edit-button", function () {
        var id = $(this).data("itemId");
        var url = "modify-item.html?id=" + id;
        window.open(url, "_self");
    });
});