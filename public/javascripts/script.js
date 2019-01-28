var allDataRaw = [];
var allData = [];

function appendData(allDataRaw) {
    $.ajax({
        url: window.location.href,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: 'GET',
        dataType: 'json',
        success: function (data) {
            allDataRaw = data;
        },
        async: false
    });
    return allDataRaw;
}


$(document).ready(function () {
    var objData = [];
    allData = appendData(objData);
    console.log(allData)
    var dataList = "";
    var modalDataList = "";

    if (Cookies.get("ITEMS") == undefined) {
        $("#cartCount").text(0);
    } else {
        $("#cartCount").text(Cookies.get("ITEMS").split("},{").length);
    }

    dataList += "<div class='row'>"

    for (var i in allData) {
        //Index {{BODY}}

        dataList += "<div class='col-lg-4 col-md-6 mb-4'>" +
            "<div class='card h-100'>" +
            "<a href='#'><img class='card-img-top' src='" + allData[i].item_url + "' alt=''></a>" +
            "<div class='card-body'>" +
            "<h4 class='card-title'>" +
            "<a href='#item_" + allData[i].item_code + "' data-toggle='modal'>" + allData[i].item_name + "</a>" +
            "</h4>" +
            "<h5>" + allData[i].item_price + "</h5>" +
            "<p class='card-text'>SAMPLE</p>" +
            "</div>" +
            "<div class='card-footer'>" +
            "<small class='text - muted'>&#9733; &#9733; &#9733; &#9733; &#9734;</small>" +
            "</div>" +
            "</div>" +
            "</div>"

        //Modal Header
        modalDataList += "<div class='modal fade' id='item_" + allData[i].item_code + "'>" +
            "<div class='modal-dialog'>" +
            "<div class='modal-content'>" +

            "<div class='modal-header'>" +
            "<h4 class='modal-title'>" + allData[i].item_name + "</h4>" +
            "<button type='button' class='close' data-dismiss='modal'>&times;</button>" +
            "</div>"

        //Modal body
        modalDataList += "<div class='modal-body'>" +
            "<div class='row'>" +
            "<div class='col-sm-5'>" +
            "<img class='card-img-top' src='" + allData[i].item_url + "' alt=''></a>" +
            "</div>" +
            "<div class='col-sm-7'>" +
            "<form action='payment' method='GET'>" +
            "<div class='row '>" +
            "<div class='col-lg-3 col-md-3 col-3'>" +
            "<label>Quantity</label>" +
            "</div>" +
            "<div class='col-lg-9 col-md-9 col-9'>" +
            "<input type='number' class='mr-3' min='1' max='100' value='1' id='qty_" + allData[i].item_code + "' />" +
            "</div>" +
            "</div>" +
            "<div class='mt-1'>" +
            "<button type='button' class='btn btn-primary btn-sm' id='buyBtn_" + allData[i].item_code + "'>Buy Now</button>" +
            "</div>" +
            "</form>" +
            "</div>" +
            "</div>" +
            "</div>"

        //Modal Footer
        modalDataList += "<div class='modal-footer'>" +
            "<button type='button' id='addToCart_" + allData[i].item_code + "' class='btn btn-default btn-danger btn-sm'>Add to Cart</button>" +
            "</div>" +
            "</div>" +
            "</div>" +
            "</div>"
        //console.log(modalDataList)
    }

    dataList += "</div>"
    $("#itemDisplay").append(dataList);
    $("#modalDisplay").append(modalDataList);

    for (let index in allData) {

        $("#addToCart_" + allData[index].item_code).click(function () {

            var tempItemCode = allData[index].item_code;
            var tempItemURL = allData[index].item_url;
            var tempItemName = allData[index].item_name;
            var tempItemPrice = allData[index].item_price;
            var tempItemDesc = allData[index].item_desc;
            var tempItemCate = allData[index].item_cate;

            var cookies = [Cookies.get("ITEMS")];
            var jsoncookie = "";
            var hasDuplicate = false;
            var fakingIndex = 0;

            if (Cookies.get("ITEMS") == undefined) {
                cookies = [];
            } else {
                cookies = Cookies.get("ITEMS").split(",");
                jsoncookie = JSON.parse("[" + Cookies.get("ITEMS") + "]");
            }

            for (let d in jsoncookie) {
                if (jsoncookie[d].item_code == tempItemCode) {
                    hasDuplicate = true;
                    fakingIndex = d;
                }
            }

            if (hasDuplicate) {
                jsoncookie[fakingIndex].item_qnty = parseInt(jsoncookie[fakingIndex].item_qnty) + parseInt($("#qty_" + tempItemCode).val());
                var tempData = JSON.stringify(jsoncookie).toString().replace("[", "");
                Cookies.set("ITEMS", tempData.replace("]", ""));
            } else {
                cookies.push(JSON.stringify({
                    "item_code": tempItemCode,
                    "item_url": tempItemURL,
                    "item_name": tempItemName,
                    "item_price": tempItemPrice,
                    "item_desc": tempItemDesc,
                    "item_cate": tempItemCate,
                    "item_qnty": $("#qty_" + tempItemCode).val()
                }));

                Cookies.set("ITEMS", cookies.toString());
            }

            $("#cartCount").text(Cookies.get("ITEMS").split("},{").length);
            setCookieInServer();

            alert("Successfully Added to cart!");
        });
    }

});


