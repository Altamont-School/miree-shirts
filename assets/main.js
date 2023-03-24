// Miree students featured
const students = [
  {
    name: `Izzy Sellers`,
    slug: `i-sellers`,
    picture: `./assets/i-sellers.webp`,
    projectName: `Mental Health Matters - What Is Your Story?`,
    bgImage: `./assets/gallery.jpg`,
    shirtFront: `./assets/izzy-front.webp`,
    shirtBack: `./assets/izzy-back.webp`,
    shortBlurb: `Izzy's mission is to bring awareness to mental health. She will be hosting an art exhibition with students' art displayed that reflects on mental health importance. Please help sport Izzy's mission by buying one of our t-shirts.`,
    desc: `Our mission is to raise mental health awareness and our state, Alabama, is 50th in it. To achieve this goal, and help people suffering from mental health, Izzy will host art exhibitions that display student's artwork. She will also sell merchandise to raise money to assist people who struggle with mental health. By doing this, we are humanizing them. Many people are affected by mental illness and are overlooked.<br /><br />By buying our t-shirt, you are supporting people who are have mental health challenges, along with buying a stylish and unique t-shirt.`,
  },
  {
    name: `Sarah Whitley`,
    slug: `sarah-whitley`,
    picture: `./assets/s-whitley.webp`,
    projectName: `Care for the Coasts`,
    bgImage: `./assets/coasts.jpg`,
    shirtFront: `./assets/sarah-front.webp`,
    shirtBack: `./assets/sarah-back.webp`,
    shortBlurb: `Sarah Whitley's mission is to clean the Gulf of Mexico by using hair to absorb oil spills and clean the water. By buying this shirt you will ensure the clean future of the coasts.`,
    desc: `Our mission is to clean up oil spills on the coast of the Gulf of Mexico. Sarah Whitley’s plan is to use hair collected from salons as well as barber shops to absorb the oil. As of now oil spills are being collected in an item called an oil boom. The oil boom does not actually remove the oil from the ocean, it just pushes it away from the coast to help the people living there. Sarah's goal is to remove the oil from the ocean instead of pushing it further out to sea.<br /><br />This shirt is not only a wonderful piece of art, but a way to impact the world. By buying it, it becomes impactful for not only you, but the entire Gulf of Mexico.`,
  },
  {
    name: `James Stephens`,
    slug: `james-stephens`,
    picture: `./assets/j-stephens.webp`,
    projectName: `Altamont Paper Recycling`,
    bgImage: `./assets/recycle.jpg`,
    shirtFront: `./assets/james-front.webp`,
    shirtBack: `./assets/james-back.webp`,
    shortBlurb: `Do you want to stop stressing over the paper you've wasted and thrown in the trash? By supporting James Stephens to raise money for recycling at Altamont, you're doing your part to keep our community clean and help protect our planet.`,
    desc: `James is an 11th grade student with a very important Miree project about paper recycling at Altamont. James’s mission is to recycle as much paper as he can. He is planning to help our planet by recycling to make the state of our earth greener. By donating or buying our T-shirt you are giving each classroom at Altamont a recycling bin. Also, when buying a T-shirt and wearing it, you are helping spread awareness to recycle all around the community. We have the hope that you can donate to support James’s recycling journey.<br /><br />Buy buying our t-shirt, you will support recycling and making our Earth greener. We need to make this Earth a better place for all of us. If you buy this T-shirt you will help make the Earth a better place. We will be very thankful if you buy our T-shirt to support James Stephens and recycling at Altamont today!`,
  },
];

// Sections of middle school students
const sections = [
  {
    name: `3rd Period`,
    picture: `./assets/3rd-period-2023.webp`,
  },
  {
    name: `6th Period`,
    picture: `./assets/6th-period-2023.webp`,
  },
  {
    name: `7th Period`,
    picture: `./assets/7th-period-2023.webp`,
  },
];

