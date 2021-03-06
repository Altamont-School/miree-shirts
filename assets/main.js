// Miree students featured
const students = [
  {
    name: `Riley Pierce`,
    slug: `riley-pierce`,
    picture: `./assets/r-pierce.webp`,
    projectName: `The Recursion Program`,
    bgImage: `./assets/recursion.webp`,
    shirtFront: `./assets/riley-front.webp`,
    shirtBack: `./assets/riley-back.webp`,
    shortBlurb: `Riley’s mission is to reshape our society, as well the homeless people stuck in poverty. He also runs a program to teach the youth about poverty, and how to help people.`,
    desc: `Our mission is to reshape the poverty numbers in our society. We are working to support children to volunteer to assist the effort of lowering the poverty percentage in our area. If you buy this shirt, you will be helping to educate children and help people who are less fortunate. When you buy this shirt, you help plant a seed in a young mind to help impoverished people.<br><br>To help you can buy a shirt. If you do so you are not just buying a shirt, you are helping other human beings. When you buy this shirt you not only donate the money for it but by wearing it you inspire people to do the same. One donation can make someone in the 28% of Birmingham that is impoverished live a little longer. You may not know what person will be getting the food bag from you, but you can still know it will help someone through the struggles life throws at them.<br><br>We need to fix this problem and we can't do it alone. We work together.`,
  },
  {
    name: `Karen Raymundo-Vega`,
    slug: `karen-raymundo-vega`,
    picture: `./assets/k-vega.webp`,
    projectName: `River Clean Up`,
    bgImage: `./assets/rivers.webp`,
    shirtFront: `./assets/karen-front.webp`,
    shirtBack: `./assets/karen-back.webp`,
    shortBlurb: `Karen’s mission is to make our future green. She will host cleanups and take before and after photos to put into a photography exhibition to bring awareness about our environment.`,
    desc: `Our mission is to make our future green by saving the environment. People pollute 14.5 trillion pounds of trash each year. This shirt will help our mission and save the earth. Karen Raymundo-Vega will do exhibitions, cleanups, and take before and after photos to show people how trash is affecting our Earth. It threatens species survival on this planet.<br/><br/> You can help by buying a shirt and donating to our cause. You can help spread awareness by wearing this shirt. People will see how bad this problem is and stop polluting. At the exhibitions you can see before and after photos. People will go to these exhibitions and see how bad this epidemic is, the epidemic of pollution. So please help spread awareness over this problem and help us solve it.<br/><br/> To hold a steady future for humanity and all life, no matter who you are, you can still help. So, help our cause and remember, our future is green.`,
  },
  {
    name: `Sarah Patrick Barze`,
    slug: `sarah-barze`,
    picture: `./assets/SP.webp`,
    projectName: `Paws, Tails, Talons, and Scales`,
    bgImage: `./assets/shelter.webp`,
    shirtFront: `./assets/sp-front.webp`,
    shirtBack: `./assets/sp-back.webp`,
    shortBlurb: `Sarah Patrick's mission is to help animals find loving homes where they are safe and protected. Our solution is asking for donations and fundraising by selling our shirts to help these animals.`,
    desc: `Our mission is rallying to help animals get adopted and put into good homes. We will do this by raising funds and donating money to shelters. We can prevent animals from being euthanized when it is not needed. With the money that we make, Sarah Patrick will provide the money for animals in shelters. Without your help we cannot achieve our goal of aiding these animals. We would appreciate it if you would devote yourself to this project.<br/><br/> By buying our shirt, you are giving to a great cause, along with owning a stylish T-shirt. This is important for us because it helps spread awareness. Please contribute to helping animals find good homes.`,
  },
];

// Sections of middle school students
const sections = [
  {
    name: `2nd Period`,
    picture: `./assets/2nd-period.webp`,
  },
  {
    name: `6th Period`,
    picture: `./assets/6th-period.webp`,
  },
  {
    name: `7th Period`,
    picture: `./assets/7th-period.webp`,
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
                class="snipcart-add-item card-btn"
                data-item-id="shirt-${student.slug}"
                data-item-price="28.00"
                data-item-url="https://altamont-school.github.io/miree-shirts/"
                data-item-description="A shirt supporting a project by Miree student ${student.name}."
                data-item-image="${student.shirtFront}"
                data-item-name="${student.projectName}"
                data-item-custom1-name="Size"
                data-item-custom1-options="YS|YM|YL|AS|AM|AL|AXL"
              >
                <img src="./assets/cart.svg" alt="Shopping Cart" /> Add to cart
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
          </p>
          <div class="buttons">
            <button
            class="snipcart-add-item card-btn"
            data-item-id="shirt-${student.slug}"
            data-item-price="28.00"
            data-item-url="https://altamont-school.github.io/miree-shirts/"
            data-item-description="A shirt supporting a project by Miree student ${student.name}."
            data-item-image="${student.shirtFront}"
            data-item-name="${student.projectName}"
            data-item-custom1-name="Size"
            data-item-custom1-options="YS|YM|YL|AS|AM|AL|AXL"
            >
              <img src="./assets/cart.svg" alt="Shopping Cart" /> Add to cart
            </button>
            <button
              class="snipcart-add-item secondary-card"
              data-item-id="donation-${student.slug}"
              data-item-price="5.00"
              data-item-url="https://altamont-school.github.io/miree-shirts/"
              data-item-description="A donation supporting a project by Miree student ${student.name}."
              data-item-name="${student.projectName} Donation"
            >
              Donate to this project
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

// Create new date for 6:00 am on Thursday, March 25th 2022
const date = new Date(2022, 2, 25, 8, 0, 0, 0);

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
