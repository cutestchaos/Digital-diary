const form = document.getElementById("quizForm");
const resultDiv = document.getElementById("result");
const cupcakeType = document.getElementById("cupcake-type");
const description = document.getElementById("description");
const cupcakeImg = document.getElementById("cupcake-img");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const answers = ["q1", "q2", "q3"].map(
    (q) => form.elements[q].value
  );

  const count = { a: 0, b: 0, c: 0, d: 0 };
  answers.forEach((ans) => count[ans]++);

  let max = "a";
  for (let key in count) {
    if (count[key] > count[max]) max = key;
  }

  const results = {
    a: {
      type: "Chocolate Dreamer 🍫",
      desc: "You're sweet, gentle, and full of warmth. Cuddles, calm love, and long chats make your heart race.",
      img: "https://tse1.mm.bing.net/th/id/OIP.q7tkFgJQInkQqz7EKLQoiwHaIr?rs=1&pid=ImgDetMain&o=7&rm=3"
    },
    b: {
      type: "Red Velvet Rebel ❤️",
      desc: "Passionate and deep, you crave intense emotions and lasting connections. You’re unforgettable.",
      img: "https://i.pinimg.com/1200x/b2/c2/0d/b2c20d63eafbccfa45241431caa92f3a.jpg"
    },
    c: {
      type: "Strawberry Spark 🍓",
      desc: "You're fun, flirty, and totally charming. Your love feels like a constant burst of sunshine.",
      img: "https://i.pinimg.com/1200x/84/1b/d7/841bd7e7626f2a435bb4b36ad4109b0d.jpg"
    },
    d: {
      type: "Vanilla Sunrise ☀️",
      desc: "You're soft, soothing, and romantic at heart. Simple gestures mean everything to you.",
      img: "https://i.pinimg.com/1200x/86/29/d0/8629d020cf517356575fbdfa6a7f8153.jpg"
    }
  };

  const res = results[max];
  cupcakeType.textContent = res.type;
  description.textContent = res.desc;
  cupcakeImg.src = res.img;
  cupcakeImg.alt = res.type;

  resultDiv.classList.remove("hidden");
});
