module.exports = function(itemList, threshold){
    console.log(itemList);
    var lItems = [];
    for(var i=0; i<itemList.length; i++){
      var listItems = itemList[i];
      if(listItems.qty > threshold){
        lItems.push(listItems);
      }
    }
    return lItems;
  }
  