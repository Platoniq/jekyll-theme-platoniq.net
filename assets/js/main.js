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
});
