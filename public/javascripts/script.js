if (Cookies.get("ITEMS") == undefined) {
    $("#cartCount").text(0);
} else {
    $("#cartCount").text(Cookies.get("ITEMS").split("},{").length);
}



for (let index in jsonObj) {

    $("#addToCart_" + jsonObj[index].item_code).click(function () {

        var tempItemCode = jsonObj[index].item_code;
        var tempItemURL = jsonObj[index].item_url;
        var tempItemName = jsonObj[index].item_name;
        var tempItemPrice = jsonObj[index].item_price;
        var tempItemDesc = jsonObj[index].item_desc;
        var tempItemCate = jsonObj[index].item_cate;

        var cookies = [Cookies.get("ITEMS")];

        if (Cookies.get("ITEMS") == undefined) {
            cookies = [];
        } else {
            cookies = Cookies.get("ITEMS").split(",");
        }


        cookies.push(JSON.stringify({
            "item_code": tempItemCode,
            "item_url": tempItemURL,
            "item_name": tempItemName,
            "item_price": tempItemPrice,
            "item_desc": tempItemDesc,
            "item_cate": tempItemCate,
            "item_qnty": $("#qty_" + tempItemCode).val()
        }));

        //console.log(cookies.toString())
        Cookies.set("ITEMS", cookies.toString());

        //console.log(cookies.toString());


        $("#cartCount").text(Cookies.get("ITEMS").split("},{").length);
        setCookieInServer();


    });
}

setCookieInServer();


function setCookieInServer() {
    $.ajax({
        type: "POST",
        dataType: "JSON",
        contentType: "application/json",
        data: JSON.stringify({
            cookie: Cookies.get("ITEMS")
        }),
        url: "/getCookie",
        success: function (result) {

        },
        error: function (errVal) {


        }
    });
}