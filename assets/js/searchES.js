SimpleJekyllSearch({
  searchInput: document.getElementById('search-input'),
  resultsContainer: document.getElementById('results-container'),
  json: '/search_es.json',
  searchResultTemplate: '<li class="list-group-item"><a href="{url}" class="search-link">{title}</a></li>'
})