function sortingFuncASC() {
    allData.sort(function (a, b) {
        return a.item_name.localeCompare(b.item_name);
    });

    var dataList = "";
    var modalDataList = "";

    dataList += "<div class='row'>"

    for (var i in allData) {
        //Index {{BODY}}

        dataList += "<div class='col-lg-4 col-md-6 mb-4'>" +
            "<div class='card h-100'>" +
            "<a href='#'><img class='card-img-top' src='" + allData[i].item_url + "' alt=''></a>" +
            "<div class='card-body'>" +
            "<h4 class='card-title'>" +
            "<a href='#item_" + allData[i].item_code + "' data-toggle='modal'>" + allData[i].item_name + "</a>" +
            "</h4>" +
            "<h5>" + allData[i].item_price + "</h5>" +
            "<p class='card-text'>SAMPLE</p>" +
            "</div>" +
            "<div class='card-footer'>" +
            "<small class='text - muted'>&#9733; &#9733; &#9733; &#9733; &#9734;</small>" +
            "</div>" +
            "</div>" +
            "</div>"

        //Modal Header
        modalDataList += "<div class='modal fade' id='item_" + allData[i].item_code + "'>" +
            "<div class='modal-dialog'>" +
            "<div class='modal-content'>" +

            "<div class='modal-header'>" +
            "<h4 class='modal-title'>" + allData[i].item_name + "</h4>" +
            "<button type='button' class='close' data-dismiss='modal'>&times;</button>" +
            "</div>"

        //Modal body
        modalDataList += "<div class='modal-body'>" +
            "<div class='row'>" +
            "<div class='col-sm-5'>" +
            "<img class='card-img-top' src='" + allData[i].item_url + "' alt=''></a>" +
            "</div>" +
            "<div class='col-sm-7'>" +
            "<form action='payment' method='GET'>" +
            "<div class='row '>" +
            "<div class='col-lg-3 col-md-3 col-3'>" +
            "<label>Quantity</label>" +
            "</div>" +
            "<div class='col-lg-9 col-md-9 col-9'>" +
            "<input type='number' class='mr-3' min='1' max='100' value='1' id='qty_" + allData[i].item_code + "' />" +
            "</div>" +
            "</div>" +
            "<div class='mt-1'>" +
            "<button type='button' class='btn btn-primary btn-sm' id='buyBtn_" + allData[i].item_code + "'>Buy Now</button>" +
            "</div>" +
            "</form>" +
            "</div>" +
            "</div>" +
            "</div>"

        //Modal Footer
        modalDataList += "<div class='modal-footer'>" +
            "<button type='button' id='addToCart_" + allData[i].item_code + "' class='btn btn-default btn-danger btn-sm'>Add to Cart</button>" +
            "</div>" +
            "</div>" +
            "</div>" +
            "</div>"
        //console.log(modalDataList)
    }

    dataList += "</div>"
    $("#itemDisplay").html(dataList);
    $("#modalDisplay").html(modalDataList);

    for (let index in allData) {

        $("#addToCart_" + allData[index].item_code).click(function () {

            var tempItemCode = allData[index].item_code;
            var tempItemURL = allData[index].item_url;
            var tempItemName = allData[index].item_name;
            var tempItemPrice = allData[index].item_price;
            var tempItemDesc = allData[index].item_desc;
            var tempItemCate = allData[index].item_cate;

            var cookies = [Cookies.get("ITEMS")];
            var jsoncookie = "";
            var hasDuplicate = false;
            var fakingIndex = 0;

            if (Cookies.get("ITEMS") == undefined) {
                cookies = [];
            } else {
                cookies = Cookies.get("ITEMS").split(",");
                jsoncookie = JSON.parse("[" + Cookies.get("ITEMS") + "]");
            }

            for (let d in jsoncookie) {
                if (jsoncookie[d].item_code == tempItemCode) {
                    hasDuplicate = true;
                    fakingIndex = d;
                }
            }

            if (hasDuplicate) {
                jsoncookie[fakingIndex].item_qnty = parseInt(jsoncookie[fakingIndex].item_qnty) + parseInt($("#qty_" + tempItemCode).val());
                var tempData = JSON.stringify(jsoncookie).toString().replace("[", "");
                Cookies.set("ITEMS", tempData.replace("]", ""));
            } else {
                cookies.push(JSON.stringify({
                    "item_code": tempItemCode,
                    "item_url": tempItemURL,
                    "item_name": tempItemName,
                    "item_price": tempItemPrice,
                    "item_desc": tempItemDesc,
                    "item_cate": tempItemCate,
                    "item_qnty": $("#qty_" + tempItemCode).val()
                }));

                Cookies.set("ITEMS", cookies.toString());
            }

            $("#cartCount").text(Cookies.get("ITEMS").split("},{").length);
            setCookieInServer();

            alert("Successfully Added to cart!");
        });
    }
}

