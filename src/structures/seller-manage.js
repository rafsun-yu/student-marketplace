$(document).ready(function () {

    loadData(updateDom);

    function loadData(callback) {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                callback(this.responseText);
            }
        };
        xhttp.open("GET", "seller-manage-dummy.json", true);
        xhttp.send();
    }

    function updateDom(data) {
        var obj = JSON.parse(data);

        if (obj["error"]) {
            alert(obj["error"]);
            return;
        }

        $("#balance-amount").text(obj["balance"]);

        var arr = obj["items"];
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
        window.open("seller-item.html", "_self");
    });

    $("#mng-table").on("click", ".delete-button", function () {
        var id = $(this).data("itemId");
        var url = "...";

        // execute post here

        if (true) { // Replace true with "Whether API returns success"
            // Open URL with manage reviews
            console.log(id);
        } else {
            alert("Error.");
        }
    });

    $("#mng-table").on("click", ".edit-button", function () {
        var id = $(this).data("itemId");
        var url = "seller-item.html?id=" + id;
        window.open(url, "_self");
    });

});