// Get the elements we're going to append from the DOM
const cards = document.querySelector(".shirt-gallery");
const projects = document.querySelector(".projects");
const studentImages = document.querySelector("#student-images");

// sort students based on first name
students.sort((a, b) => {
  if (a.name < b.name) {
    return -1;
  }
  if (a.name > b.name) {
    return 1;
  }
  return 0;
});

// Map over students and create new card for each
students.map((student, i) => {
  const card = document.createElement("div");
  card.classList.add("shirt-card");
  card.innerHTML = `
            <div
              class="card-img"
              style="background-image: url('${student.bgImage}')"
            ></div>
            <div class="deets">
              <div class="frontmatter">
                <img src="${student.picture}" alt="${student.name}" />
                <div class="project-info">
                  <h3>${student.name}</h3>
                  <small>${student.projectName}</small>
                </div>
              </div>
              <p>
                ${student.shortBlurb}
                <a href="#${student.slug}" class="tertiary">Learn More &darr;</a>
              </p>
              <button
                class="card-btn"
                onclick="window.open('https://forms.office.com/Pages/ResponsePage.aspx?id=POz9d9wB60KSyaUjsIJV-QaSSpu1oH1BqL5VHrbv6eNUNVdTMlBHT1FYWDQxWjBROU9RMzhNSUlPMi4u')"
              >
                <img src="./assets/cart.svg" alt="Shopping Cart" /> Purchase for $25!
              </button>
            </div>
  `;
  cards.appendChild(card);
});

// Map over students and create a project-overview div for each
students.map((student, i) => {
  const project = document.createElement("div");
  project.classList.add("project-overview");
  project.setAttribute("id", student.slug);
  project.innerHTML = `
        <!-- img for shirts -->
        <div class="shirt-col">
          <img src="${student.shirtFront}" alt="${student.projectName} Front" loading="lazy" />
          <img src="${student.shirtBack}" alt="${student.projectName} Back" loading="lazy"/>
        </div>
        <!-- details -->
        <div class="project-details">
          <div class="project-header">
            <img src="${student.picture}" alt="${student.name}" loading="lazy" />
            <div class="project-frontmatter">
              <h3>${student.name}</h3>
              <small>${student.projectName}</small>
            </div>
          </div>
          <p>
            ${student.desc}
            <br />
            <br />
            If you'd prefer to make a donation, <a href="https://www.altamontschool.org/giving/giving/designated-student-project-donations" rel="noopener" target="_blank">click here</a> and enter <b>${student.projectName}</b> in the "leave a comment" section.
          </p>
          <div class="buttons">
            <button
            class="card-btn"
            style="font-size: .7rem;"
            onclick="window.open('https://forms.office.com/Pages/ResponsePage.aspx?id=POz9d9wB60KSyaUjsIJV-QaSSpu1oH1BqL5VHrbv6eNUNVdTMlBHT1FYWDQxWjBROU9RMzhNSUlPMi4u')"
            >
              <img src="./assets/cart.svg" alt="Shopping Cart" /> Purchase for $25!
            </button>
          </div>
        </div>
  `;
  projects.appendChild(project);
});

// Map over sections and create an image for each
sections.map((section, i) => {
  const sectionImg = document.createElement("img");
  sectionImg.setAttribute("src", section.picture);
  sectionImg.setAttribute("alt", section.name);
  sectionImg.setAttribute("loading", "lazy");
  studentImages.appendChild(sectionImg);
});

// Create new date for 12:00 am on Wednesday, April 6th 2023
const date = new Date(2023, 3, 6, 0, 0, 0, 0);

// Get now
const now = new Date();

if (now > date) {
  const buttons = document.querySelectorAll("button");
  const buttonList = Array.from(buttons);
  buttonList.map((button) => {
    button.style.display = "none";
  });
  const circle = document.querySelector(".circle");
  circle.style.display = "none";
}
