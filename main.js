const app = document.getElementById("app");

for (let i = 0; i < 50; i++) {
  let card = `
  <div class="card" style="background:hsl(${Math.floor(
    Math.random() * 360
  )}, 100%, 50%)">
  <img src="http://source.unsplash.com/random/?sig=${i}" alt="Something went wrong :)"/>
  </div>
  `;

  app.innerHTML += card;
}

window.addEventListener("mousemove", (e) => {
  const mouseX = e.clientX,
    mouseY = e.clientY;

  const decX = mouseX / window.innerWidth,
    decY = mouseY / window.innerHeight;

  const maxX = app.offsetWidth - window.innerWidth,
    maxY = app.offsetHeight - window.innerHeight;

  const panX = maxX * decX * -1,
    panY = maxY * decY * -1;

  app.animate(
    {
      translate: `${panX}px ${panY}px`,
    },
    {
      duration: 3000,
      easing: "ease",
      fill: "forwards",
    }
  );
});

const cards = document.querySelectorAll(".card");

const random = Math.floor(Math.random() * 50);
cards[random].innerHTML = `
    <div class="toggle"></div>
`;

const toggle = document.querySelector(".toggle");
const body = document.body;
const challenge = document.getElementById("challenge");

toggle?.addEventListener("click", () => {
  challenge.innerHTML = "<h4>✅challenge completed</h4>";

  toggle.classList.toggle("active");
  body.classList.toggle("dark");
});