function sortingFuncDESC() {
    allData.sort(function (a, b) {
        return b.item_name.localeCompare(a.item_name);
    });

    var dataList = "";
    var modalDataList = "";

    dataList += "<div class='row'>"

    for (var i in allData) {
        //Index {{BODY}}

        dataList += "<div class='col-lg-4 col-md-6 mb-4'>" +
            "<div class='card h-100'>" +
            "<a href='#'><img class='card-img-top' src='" + allData[i].item_url + "' alt=''></a>" +
            "<div class='card-body'>" +
            "<h4 class='card-title'>" +
            "<a href='#item_" + allData[i].item_code + "' data-toggle='modal'>" + allData[i].item_name + "</a>" +
            "</h4>" +
            "<h5>" + allData[i].item_price + "</h5>" +
            "<p class='card-text'>SAMPLE</p>" +
            "</div>" +
            "<div class='card-footer'>" +
            "<small class='text - muted'>&#9733; &#9733; &#9733; &#9733; &#9734;</small>" +
            "</div>" +
            "</div>" +
            "</div>"

        //Modal Header
        modalDataList += "<div class='modal fade' id='item_" + allData[i].item_code + "'>" +
            "<div class='modal-dialog'>" +
            "<div class='modal-content'>" +

            "<div class='modal-header'>" +
            "<h4 class='modal-title'>" + allData[i].item_name + "</h4>" +
            "<button type='button' class='close' data-dismiss='modal'>&times;</button>" +
            "</div>"

        //Modal body
        modalDataList += "<div class='modal-body'>" +
            "<div class='row'>" +
            "<div class='col-sm-5'>" +
            "<img class='card-img-top' src='" + allData[i].item_url + "' alt=''></a>" +
            "</div>" +
            "<div class='col-sm-7'>" +
            "<form action='payment' method='GET'>" +
            "<div class='row '>" +
            "<div class='col-lg-3 col-md-3 col-3'>" +
            "<label>Quantity</label>" +
            "</div>" +
            "<div class='col-lg-9 col-md-9 col-9'>" +
            "<input type='number' class='mr-3' min='1' max='100' value='1' id='qty_" + allData[i].item_code + "' />" +
            "</div>" +
            "</div>" +
            "<div class='mt-1'>" +
            "<button type='button' class='btn btn-primary btn-sm' id='buyBtn_" + allData[i].item_code + "'>Buy Now</button>" +
            "</div>" +
            "</form>" +
            "</div>" +
            "</div>" +
            "</div>"

        //Modal Footer
        modalDataList += "<div class='modal-footer'>" +
            "<button type='button' id='addToCart_" + allData[i].item_code + "' class='btn btn-default btn-danger btn-sm'>Add to Cart</button>" +
            "</div>" +
            "</div>" +
            "</div>" +
            "</div>"
        //console.log(modalDataList)
    }

    dataList += "</div>"
    $("#itemDisplay").html(dataList);
    $("#modalDisplay").html(modalDataList);

    for (let index in allData) {

        $("#addToCart_" + allData[index].item_code).click(function () {

            var tempItemCode = allData[index].item_code;
            var tempItemURL = allData[index].item_url;
            var tempItemName = allData[index].item_name;
            var tempItemPrice = allData[index].item_price;
            var tempItemDesc = allData[index].item_desc;
            var tempItemCate = allData[index].item_cate;

            var cookies = [Cookies.get("ITEMS")];
            var jsoncookie = "";
            var hasDuplicate = false;
            var fakingIndex = 0;

            if (Cookies.get("ITEMS") == undefined) {
                cookies = [];
            } else {
                cookies = Cookies.get("ITEMS").split(",");
                jsoncookie = JSON.parse("[" + Cookies.get("ITEMS") + "]");
            }

            for (let d in jsoncookie) {
                if (jsoncookie[d].item_code == tempItemCode) {
                    hasDuplicate = true;
                    fakingIndex = d;
                }
            }

            if (hasDuplicate) {
                jsoncookie[fakingIndex].item_qnty = parseInt(jsoncookie[fakingIndex].item_qnty) + parseInt($("#qty_" + tempItemCode).val());
                var tempData = JSON.stringify(jsoncookie).toString().replace("[", "");
                Cookies.set("ITEMS", tempData.replace("]", ""));
            } else {
                cookies.push(JSON.stringify({
                    "item_code": tempItemCode,
                    "item_url": tempItemURL,
                    "item_name": tempItemName,
                    "item_price": tempItemPrice,
                    "item_desc": tempItemDesc,
                    "item_cate": tempItemCate,
                    "item_qnty": $("#qty_" + tempItemCode).val()
                }));

                Cookies.set("ITEMS", cookies.toString());
            }

            $("#cartCount").text(Cookies.get("ITEMS").split("},{").length);
            setCookieInServer();

            alert("Successfully Added to cart!");
        });
    }
}

