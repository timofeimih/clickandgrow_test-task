$(document).ready(function ($) {
  $(".item-big__select").change(function () {
    var parent = $(this).parents(".items-big__item");
    parent.find("IMG").hide();
    parent.find("IMG[data-id='" + $(this).val() + "']").fadeIn();
    parent
      .find(".price-holder")
      .html($(this).find(":selected").attr("data-price"));
    parent.find(".items-big__image").removeClass("media--hover-effect");
  });

  $(".items-small__order SELECT").change(function () {
    var parent = $(this).parents(".items-small__item");
    parent
      .find(".price-holder")
      .html($(this).find(":selected").attr("data-price"));
  });

  $(document).on("click", ".scroll-to-collection", function (event) {
    event.preventDefault();
    $("html,body").animate(
      {
        scrollTop: $("#items-big").offset().top,
      },
      "slow"
    );
  });
});
