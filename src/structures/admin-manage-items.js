$(document).ready(function () {

    httpCall("http://localhost/api/admin-approved-items.php", updateDom);

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
            tr += "<td>" + arr[i]["seller_id"] + "</td>";
            tr += "<td>" + arr[i]["seller_name"] + "</td>";
            // Feature button
            tr += '<td><button type="button" class="btn btn-link edit-button feature-button" data-item-id="' + arr[i]["item_id"] + '">'
                + (arr[i]["featured"] ? "Unfeature" : "Feature") + '</button></td>'
            // Delete button
            tr += '<td><button type="button" class="btn btn-link delete-button " data-item-id="' + arr[i]["item_id"] + '">Delete</button></td>'
            // Reviews button
            tr += '<td><button type="button" class="btn btn-link edit-button reports-button " data-item-id="' + arr[i]["item_id"] + '">Reports</button></td>'

            tr += "</tr>";
            $('#mng-table tr:last').after(tr);
        }
    }

    $("#mng-table").on("click", ".feature-button", function () {
        var id = $(this).data("itemId");
        var base_url = "";
        var currentStat = $(this).text();

        if (currentStat == "Feature")
            base_url = "http://localhost/api/admin-feature-item.php?id=";
        else
            base_url = "http://localhost/api/admin-unfeature-item.php?id=";

        httpCall(base_url + id + "&admin_id=" + getCookie("loggedInUserId"), function (data) {
            var obj = JSON.parse(data);

            if (obj["success"]) {
                location.reload();
            } else {
                alert("Error");
            }
        });
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

    $("#mng-table").on("click", ".reports-button", function () {
        var id = $(this).data("itemId");
        var url = "admin-manage-reports.html?id=" + id;
        window.open(url, "_self");
    });

});