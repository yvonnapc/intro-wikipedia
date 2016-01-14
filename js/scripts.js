$(document).ready(function() {
  $ ("#click").click(function(){
    alert("This is an alert function");
  })

  $('form#blanks').submit(function(event){
      var nameInput = $("input#name").val();
      $('.nameOutput').append(nameInput);
      event.preventDefault();
  });


});
