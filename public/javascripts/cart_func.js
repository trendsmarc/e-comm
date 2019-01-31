displayCart()

function displayCart() {
    var sample = JSON.parse($.cookie("ITEMS"));
    console.log("HERE", sample)

    var cartItemList = "";
    cartItemList = "<div class='table-responsive'>" +
        "<table class='table table-hover'>" +
        "<thead class='thead-dark'>" +
        "<tr>" +
        "<th scope='col'>ITEM</th>" +
        "<th scope='col'>PRICE</th>" +
        "<th scope='col'>QUANTITY</th>" +
        "<th scope='col'>TOTAL</th>" +
        "<th scope='col'>ACTIONS</th>" +
        "</tr>" +
        "</thead>";


    for (var b in sample) {
        cartItemList += "<tbody>" +
            "<tr>" +
            "<th scope='row'>'" + sample[b].item_name + "'</th>" +
            "<td>Sample</td>" +
            "<td>Sample</td>" +
            "<td>Sample</td>" +
            "<td><button class'btn btn-primary btn-md' onclick='cartDel()'>Delete</button></td>" +
            "</tr>" +
            "</tbody>";
    }

    cartItemList += "</table>" +
        "</div>" +
        "</div>";

    $("#cartItem").append(cartItemList);

}

function cartDel() {
    alert("SUCCESS");
}