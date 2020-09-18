$(document).ready(function () {

    loadData(updateDom);

    function loadData(callback) {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                callback(this.responseText);
            }
        };
        xhttp.open("GET", "admin-manage-items-dummy.json", true);
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
        // Post url
        var url = "...";
        // execute post here

        if (true) { // Replace true with "Whether API returns success"
            var currentStat = $(this).text();
            $(this).text((currentStat == "Feature") ? "Unfeature" : "Feature");
        } else {
            alert("Error");
        }
    });

    $("#mng-table").on("click", ".delete-button", function () {
        var id = $(this).data("itemId");
        // Post url
        var url = "...";
        // execute post here

        if (true) { // Replace true with "Whether API returns success"
            $(this).closest('tr').remove();
        } else {
            alert("Error");
        }
    });

    $("#mng-table").on("click", ".reports-button", function () {
        var id = $(this).data("itemId");
        var url = "admin-manage-reports.html?id=" + id;
        window.open(url, "_self");
    });

});