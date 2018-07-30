module.exports = function(itemList){
    console.log(itemList);
    var max = 20;
    var itemsMap = [];
    for(var i=0; i< itemList.length; i++){
      var shoppingList = itemList[i];
      if(shoppingList.qty > max){
        itemsMap.push(shoppingList);
      }
    }
    return itemsMap;
  }