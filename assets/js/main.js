console.log("jekyll-theme-platoniq.net");

$(document).ready(function () {
  function initializeMenu($openBtn, $closeBtn, $menu) {
    $openBtn.click(function (e) {
      $menu.toggleClass("d-none");
    });
    $closeBtn.click(function (e) {
        $menu.toggleClass("d-none");
      });
  }

  initializeMenu($("#side-menu-btn"), $("#close-side-menu"), $("#side-menu"));

    /*
   * 
   * Search
   * 
   */

    
/*
  SimpleJekyllSearch({
    searchInput: document.getElementById('search-input'),
    resultsContainer: document.getElementById('results-container'),
    json: '/search.json',
    searchResultTemplate: templateMiddleware,
    noResultsText: 'No results found',
    templateMiddleware: function(prop, value, template){

      arr_locale = value.split('/')
      arr_href = window.location.href.split("/")

      if (prop === 'url' && value.split('/')[1] != arr_href[3]) {
        return value.replace('/', ' ')
      } else if (prop === 'url' && value.split('/')[1] == arr_href[3]) {
        template= '<li class="list-group-item"><a href="{url}" class="search-link">{title}</a></li>'
      }
      return template
    }
  })
*/



  function showHideSearchBar($openBtn, $search_div) {
    $openBtn.click(function (e) {
      $search_div.toggleClass("d-none");
    });
  }

  showHideSearchBar($("#searchBtn"), $("#searchDiv"));


});
