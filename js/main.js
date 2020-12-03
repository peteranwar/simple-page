// ADD DATE FUNCTION
let now = new Date();
let date = document.querySelector("#date");
date.innerText = dateBuilder(now);

function dateBuilder(d) {
  let months = [
    "يناير",
    "فبراير",
    "مارس",
    "أبريل",
    "مايو",
    "يونية",
    "يوليو",
    "أغسطس",
    "سبتمبر",
    "أكتوبر",
    "نوفمبر",
    "ديسمبر",
  ];

  let days = [
    "السبت",
    "الأحد",
    "الأتنين",
    "الثلاثاء",
    "الأربعاء",
    "الخميس",
    "الجمعة",
  ];

  let day = days[d.getDay()];
  let date = d.getDate();
  let month = months[d.getMonth()];
  let year = d.getFullYear();

  return `${day} ${date} ${month} ${year}`;
}



const removeIcons = document.querySelectorAll('.fa-times');

removeIcons.forEach( icon => {

  icon.addEventListener('click', ()=> {
      icon.parentNode.parentNode.style.display =  'none';
      console.log(icon.parentNode.parentNode);
  });
})




