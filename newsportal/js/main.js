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
    
    //let url = 'content.html';
    /*
    fetch(url)
      .then((response) => response.text())
      .then((data) => {
        console.log(data);
        $('#test').html(data);
      });
      */
  });


  // jQuery
  let urlTemplate = 'http://newsapi.org/v2/everything?q={keyword}&from=2021-01-08&sortBy=publishedAt&apiKey=4a5de1e54b304bf2909af12bf979c242';
  
  let url1 = urlTemplate.replace('{keyword}', 'tesla')
  runNewsQuery(url1)

  $('button[type="submit"]').on('click', event => {
      // otmenjaet rodnoje deistvie
      event.preventDefault()
      let url2 = urlTemplate.replace('{keyword}', $('#apiKeyword').val())
      runNewsQuery(url2)
  })
});

function runNewsQuery(link) {
  $.ajax({
    url: link, //"content.html",
    this
    error: function(err, errorMessage, errObject) {
        console.log('err: ', err)
        console.log('errorMessage: ', errorMessage)
        console.log('errObject: ', errObject)
    }
  });
}




class News{
  #data

  news = {
    title:'',
    description:'',
    date:'',
    image:null,
    author:''
  }

  constructor(data){
    this.#data = data
  }

  parseData(){

    if (this.#data.title != null && this.#data.title.toString().trim().length > 0) this.news.title = this.#data.title
    if (this.#data.description != null && this.#data.description.toString().trim().length > 0) this.news.description = this.#data.description
    if (this.#data.urlToImage != null && this.#data.urlToImage.toString().trim().length > 0) this.news.image = this.#data.urlToImage
    if (this.#data.publishedAt != null && this.#data.publishedAt.toString().trim().length > 0) this.news.date = this.#data.publishedAt
    if (this.#data.author != null && this.#data.author.toString().trim().length > 0) this.news.author = this.#data.author
  }

  generateAllNewsCards(){

    let cardsHTML = ''
    if (Array.isArray(this.#data.articles) && this.#data.articles.length > 0){
      
      this.#data.articles.forEach(element => {
        // 1 
        this.#data = element
        // 2
        this.parseData()
        // 3
        cardsHTML += this.generateNewsCard()

      });
    }
    return cardsHTML
  }

  generateNewsCard(){
    //createElement()
    let card = `<div class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
    <div class="col p-4 d-flex flex-column position-static">
      <strong class="d-inline-block mb-2 text-success" title="${ this.news.author }">${ this.news.author.substr(0, 25) }</strong>
      <h3 class="mb-0" title="${ this.news.title }" >${ this.news.title.substr(0, 10) }...</h3>
      <div class="mb-1 text-muted">${ this.news.date }</div>
      <p class="mb-auto" title="${ this.news.description }">${ this.news.description.substr(0, 50) }...</p>
      <a href="#" class="stretched-link">Continue reading</a>
    </div>
    <div class="col-auto d-lg-block">
      ${ this.generateImage() }
    </div>
  </div>`

    return card
  }

  generateImage(){

    $("<img/>")
    .on('load', function() { console.log("image loaded correctly"); })
    .on('error', function() { console.log("error loading image"); })
    .attr("src", this.news.image);

    if (this.news.image != null) return `<img width="250" height="250" src="${ this.news.image }">`

    return ''
  }

}
