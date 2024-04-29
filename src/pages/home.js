import bgImg from "../assets/restaurant.jpg";

const home = () => {
  const content = document.querySelector("#content");
  const background = document.createElement("div");
  background.id = "background";
  content.appendChild(background);

  const heading = document.createElement("h1");
  heading.textContent = "Welcome to Our Restaurant";
  background.appendChild(heading);

  const description = document.createElement("p");
  description.id = "description";
  description.textContent =
    "Experience the finest flavors with our exquisite menu.";
  background.appendChild(description);

  const image = document.createElement("img");
  image.src = bgImg;
  image.alt = "Restaurant Image";
  image.id = "bgImg";

  background.style.backgroundImage = `url(${bgImg})`;
};
export default home;
