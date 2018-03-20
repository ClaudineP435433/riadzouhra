//= require jquery
//= require bootstrap
//= require_tree .


function hiddenVisit() {
  const buttons = document.querySelectorAll(".visit-button");
  const visitData = document.querySelectorAll(".visit-details");
  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      let visitCategory = "panel-" + button.dataset.panel;
      visitData.forEach((element) => {
          element.classList.remove('visit-show');
      });
      document.querySelector("." + visitCategory).classList.add('visit-show');
    });
  });
};

function hiddenInfos() {
  const buttonsInfos = document.querySelectorAll(".infos-button");
  const infosData = document.querySelectorAll(".infos-details");
  buttonsInfos.forEach((button) => {
    button.addEventListener('click', () => {
      let infosCategory = "panel-" + button.dataset.panel;
      infosData.forEach((element) => {
          element.classList.remove('infos-show');
      });
      document.querySelector("." + infosCategory).classList.add('infos-show');
    });
  });
};


// Instantiate the Bootstrap carousel
$('.multi-item-carousel').carousel({
  interval: false
});

// for every slide in carousel, copy the next slide's item in the slide.
// Do the same for the next, next item.
$('.multi-item-carousel .item').each(function(){
  var next = $(this).next();
  if (!next.length) {
    next = $(this).siblings(':first');
  }
  next.children(':first-child').clone().appendTo($(this));

  if (next.next().length>0) {
    next.next().children(':first-child').clone().appendTo($(this));
  } else {
    $(this).siblings(':first').children(':first-child').clone().appendTo($(this));
  }
});

hiddenVisit();
hiddenInfos();
