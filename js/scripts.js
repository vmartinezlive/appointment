// //this is the business logic portion
// var add = function(addNumber1, addNumber2) {
//   return addNumber1 + addNumber2;
// };
//
// //this is the interface logic portion
$(document).ready(function() {
  $("form#name").submit(function(event){
    // var serviceNumber = parseInt($("#service").val());
 event.preventDefault();

 var inputName =$("#addName").val();
 var inputDate =$("#addDate").val();
 var inputStartTime =$("#addStartTime").val();
 var inputEndTime=$("#addEndTime").val();

 $("#outputName").text(inputName);
 $("#outputDate").text(inputDate);
 $("#outputStartTime").text(inputStartTime);
 $("#outputEndTime").text(inputEndTime);




 var addNumber1 = parseInt($("#add1").val());
  var addNumber2 = parseInt($("#add2").val());
//
//     var addResult = add(addNumber1, addNumber2);
//     $("#outputAdd").text(addResult);
//   });
// });
