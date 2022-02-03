// jshint esversion: 8

function search (url) {
  fetch(url)
  .then(response => response.json())
  .then(myjson => {
    console.log(myjson.articles);
    let indexArticle = 0;
    let cards = $('#faizCards');
    cards.html('');
    let toAdd = cards.html();

    myjson.articles.forEach(function (content) {
      let currentArticle = myjson.articles[indexArticle];
      toAdd += `<div class="col-lg-3 px-2">
        <div class="card mb-3">
          <img src="${currentArticle.urlToImage}" class="card-img-top" alt="...">
          <div class="card-body">
            <a href="${currentArticle.url}"><h5 class="card-title">${currentArticle.title}</h5></a>
            <p class="card-text">${currentArticle.description}</p>
            <p class="card-text"><small class="text-muted">source: ${currentArticle.source.name}</small></p>
            <p class="card-text"><small class="text-muted">${currentArticle.publishedAt}</small></p>
          </div>
        </div>
      </div>`;
      indexArticle++;
    }); // loop
    // console.log(toAdd);
    if (myjson.articles.length == 0) {
      $('#searchbarNotif').text('Tidak ada hasil');
    } else {
      $('#searchbarNotif').text('');
      cards.html(toAdd);
    }
  }); // .then
}

let endpoint1 = 'https://newsapi.org/v2/top-headlines?';
let endpoint2 = 'https://newsapi.org/v2/everything?';
let urlHeadline = endpoint1 + 'country=id&apiKey=5b5faf373f0c4c269683b16bece8f00b';
search(urlHeadline);

function searchA () {
  let searchbar = $('#faizSearch').val();
  console.log(searchbar);

  if (searchbar === '') {
    $('#searchbarNotif').text('');
    $('#searchbarNotif').text('searchbar tidak boleh kosong');
  } else {
    $('#searchbarNotif').text('Loading...');
    let edited = searchbar.replace(/ /g, '%20AND%20');
    console.log(edited);
    let urlSearch = endpoint2 + `q=${edited}&apiKey=5b5faf373f0c4c269683b16bece8f00b`;
    search(urlSearch);
  }
}
