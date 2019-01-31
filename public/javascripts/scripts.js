var alldataRaw = [];
var nowitzki = [];

function appendData(alldataRaw) {
    $.ajax({
        type: "GET",
        url: window.location.href,
        headers: {
            "dataType": "json",
            "contentType": "application/json",
            "accept": "application/json"
        },
        success: function (result) {
            alldataRaw = result;
        },
        async: false
    });
    return alldataRaw;
}

$(document).ready(function () {
    var objData = [];
    itemsData = appendData(objData);
    var itemList = "";
    var modalitemList = "";


    //Items
    itemList = "<div class='row'>";

    for (let i in itemsData) {
        itemList += "<div class='col-lg-4 col-md-6 mb-4 '>" +
            "<div class='card h-100'>" +
            "<a href='#'><img class='card-img-top ' src='" + itemsData[i].item_url + "' alt=''></a>" +
            "<div class='card-body'>" +
            "<h4 class='card-title'>" +
            "<a href='#modal_" + itemsData[i].item_code + "' data-toggle='modal'>" + itemsData[i].item_name + "</a>" +
            "</h4>" +
            "<h5>₱" + itemsData[i].item_price + "</h5>" +
            "<p class='card-text'>" + itemsData[i].item_desc + "</p>" +
            "</div>" +
            "<div class='card-footer'>" +
            "<small class='text-muted '>&#9733; &#9733; &#9733; &#9733; &#9734;</small>" +
            "</div>" +
            "</div>" +
            "</div>";
    }

    itemList += "</div>";

    for (let index in itemsData) {
        //Modal for items
        modalitemList += "<div class='modal fade' id='modal_" + itemsData[index].item_code + "' tabindex='-1' role='dialog' aria-labelledby='exampleModalCenterTitle' aria-hidden='true'>" +
            "<div class='modal-dialog modal-dialog-centered modal-lg' role='document'>" +
            "<div class='modal-content'>" +
            "<div class='modal-header'>" +
            "<h5 class='modal-title' id='exampleModalCenterTitle'>" + itemsData[index].item_name + "</h5>" +
            "<button type='button' class='close' data-dismiss='modal' aria-label='Close'>" +
            "<span aria-hidden='true'>&times;</span>" +
            "</button>" +
            "</div>";

        modalitemList += "<div class='modal-body'>" +
            "<div class='container'>" +
            "<div class='row'>" +
            "<div class='col-lg-6'>" +
            "<img class='img-fluid' src='images/Food/chippy.jpg'>" +
            "</div>" +
            "<div class='col-lg-6'>" +
            "<ul class='list-group'>" +
            "<div class='row'>" +
            "<div class='col-lg-6'>" +
            "<li class='list-group-item no-boarder'><label>Item:</label>" +
            "<h4>" + itemsData[index].item_name + "</h3>" +
            "</li>" +
            "</div>" +
            "<div class='col-lg-6'>" +
            "<li class='list-group-item no-boarder'><label>Quantity:</label>" +
            "<input type='number' value='1' min='0' max='1000' step='1' id='qty_" + itemsData[index].item_code + "'/>" +
            "</li>" +
            "</div>" +
            "</div>" +
            "<li class='list-group-item no-boarder'><label>Description:</label>" +
            "<h6>" + itemsData[index].item_desc + "</h6>" +
            "</li>" +
            "<div class='row'>" +
            "<div class='col-lg-6'>" +
            "<li class='list-group-item no-boarder'><label>Category:</label>" +
            "<h6>" + itemsData[index].item_cate + "</h6>" +
            "</li>" +
            "</div>" +
            "<div class='col-lg-6'>" +
            "<li class='list-group-item no-boarder'><label>Price:</label>" +
            "<h6> ₱" + itemsData[index].item_price + "</h6>" +
            "</li>" +
            "</div>" +
            "</div>" +
            "</ul>" +
            "</div>" +
            "</div>" +
            "</div>" +
            "</div>";

        modalitemList += "<div class='modal-footer'>" +
            "<button type='button' id='addCart_" + itemsData[index].item_code + "' class='btn btn-danger'>Add to Cart</button>" +
            "<button type='button' class='btn btn-primary'>Buy Now</button>" +
            "</div>" +
            "</div>" +
            "</div>" +
            "</div>";
    }

    $("#itemDisplay").append(itemList);
    $("#modalitemDisplay").append(modalitemList);

    if ($.cookie("ITEMS") == undefined) {
        $("#cartCount").text(0);
    } else {
        $("#cartCount").text($.cookie("ITEMS").split("},{").length);
    }

    for (let d in itemsData) {

        $("#addCart_" + itemsData[d].item_code).on('click', function () {

            var setItemCode = itemsData[d].item_code;
            var setItemURL = itemsData[d].item_url;
            var setItemName = itemsData[d].item_name;
            var setItemPrice = itemsData[d].item_price;
            var setItemDesc = itemsData[d].item_desc;
            var setItemCat = itemsData[d].item_cat;
            var setItemSubCat = itemsData[d].item_subcat;
            var setItemQty = $("#qty_" + itemsData[d].item_code).val();
            var cookies = [];

            if ($.cookie("ITEMS") != undefined) {
                cookies = JSON.parse($.cookie("ITEMS"));
            }

            //to check if the item chosen is already existing in cookie
            //for i in cookies, if exist then cookies[i].item_qty+=setItemQty

            // for (let a in cookies) {
            //     if (cookies[a].item_code == setItemQty) {

            //     }
            // }

            cookies.push(({
                "item_code": setItemCode,
                "item_url": setItemURL,
                "item_name": setItemName,
                "item_price": setItemPrice,
                "item_desc": setItemDesc,
                "item_cat": setItemCat,
                "item_qty": setItemQty,
                "item_subcat": setItemSubCat,
            }));
            //console.log(cookies);

            $.cookie("ITEMS", JSON.stringify(cookies))
            location.reload();
            //console.log($.removeCookie("ITEMS"))
            getCoookie(cookies)

        });

    }
});

function getCoookie(objData) {
    nowitzki.push(objData);
    //console.log("Happy!", nowitzki)
}