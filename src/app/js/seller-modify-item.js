$(document).ready(function () {

    // Checks if add new item or edit item.
    var url = new URL(window.location);
    var id = url.searchParams.get("id");
    if (id) // If Edit (not Add new) (Check using parameter in url)
        loadData(updateDom);

    function loadData(callback) {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                callback(this.responseText);
            }
        };
        // Pass the id here
        xhttp.open("GET", "seller-item-dummy.json", true);
        xhttp.send();
    }

    function updateDom(data) {
        var obj = JSON.parse(data);

        if (obj["error"]) {
            alert(obj["error"] + "You will be redirected to homepage.");
            window.open("seller-manage.html", "_self");
            return;
        }

        $("#title").val(obj["title"]);
        $("h1").text("Edit " + obj["title"]);
        $("#desc").val(obj["desc"]);
        $("#cat").val(obj["category"]);
        $("#img").val(obj["image_url"]);
        $("#price").val(obj["price"]);
    }

    $("form").submit(function (e) {
        e.preventDefault();
    });

    $(document).on('submit', 'form', function (e) {
        var obj = {};

        obj["title"] = $("#title").val();
        obj["desc"] = $("#desc").val();
        obj["category"] = $("#cat").val();
        obj["image_url"] = $("#img").val();
        obj["price"] = $("#price").val();

        console.log(obj);

        $("#submit-button").prop("disabled", true);

        // Submit the obj

        // If succeed go back to home
        if (false) {
            alert("Item queued for review. You will be redirected to homepage.");
            window.open("seller-manage.html", "_self");
        }
        else {
            alert("An error...");
            $("#submit-button").prop("disabled", false);
        }
    });

});