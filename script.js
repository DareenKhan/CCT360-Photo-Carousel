// The same three pics are used for both stories.
const photos = ["studying", "exhausted", "celebrating"];

const stories = [
  {
    order: [0, 1, 2],
    kicker: "STORY 01 — PERSEVERANCE",
    title: "Hard Work Pays Off",
    description: "A student studies for an exam, pushes through exhaustion, and finally celebrates the results of their hard work.",
    titles: ["The Effort", "The Struggle", "The Reward"],
    captions: [
      "It starts with the determination to do well.",
      "Hours of studying begin to take a toll.",
      "At last, the hard work feels worth it."
    ],
    moral: "Hard work and perseverance can lead to success."
  },
  {
    order: [2, 0, 1],
    kicker: "STORY 02 — THE PRESSURE",
    title: "The Pressure to Succeed",
    description: "After celebrating an achievement, a student feels the pressure to keep doing well. More studying follows, until the effort becomes overwhelming.",
    titles: ["The Achievement", "The Expectation", "The Burnout"],
    captions: [
      "An achievement brings a moment of happiness.",
      "The pressure to repeat that success sets in.",
      "Eventually, the student reaches their limit."
    ],
    moral: "The pressure to keep succeeding can come at a cost."
  }
];

function changeStory(number) {
  const story = stories[number];

  document.getElementById("story-kicker").textContent = story.kicker;
  document.getElementById("story-title").textContent = story.title;
  document.getElementById("story-description").textContent = story.description;
  document.getElementById("story-counter").textContent = "0" + (number + 1) + " / 02";
  document.getElementById("story-message").textContent = story.moral;

  for (let i = 0; i < 3; i++) {
    const photo = photos[story.order[i]];
    document.getElementById("photo-" + i).src = "images/" + photo + ".jpg";
    document.getElementById("photo-" + i).alt = "Student " + photo;
    document.getElementById("frame-title-" + i).textContent = story.titles[i];
    document.getElementById("frame-caption-" + i).textContent = story.captions[i];
  }

  document.getElementById("success-btn").classList.toggle("active", number === 0);
  document.getElementById("pressure-btn").classList.toggle("active", number === 1);
  document.getElementById("success-btn").setAttribute("aria-pressed", number === 0);
  document.getElementById("pressure-btn").setAttribute("aria-pressed", number === 1);
}

// Clicking a button changes the story.
document.getElementById("success-btn").addEventListener("click", function () {
  changeStory(0);
});

document.getElementById("pressure-btn").addEventListener("click", function () {
  changeStory(1);
});
