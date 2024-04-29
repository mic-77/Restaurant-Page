const headerDiv = function () {
  const header = document.createElement("div");
  header.id = "header";

  const homeTab = document.createElement("button");
  homeTab.id = "home-tab";
  homeTab.textContent = "Home";

  header.appendChild(homeTab);

  const menuTab = document.createElement("button");
  menuTab.textContent = "Menu";
  menuTab.id = "menu-tab";

  header.appendChild(menuTab);

  const contactTab = document.createElement("button");
  contactTab.textContent = "Contact";
  contactTab.id = "contact-tab";

  header.appendChild(contactTab);

  return header;
};

export default headerDiv;
