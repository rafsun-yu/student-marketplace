$(document).ready(function () {

    loadData(updateDom);

    function loadData(callback) {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                callback(this.responseText);
            }
        };
        xhttp.open("GET", "admin-manage-reports-dummy.json", true);
        xhttp.send();
    }

    function updateDom(data) {
        var arr = JSON.parse(data);

        if (arr["error"]) {
            alert(arr["error"]);
            return;
        }

        $("h1").text("Reports of " + arr["title"] + " (#" + arr["item_id"] + ")");

        arr = arr["reports"];
        for (i = 0; i < arr.length; i++) {
            var tr = "<tr>";
            tr += "<td>" + arr[i]["report_id"] + "</td>";
            tr += "<td>" + arr[i]["buyer_id"] + "</td>";
            tr += "<td>" + arr[i]["buyer_name"] + "</td>";
            tr += "<td>" + arr[i]["message"] + "</td>";
            // Delete button
            tr += '<td><button type="button" class="btn btn-link delete-button " data-report-id="' + arr[i]["report_id"] + '">Delete</button></td>'

            tr += "</tr>";
            $('#mng-table tr:last').after(tr);
        }
    }


    $("#mng-table").on("click", ".delete-button", function () {
        var id = $(this).data("reportId");
        // Post url
        var url = "...";
        // execute post here

        if (true) { // Replace true with "Whether API returns success"
            $(this).closest('tr').remove();
        } else {
            alert("Error");
        }
    });

});