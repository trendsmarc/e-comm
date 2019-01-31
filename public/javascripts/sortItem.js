function sortASC() {
    itemsData.sort(function (a, b) {
        return a.item_name.localeCompare(b.item_name);
    });
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
            "<input type='number' value='1' min='0' max='1000' step='1'/>" +
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
            "<button type='button' class='btn btn-danger'>Add to Cart</button>" +
            "<button type='button' class='btn btn-primary'>Buy Now</button>" +
            "</div>" +
            "</div>" +
            "</div>" +
            "</div>";
    }

    $("#itemDisplay").html(itemList);
    $("#modalitemDisplay").html(modalitemList);
}


function sortDESC() {
    itemsData.sort(function (a, b) {
        return b.item_name.localeCompare(a.item_name);
    });
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
            "<h5>$" + itemsData[i].item_price + "</h5>" +
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
            "<input type='number' value='1' min='0' max='1000' step='1'/>" +
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
            "<h6>" + itemsData[index].item_price + "</h6>" +
            "</li>" +
            "</div>" +
            "</div>" +
            "</ul>" +
            "</div>" +
            "</div>" +
            "</div>" +
            "</div>";

        modalitemList += "<div class='modal-footer'>" +
            "<button type='button' id='addCart' class='btn btn-danger'>Add to Cart</button>" +
            "<button type='button' class='btn btn-primary'>Buy Now</button>" +
            "</div>" +
            "</div>" +
            "</div>" +
            "</div>";
    }

    $("#itemDisplay").html(itemList);
    $("#modalitemDisplay").html(modalitemList);
}

function priceLow() {
    itemsData.sort(function (a, b) {
        return a.item_price.localeCompare(b.item_price);
    });
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
            "<h5>$" + itemsData[i].item_price + "</h5>" +
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
            "<input type='number' value='1' min='0' max='1000' step='1'/>" +
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
            "<h6>" + itemsData[index].item_price + "</h6>" +
            "</li>" +
            "</div>" +
            "</div>" +
            "</ul>" +
            "</div>" +
            "</div>" +
            "</div>" +
            "</div>";

        modalitemList += "<div class='modal-footer'>" +
            "<button type='button' class='btn btn-danger'>Add to Cart</button>" +
            "<button type='button' class='btn btn-primary'>Buy Now</button>" +
            "</div>" +
            "</div>" +
            "</div>" +
            "</div>";
    }

    $("#itemDisplay").html(itemList);
    $("#modalitemDisplay").html(modalitemList);
}

function priceHigh() {
    itemsData.sort(function (a, b) {
        return b.item_name.localeCompare(a.item_name);
    });
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
            "<h5>$" + itemsData[i].item_price + "</h5>" +
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
            "<input type='number' value='1' min='0' max='1000' step='1'/>" +
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
            "<h6>" + itemsData[index].item_price + "</h6>" +
            "</li>" +
            "</div>" +
            "</div>" +
            "</ul>" +
            "</div>" +
            "</div>" +
            "</div>" +
            "</div>";

        modalitemList += "<div class='modal-footer'>" +
            "<button type='button' class='btn btn-danger'>Add to Cart</button>" +
            "<button type='button' class='btn btn-primary'>Buy Now</button>" +
            "</div>" +
            "</div>" +
            "</div>" +
            "</div>";
    }

    $("#itemDisplay").html(itemList);
    $("#modalitemDisplay").html(modalitemList);
}