function priceLow() {
    allData.sort(function (a, b) {
        return a.item_price.localeCompare(b.item_price);
    });

    var dataList = "";
    var modalDataList = "";

    dataList += "<div class='row'>"

    for (var i in allData) {
        //Index {{BODY}}

        dataList += "<div class='col-lg-4 col-md-6 mb-4'>" +
            "<div class='card h-100'>" +
            "<a href='#'><img class='card-img-top' src='" + allData[i].item_url + "' alt=''></a>" +
            "<div class='card-body'>" +
            "<h4 class='card-title'>" +
            "<a href='#item_" + allData[i].item_code + "' data-toggle='modal'>" + allData[i].item_name + "</a>" +
            "</h4>" +
            "<h5>" + allData[i].item_price + "</h5>" +
            "<p class='card-text'>SAMPLE</p>" +
            "</div>" +
            "<div class='card-footer'>" +
            "<small class='text - muted'>&#9733; &#9733; &#9733; &#9733; &#9734;</small>" +
            "</div>" +
            "</div>" +
            "</div>"

        //Modal Header
        modalDataList += "<div class='modal fade' id='item_" + allData[i].item_code + "'>" +
            "<div class='modal-dialog'>" +
            "<div class='modal-content'>" +

            "<div class='modal-header'>" +
            "<h4 class='modal-title'>" + allData[i].item_name + "</h4>" +
            "<button type='button' class='close' data-dismiss='modal'>&times;</button>" +
            "</div>"

        //Modal body
        modalDataList += "<div class='modal-body'>" +
            "<div class='row'>" +
            "<div class='col-sm-5'>" +
            "<img class='card-img-top' src='" + allData[i].item_url + "' alt=''></a>" +
            "</div>" +
            "<div class='col-sm-7'>" +
            "<form action='payment' method='GET'>" +
            "<div class='row '>" +
            "<div class='col-lg-3 col-md-3 col-3'>" +
            "<label>Quantity</label>" +
            "</div>" +
            "<div class='col-lg-9 col-md-9 col-9'>" +
            "<input type='number' class='mr-3' min='1' max='100' value='1' id='qty_" + allData[i].item_code + "' />" +
            "</div>" +
            "</div>" +
            "<div class='mt-1'>" +
            "<button type='button' class='btn btn-primary btn-sm' id='buyBtn_" + allData[i].item_code + "'>Buy Now</button>" +
            "</div>" +
            "</form>" +
            "</div>" +
            "</div>" +
            "</div>"

        //Modal Footer
        modalDataList += "<div class='modal-footer'>" +
            "<button type='button' id='addToCart_" + allData[i].item_code + "' class='btn btn-default btn-danger btn-sm'>Add to Cart</button>" +
            "</div>" +
            "</div>" +
            "</div>" +
            "</div>"
        //console.log(modalDataList)
    }

    dataList += "</div>"
    $("#itemDisplay").html(dataList);
    $("#modalDisplay").html(modalDataList);

    for (let index in allData) {

        $("#addToCart_" + allData[index].item_code).click(function () {

            var tempItemCode = allData[index].item_code;
            var tempItemURL = allData[index].item_url;
            var tempItemName = allData[index].item_name;
            var tempItemPrice = allData[index].item_price;
            var tempItemDesc = allData[index].item_desc;
            var tempItemCate = allData[index].item_cate;

            var cookies = [Cookies.get("ITEMS")];
            var jsoncookie = "";
            var hasDuplicate = false;
            var fakingIndex = 0;

            if (Cookies.get("ITEMS") == undefined) {
                cookies = [];
            } else {
                cookies = Cookies.get("ITEMS").split(",");
                jsoncookie = JSON.parse("[" + Cookies.get("ITEMS") + "]");
            }

            for (let d in jsoncookie) {
                if (jsoncookie[d].item_code == tempItemCode) {
                    hasDuplicate = true;
                    fakingIndex = d;
                }
            }

            if (hasDuplicate) {
                jsoncookie[fakingIndex].item_qnty = parseInt(jsoncookie[fakingIndex].item_qnty) + parseInt($("#qty_" + tempItemCode).val());
                var tempData = JSON.stringify(jsoncookie).toString().replace("[", "");
                Cookies.set("ITEMS", tempData.replace("]", ""));
            } else {
                cookies.push(JSON.stringify({
                    "item_code": tempItemCode,
                    "item_url": tempItemURL,
                    "item_name": tempItemName,
                    "item_price": tempItemPrice,
                    "item_desc": tempItemDesc,
                    "item_cate": tempItemCate,
                    "item_qnty": $("#qty_" + tempItemCode).val()
                }));

                Cookies.set("ITEMS", cookies.toString());
            }

            $("#cartCount").text(Cookies.get("ITEMS").split("},{").length);
            setCookieInServer();

            alert("Successfully Added to cart!");
        });
    }
}

