module.exports = function(saleData){
    var departmentMap = {};
    var departmentName = ' ';
    var max = 0;
    for(var i=0; i<saleData.length; i++){
      var currentMap = saleData[i];
      if(departmentMap[currentMap.department] === undefined){
        departmentMap[currentMap.department] = 0;
      }
        departmentMap[currentMap.department] += currentMap.sales;
      }
    console.log(departmentMap);
  
  for(var departments in departmentMap){
      if(departmentMap[departments] > max){
        max = departmentMap[departments];
        departmentName = departments;
        console.log(departmentName);
      }
    }
    return departmentName;
  }
  
module.exports = function(saleData){
    var dayMap = {};
    var dayName = ' ';
    var max = 0;
    for(var i=0; i<saleData.length; i++){
      var currentMap = saleData[i];
      if(dayMap[currentMap.day] === undefined){
        dayMap[currentMap.day] = 0;
      }
        dayMap[currentMap.day] += currentMap.sales;
      }
    console.log(dayMap);
  
  for(var day in dayMap){
      if(dayMap[day] > max){
        max = dayMap[day];
        dayName = day;
        console.log(dayName);
      }
    }
    return dayName;
  }