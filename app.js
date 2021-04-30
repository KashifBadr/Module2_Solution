// (function () {
//     'use strict';
    
//     angular.module('ShoppingListCheckOff', [])
//     .controller('ToBuyController', ToBuyController)
//     .controller('AlreadyBoughtController', AlreadyBoughtController)
//     .service('ShoppingListCheckOffService', ShoppingListCheckOffService);
   
    
    
//     ToBuyController.$inject = ['ShoppingListCheckOffService'];
//     function ToBuyController(ShoppingListCheckOffService) {
//       var toBuyList  = this;

//       // toBuyList .itemName= "";
//       // toBuyList .itemQuantity= "";

//       toBuyList.items = ShoppingListCheckOffService.getToBuyItems();

//       toBuyList.buyItem = function(itemIndex){
      
//       ShoppingListCheckOffService.buyItem(itemIndex);
      
//     };
 
//     }

//     AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
//     function AlreadyBoughtController(ShoppingListCheckOffService) {
//       var alreadyBougthList  = this;
//       alreadyBougthList.items = ShoppingListCheckOffService.getAlreadyBoughtListItems();
//      }
    
//     function ShoppingListCheckOffService(){

//         var service = this;
//         var ToBuyitems = [
//           { name: "cookies", quantity: 10 },
//           { name: "Pepsi", quantity: 8 },
//           { name: "Water Bottles", quantity: 4 },
//           { name: "Mango", quantity: 6 },
//           { name: "Orange", quantity: 3 }
//         ];

//         var alreadyBoughtItems  = [];

//         service.buyItem = function(itemIndex) {
//           var item = ToBuyitems[itemIndex];

//           alreadyBoughtItems.push(item);
//           ToBuyitems.splice(itemIndex, 1);
//       };

//       service.getToBuyItems = function() {
//           return ToBuyitems;
//       };

//       service.getAlreadyBoughtListItems = function() {
//           return alreadyBoughtItems;
//       };
//     }


// })();
    
!function(){"use strict";function t(t){this.items=t.getToBuyItems(),this.buyItem=function(e){t.buyItem(e)}}function e(t)
{this.items=t.getAlreadyBoughtListItems()}angular.module("ShoppingListCheckOff",[]).controller("ToBuyController",t).controller("AlreadyBoughtController",e).service("ShoppingListCheckOffService",
function(){var t=[{name:"cookies",quantity:10},{name:"Pepsi",quantity:8},{name:"Water Bottles",quantity:4},{name:"Mango",quantity:6},{name:"Orange",quantity:3}],
e=[];this.buyItem=function(i){var n=t[i];e.push(n),t.splice(i,1)},this.getToBuyItems=function(){return t},
this.getAlreadyBoughtListItems=function(){return e}}),t.$inject=["ShoppingListCheckOffService"],e.$inject=["ShoppingListCheckOffService"]}();