let score = 0;
const scoreDisplay = document.getElementById("score");
const infoBox = document.getElementById("line-info");
const lines = [
  { threshold: 5, name: "Суцільна товста основна", desc: "Основна контурна лінія (0.7мм)." },
  { threshold: 10, name: "Суцільна тонка", desc: "Лінія штрихування, розмірів, виносна (0.3мм)." },
  { threshold: 15, name: "Штрихова", desc: "Сховані контури." },
  { threshold: 20, name: "Штрихпунктирна", desc: "Осі симетрії." },
  { threshold: 25, name: "Штрихпунктирна з 2 крапками", desc: "Контури предметів, що обертаються." }
];

document.getElementById("click-button").addEventListener("click", () => {
  score++;
  scoreDisplay.textContent = `Кількість ліній: ${score}`;

  // Показ бонусу
  const line = lines.find(l => l.threshold === score);
  if (line) {
    infoBox.classList.remove("hidden");
    infoBox.innerHTML = `<strong>${line.name}</strong><br>${line.desc}`;
  }
});
