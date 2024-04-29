const contact = () => {
  const content = document.querySelector("#content");
  const backgroundBox = document.createElement("div");
  backgroundBox.id = "backgroundBox";
  content.appendChild(backgroundBox);

  const heading = document.createElement("h1");
  heading.textContent = "Contact";
  backgroundBox.appendChild(heading);

  const addressDiv = document.createElement("div");
  addressDiv.id = "addressDiv";
  backgroundBox.appendChild(addressDiv);

  const addressHeading = document.createElement("h3");
  addressHeading.id = "addressHeading";
  addressHeading.textContent = "Address";
  addressDiv.appendChild(addressHeading);

  const address = document.createElement("p");
  address.id = "address";
  address.textContent =
    "123 Main Street, Anytown, Anystate, 12345, United States";
  addressDiv.appendChild(address);

  const phoneDiv = document.createElement("div");
  phoneDiv.id = "phoneDiv";
  backgroundBox.appendChild(phoneDiv);

  const phoneHeading = document.createElement("h3");
  phoneHeading.id = "phoneHeading";
  phoneHeading.textContent = "Call us for Reservation";
  phoneDiv.appendChild(phoneHeading);

  const phone = document.createElement("p");
  phone.id = "phone";
  phone.textContent = "+1 (555) 123-4567";
  phoneDiv.appendChild(phone);
};
export default contact;
