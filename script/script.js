// add class navbarDark on navbar scroll
const header = document.querySelector('.navbar');

window.onscroll = function() {
    var top = window.scrollY;
    if(top >=100) {
        header.classList.add('navbarDark');
    }
    else {
        header.classList.remove('navbarDark');
    }
}
// collapse navbar after click on small devices
const navLinks = document.querySelectorAll('.nav-item')
const menuToggle = document.getElementById('navbarSupportedContent')

navLinks.forEach((l) => {
    l.addEventListener('click', () => { new bootstrap.Collapse(menuToggle).toggle() })
})

// survey
Survey.StylesManager.applyTheme("defaultV2");

var json = {
    surveyId: 'cb9297f7-e6ef-4b0a-8af2-2a16a1ca4055',
    surveyPostId: '245ba536-1dfb-4be5-993c-6a93f8e1aace'
};

window.survey = new Survey.Model(json);

survey
    .onComplete
    .add(function (sender) {
        document
            .querySelector('#surveyResult')
    });

survey.showProgressBar = 'bottom';

$("#surveyElement").Survey({model: survey});
