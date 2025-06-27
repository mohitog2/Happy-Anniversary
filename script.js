const image = document.getElementById("zoomimage");
const hiddenContent = document.getElementById("hiddencontent");

image.addEventListener("click", () => {
  image.classList.add("zoom-in");

  setTimeout(() => {
    image.style.display = "none";
    hiddenContent.style.display = "flex";
  }, 800);
});

const items = [
  {
    gif: "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExZWRjMGZtYnIzN3YzcnVidnNudTA3bnF0Y25vbjh3dGQ1Z3hqNDRueSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/c76IJLufpNwSULPk77/giphy.gif",
    text: "Happy Anniversary my Love!!💖",
  },
  {
    gif: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExZTJ3Yjh4dWM5dTRhcHo3NHYwZ2ttN2o3N2VoNmtvNmNmcmUxYzA1ayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Gh6NDSdC96Ef3q5gWI/giphy.gif",
    text: "I love you so much!!",
  },
  {
    gif: "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExajZ2ZnZ2ZHJzazBvcWpmc3kxZGhucXU2aGtmb2t6ZzcxdXQ1N3F3NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Lv2VhwHrt6ljhvZ6LF/giphy.gif",
    text: "wishing to stay with you forever...",
  },
  {
    gif: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExaTZvdW5pd3NhZjNweWQydnhxd2ptbzZmdWthYzh3OTAwaWM5ZGw2cyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/5vYwHanb6y3HWBQIox/giphy.gif",
    text: "you know what makes it all more special is that we are together in this journey of life. Hope to be with you forever and celebrate every anniversary with love and happiness!!",
  },
];

let currentIndex = 0;
const textEl = document.getElementById("text");
const gifEl = document.getElementById("gif");
const btn = document.getElementById("nxtbtn");
const mainContent = document.getElementById("content");
const otherComps = document.getElementById("othercomps");

function updateContent(index) {
  textEl.textContent = items[index].text;
  gifEl.src = items[index].gif + "?v=" + Math.random();
}

updateContent(currentIndex);

btn.addEventListener("click", () => {
  currentIndex++;
  if (currentIndex < items.length) {
    updateContent(currentIndex);
  } else {
    mainContent.style.opacity = "0";

    setTimeout(() => {
      mainContent.style.display = "none";
      otherComps.style.display = "block";
    }, 800);
  }
});

function enterCode() {
  const code = document.getElementById("code").value;
  const btn = document.getElementById("submit");
  if (code === "1319") {
    window.location.href = "final.html";
  } else {
    alert("Incorrect code");
  }
}

const submitBtn = document.getElementById("submit");
if (submitBtn) {
  submitBtn.addEventListener("click", enterCode);
}
