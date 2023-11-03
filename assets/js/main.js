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
   * Modals
   * 
   */

  var $modal = $(".modal");
  var $btn = $(".modalBtn");
  var $span = $(".closeModal")

  // When the user clicks the button, open the modal 
  $btn.click(function (e) {
    $modal.css("display", "block");
  });
  
  // When the user clicks on <span> (x), close the modal
  $span.click(function (e) {
    $modal.css("display", "none");
  });
  
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == $modal) {
      $modal.css("display", "none");
    }
  }


    /*
   * 
   * Search
   * 
   */

  function showHideSearchBar($openBtn, $search_div) {
    $openBtn.click(function (e) {
      $search_div.toggleClass("d-none");
    });
  }

  showHideSearchBar($("#searchBtn"), $("#searchDiv"));


});

    /*
   * 
   * Get current date for newsletter form
   * 
   */

document.addEventListener("DOMContentLoaded", function () {
  var element = document.getElementById("current_date");
  var fechaActual = new Date();
  element.value = fechaActual.toISOString(); 
});