function priceHigh() {
    allData.sort(function (a, b) {
        return b.item_price.localeCompare(a.item_price);
    });

    var dataList = "";
    var modalDataList = "";

    dataList += "<div class='row'>"

    for (var i in allData) {
        //Index {{BODY}}

        dataList += "<div class='col-lg-4 col-md-6 mb-4'>" +
            "<div class='card h-100'>" +
            "<a href='#'><img class='card-img-top' src='" + allData[i].item_url + "' alt=''></a>" +
            "<div class='card-body'>" +
            "<h4 class='card-title'>" +
            "<a href='#item_" + allData[i].item_code + "' data-toggle='modal'>" + allData[i].item_name + "</a>" +
            "</h4>" +
            "<h5>" + allData[i].item_price + "</h5>" +
            "<p class='card-text'>SAMPLE</p>" +
            "</div>" +
            "<div class='card-footer'>" +
            "<small class='text - muted'>&#9733; &#9733; &#9733; &#9733; &#9734;</small>" +
            "</div>" +
            "</div>" +
            "</div>"

        //Modal Header
        modalDataList += "<div class='modal fade' id='item_" + allData[i].item_code + "'>" +
            "<div class='modal-dialog'>" +
            "<div class='modal-content'>" +

            "<div class='modal-header'>" +
            "<h4 class='modal-title'>" + allData[i].item_name + "</h4>" +
            "<button type='button' class='close' data-dismiss='modal'>&times;</button>" +
            "</div>"

        //Modal body
        modalDataList += "<div class='modal-body'>" +
            "<div class='row'>" +
            "<div class='col-sm-5'>" +
            "<img class='card-img-top' src='" + allData[i].item_url + "' alt=''></a>" +
            "</div>" +
            "<div class='col-sm-7'>" +
            "<form action='payment' method='GET'>" +
            "<div class='row '>" +
            "<div class='col-lg-3 col-md-3 col-3'>" +
            "<label>Quantity</label>" +
            "</div>" +
            "<div class='col-lg-9 col-md-9 col-9'>" +
            "<input type='number' class='mr-3' min='1' max='100' value='1' id='qty_" + allData[i].item_code + "' />" +
            "</div>" +
            "</div>" +
            "<div class='mt-1'>" +
            "<button type='button' class='btn btn-primary btn-sm' id='buyBtn_" + allData[i].item_code + "'>Buy Now</button>" +
            "</div>" +
            "</form>" +
            "</div>" +
            "</div>" +
            "</div>"

        //Modal Footer
        modalDataList += "<div class='modal-footer'>" +
            "<button type='button' id='addToCart_" + allData[i].item_code + "' class='btn btn-default btn-danger btn-sm'>Add to Cart</button>" +
            "</div>" +
            "</div>" +
            "</div>" +
            "</div>"
        //console.log(modalDataList)
    }

    dataList += "</div>"
    $("#itemDisplay").html(dataList);
    $("#modalDisplay").html(modalDataList);

    for (let index in allData) {

        $("#addToCart_" + allData[index].item_code).click(function () {

            var tempItemCode = allData[index].item_code;
            var tempItemURL = allData[index].item_url;
            var tempItemName = allData[index].item_name;
            var tempItemPrice = allData[index].item_price;
            var tempItemDesc = allData[index].item_desc;
            var tempItemCate = allData[index].item_cate;

            var cookies = [Cookies.get("ITEMS")];
            var jsoncookie = "";
            var hasDuplicate = false;
            var fakingIndex = 0;

            if (Cookies.get("ITEMS") == undefined) {
                cookies = [];
            } else {
                cookies = Cookies.get("ITEMS").split(",");
                jsoncookie = JSON.parse("[" + Cookies.get("ITEMS") + "]");
            }

            for (let d in jsoncookie) {
                if (jsoncookie[d].item_code == tempItemCode) {
                    hasDuplicate = true;
                    fakingIndex = d;
                }
            }

            if (hasDuplicate) {
                jsoncookie[fakingIndex].item_qnty = parseInt(jsoncookie[fakingIndex].item_qnty) + parseInt($("#qty_" + tempItemCode).val());
                var tempData = JSON.stringify(jsoncookie).toString().replace("[", "");
                Cookies.set("ITEMS", tempData.replace("]", ""));
            } else {
                cookies.push(JSON.stringify({
                    "item_code": tempItemCode,
                    "item_url": tempItemURL,
                    "item_name": tempItemName,
                    "item_price": tempItemPrice,
                    "item_desc": tempItemDesc,
                    "item_cate": tempItemCate,
                    "item_qnty": $("#qty_" + tempItemCode).val()
                }));

                Cookies.set("ITEMS", cookies.toString());
            }

            $("#cartCount").text(Cookies.get("ITEMS").split("},{").length);
            setCookieInServer();

            alert("Successfully Added to cart!");
        });
    }
}