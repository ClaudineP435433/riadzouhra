//= require jquery
//= require bootstrap
//= require_tree .


function hiddenVisit() {
  const buttons = document.querySelectorAll(".visit-button");
  const visitData = document.querySelectorAll(".visit-details");
  console.log(visitData);
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

hiddenVisit();
