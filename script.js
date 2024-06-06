function clock() {
  let d = new Date(),
    h = d.getHours(),
    m = d.getMinutes(),
    s = d.getSeconds();
  let ampm = h >= 12 ? "PM" : "AM";
  h = h % 12 || 12;

  if (m < 10) m = `0${m}`;
  if (s < 10) s = `0${s}`;

  document.querySelector(".hour").textContent = h;
  document.querySelector(".min").textContent = m;
  document.querySelector(".sec").textContent = s;
  document.querySelector(".ampm").textContent = ampm;

  let timeContainer = document.querySelector(".time");
  let totalWidth = getTotalWidth();
  let containerWidth = timeContainer.offsetWidth;

  if (totalWidth > containerWidth) {
    timeContainer.style.flexDirection = "column";
  } else {
    timeContainer.style.flexDirection = "row";
  }

  setTimeout(clock, 1000);
}

function getTotalWidth() {
  let timeElements = document.querySelectorAll(".time span");
  let totalWidth = 0;
  timeElements.forEach(function (element) {
    totalWidth += element.offsetWidth;
  });
  return totalWidth;
}

clock();
