// document.getElementById('')
// document.querySelector('#id, .class')
//$('.class').html()

$(document).ready(function () {
  // document.getElementByID('test')
  // document.querySelector('#test')
  $('#test').html('<b>This is Test</b>');

  // read
  let text = $('#test').html() + '. Hello jQuery!';
  $('#test').text(text); // .innerText

  $('#test').attr('data-id', 123);

  // addEventListener
  let colors = ['red', 'green', 'blue'];
  let currentIndex = 0;
  let previousIndex = 0;
  $('button[type=button]').on('click', function () {
    //console.log('button clicked!')

    if ($('#test').hasClass(colors[previousIndex])) {
      $('#test').removeClass(colors[previousIndex]);
    }
    $('#test').addClass(colors[currentIndex++]);
    previousIndex = currentIndex - 1;
    if (currentIndex >= 3) currentIndex = 0;
  });

  $('#test')
    .text('New text')
    .addClass('test2')
    .css('font-size', '36px')
    .css('font-weight', 'bold');

  $('button[type=reset]').on('click', function () {
    /*
        $('#test').fadeOut(3000, function(){
            alert('Hello ')
            console.log('effect finished')
        }) // show()
        */
    /*
       $('#test').animate({
               left:"+=10px",
               width:"+=10px",
               height:"+=10px"
        })
        */
    // fetch -> CORS
    // xmlHTTPrequest
  });

  $('#btn').on('click', function () {
    // jQuery
    /*
        $.ajax({
            url: "content.html",
            success: function( result ) {
              $("#test").html(result);
            },
            error: function(err, errorMessage, errObject) {
                console.log('err: ', err)
                console.log('errorMessage: ', errorMessage)
                console.log('errObject: ', errObject)
            }
        });
        */
    let url = 'content.html';
    fetch(url)
      .then((response) => response.text())
      /*
        function(response){ 
            return response.json()
        }
        */
      .then((data) => {
        console.log(data);
        $('#test').html(data);
      });
  });
});
