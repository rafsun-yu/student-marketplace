$(document).ready(function () {

    httpCall("http://localhost/api/admin-pending-sellers.php", updateDom);

    function updateDom(data) {
        var arr = JSON.parse(data);

        if (arr["error"]) {
            alert(arr["error"]);
            return;
        }

        for (i = 0; i < arr.length; i++) {
            var tr = "<tr>";
            tr += "<td>" + arr[i]["id"] + "</td>";
            tr += "<td>" + arr[i]["name"] + "</td>";
            tr += "<td>" + arr[i]["phone_no"] + "</td>";
            tr += "<td>" + arr[i]["address"] + "</td>";
            tr += '<td><button type="button" class="btn btn-link edit-button approve-button" data-seller-id="' + arr[i]["id"] + '">Approve</button>'
                + '<button type="button" class="btn btn-link delete-button reject-button" data-seller-id="' + arr[i]["id"] + '">Reject</button></td>';

            tr += "</tr>";
            $('#mng-table tr:last').after(tr);
        }
    }

    $("#mng-table").on("click", ".approve-button", function () {
        var id = $(this).data("sellerId");

        httpCall("http://localhost/api/admin-approve-seller.php?id=" + id + "&admin_id=" + getCookie("loggedInUserId"), function (data) {
            var obj = JSON.parse(data);

            if (obj["success"]) {
                location.reload();
            } else {
                alert("Error");
            }
        });

    });

    $("#mng-table").on("click", ".reject-button", function () {
        var id = $(this).data("sellerId");

        httpCall("http://localhost/api/admin-reject-seller.php?id=" + id, function (data) {
            var obj = JSON.parse(data);

            if (obj["success"]) {
                location.reload();
            } else {
                alert("Error");
            }
        });
    });

});