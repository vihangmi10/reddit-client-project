let UpdateDropdownLink = (function(){
  let url = window.location.href;
  if(url.includes('hot')) {
    document.querySelector('.hot').style.backgroundColor = '#e77e7e';
  }else if(url.includes('top')) {
    console.log(document.querySelector('.top'));
    document.querySelector('.top').style.backgroundColor = '#e77e7e';
  } else {
    document.querySelector('.random').style.backgroundColor = '#e77e7e';
  }
  console.log(url);
})();

let pagination = (function() {
    let url = window.location.href;
    let previousContainer = document.querySelector('.previousBtn');
    let nextContainer = document.querySelector('.nextBtn');
    let previous = document.querySelector('.previousBtn > a');
    let next = document.querySelector('.nextBtn > a');
    let page,currentPage;
    if(window.location.href.includes('random')) {
        nextContainer.style.display = 'none';
    }

    if(window.location.href.includes('page')) {
         page = window.location.href.split('&')[1];
         currentPage = parseInt(page.split('=')[1]);
         let nextPage = currentPage + 1;
         next.href = next.dataset.href + '&page=' + nextPage;
    } else {
        previousContainer.style.display = 'none';
        next.href = next.dataset.href + '&page=2';
    }

    if(currentPage > 1 ) {
        previousContainer.style.display = 'block';
        let previousPage = currentPage - 1;
        previous.href = next.dataset.href + '&page=' + previousPage;
    } else {
        previousContainer.style.display = 'none';
    }
})();

