




  $(document).ready(function(){  
    $("#show").click(function(e){
        $("#demo").slideToggle();
      });
  });

 function search(){
  $(document).ready(function(){  
    $.get('https://my-json-server.typicode.com/Ablaymillen/json/games', function (games, status) {
        console.log(status);
        let searchmenu = $('#searchmenu').val();
        for(var j=0; j < games.length; j++){
            if(searchmenu != $('#category').text()) {
                    $( "#gamecard" ).remove();
                    }  
                }
          
                })
            
        })
    
    }

  
 
    $(document).ready(function(){
        $.get('https://my-json-server.typicode.com/Ablaymillen/json/games', function (games, status) {
            console.log(status);
            for(var i = 0 ; i < games.length; i++){ 
                $( "#section2" ).append( '<div class="col-lg-4 col-md-6 mb-4 slide h-100" id="gamecard">'+
                '<div class="shop-item">'+ '<a href="item'+i+'.html">'+
                  '<img class="shop-item-image" style="width: 100%;object-fit:contain"'+ 'src=' + games[i].image + '></a>' +
                  '<div class="card-body">'+       
                         '<a class="btn card-title"  data-toggle="collapse" data-target="#demo" style="font-weight:700;color:#007bff;font-size:20px"> </a>' +'<span class="shop-item-title">' + games[i].name + '</span>'+
                          '<div class="shop-item-details" id="demo">' + games[i].description +     
                          '</div><hr /><span class="shop-item-price" style="margin-right:10px">$'+ games[i].price + '</span>'+ '<button class="btn btn-primary shop-item-button" id="add" type="button">ADD TO CART</button>'+             
                  '</div><div class="card-footer"><h4 id="category">' + games[i].category +  '</h4><small>&#9733; &#9733; &#9733; &#9733; &#9734;</small>'+
                  '</div></div></div>');}

                  if (document.readyState == 'loading') {
                    document.addEventListener('DOMContentLoaded', ready)
                } else {
                    ready()
                }
                
                function ready() {
                    var removeCartItemButtons = document.getElementsByClassName('btn-danger')
                    for (var i = 0; i < removeCartItemButtons.length; i++) {
                        var button = removeCartItemButtons[i]
                        button.addEventListener('click', removeCartItem)
                    }
                
                    var quantityInputs = document.getElementsByClassName('cart-quantity-input')
                    for (var i = 0; i < quantityInputs.length; i++) {
                        var input = quantityInputs[i]
                        input.addEventListener('change', quantityChanged)
                    }
                
                    var addToCartButtons = document.getElementsByClassName('shop-item-button')
                    for (var i = 0; i < addToCartButtons.length; i++) {
                        var button = addToCartButtons[i]
                        button.addEventListener('click', addToCartClicked)
                    }
                
                    document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked)
                }
                
                function purchaseClicked() {
                    alert('Thank you for your purchase')
                    var cartItems = document.getElementsByClassName('cart-items')[0]
                    while (cartItems.hasChildNodes()) {
                        cartItems.removeChild(cartItems.firstChild)
                    }
                    updateCartTotal()
                }
                
                function removeCartItem(event) {
                    var buttonClicked = event.target
                    buttonClicked.parentElement.parentElement.remove()
                    updateCartTotal()
                }
                
                function quantityChanged(event) {
                    var input = event.target
                    if (isNaN(input.value) || input.value <= 0) {
                        input.value = 1
                    }
                    updateCartTotal()
                }
                
                function addToCartClicked(event) {
                    var button = event.target
                    var shopItem = button.parentElement.parentElement
                    var title = shopItem.getElementsByClassName('shop-item-title')[0].innerText
                    var price = shopItem.getElementsByClassName('shop-item-price')[0].innerText
                    var imageSrc = shopItem.getElementsByClassName('shop-item-image')[0].src
                    addItemToCart(title, price, imageSrc)
                    updateCartTotal()
                }
                
                function addItemToCart(title, price, imageSrc) {
                    var cartRow = document.createElement('div')
                    cartRow.classList.add('cart-row')
                    var cartItems = document.getElementsByClassName('cart-items')[0]
                    var cartItemNames = cartItems.getElementsByClassName('cart-item-title')
                    for (var i = 0; i < cartItemNames.length; i++) {
                        if (cartItemNames[i].innerText == title) {
                            alert('This item is already added to the cart')
                            return
                        }
                    }
                    var cartRowContents = `
                        <div class="cart-item cart-column">
                            <img class="cart-item-image" src="${imageSrc}" width="100" height="100">
                            <span class="cart-item-title">${title}</span>
                        </div>
                        <span class="cart-price cart-column">${price}</span>
                        <div class="cart-quantity cart-column">
                            <input class="cart-quantity-input" type="number" value="1">
                            <button class="btn btn-danger" type="button">REMOVE</button>
                        </div>`
                    cartRow.innerHTML = cartRowContents
                    cartItems.append(cartRow)
                    cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem)
                    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)
                }
                
                function updateCartTotal() {
                    var cartItemContainer = document.getElementsByClassName('cart-items')[0]
                    var cartRows = cartItemContainer.getElementsByClassName('cart-row')
                    var total = 0
                    for (var i = 0; i < cartRows.length; i++) {
                        var cartRow = cartRows[i]
                        var priceElement = cartRow.getElementsByClassName('cart-price')[0]
                        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
                        var price = parseFloat(priceElement.innerText.replace('$', ''))
                        var quantity = quantityElement.value
                        total = total + (price * quantity)
                    }
                    total = Math.round(total * 100) / 100
                    document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total
                }
                
                   
             })

            });
 

           $(document).ready  (function Hello(){
             
              if($("#inputrows").val() == 1){
                $( "#section2" ).append("<h1>HELLLLLLLLOOOOO</h1>")
              }
              if($("#inputrows").val() == 2){
                $( "#section2" ).append("<h1>HELLLLLLLLOOOOO</h1>")
              }





           });


           
           function error() {
            alert('You must log in first!!!')}