SimpleJekyllSearch({
    searchInput: document.getElementById('search-input'),
    resultsContainer: document.getElementById('results-container'),
    json: '/search_cat.json',
    searchResultTemplate: '<li class="list-group-item"><a href="{url}" class="search-link">{title}</a></li>'
  })