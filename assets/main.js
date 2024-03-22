// Miree students featured
const students = [
  {
    name: `Raju Sudarshan`,
    slug: `r-sudarshan`,
    picture: `./assets/r-sudarshan.webp`,
    projectName: `Continuous Care for Juvenile Diabetes`,
    bgImage: `./assets/finger_prick.png`,
    shirtFront: `./assets/raju-front.webp`,
    shirtBack: `./assets/raju-back.webp`,
    shortBlurb: `Have you ever gotten your finger pricked at the doctor? If the answer is yes, then imagine having to do that around 10 times a day just to check your blood sugar.`,
    desc: `Have you ever gotten your finger pricked at the doctor? If the answer is yes, then imagine having to do that around 10 times a day just to check your blood sugar. How does it make you feel knowing that children go through this? That is why the Altamont School’s mission is to help raise enough money for children that cannot afford continuous glucose monitors in the first month before insurance covers it. Altamont’s sixth grade class designed and produced a t-shirt to help fund that cause. The person who made this project was Raju Sudarshan, a student at Altamont. He suffers from type 1 diabetes, also known as juvenile diabetes. Raju understands how painful it is to use finger pricks and knows the damages it can do to your physical and mental health. A continuous glucose monitor, along with stopping finger pricks, also allows patients to return to their normal every-day life and activities (sports, school, hanging with friends, etc.), as well as feel safe at all times, especially during the night. No child should suffer through this any longer. Now think back to the question we originally asked. Would you like to help us get these children the technology they deserve? If the answer is yes, then by buying a t-shirt you are supporting Raju's mission and helping kids with juvenile diabetes. `,
  },
  {
    name: `Eden Moody`,
    slug: `e-moody`,
    picture: `./assets/e-moody.webp`,
    projectName: `I’m known, you’re known – help others be seen today`,
    bgImage: `./assets/girls-reading.webp`,
    shirtFront: `./assets/eden-front.webp`,
    shirtBack: `./assets/eden-back.webp`,
    shortBlurb: `Imagine you are a young Black girl who has low self-esteem and feel like you don't have anyone who you can go to for support. Imagine being mistreated for things that you can't control.`,
    desc: `Imagine you are a young Black girl who has low self-esteem and feel like you don't have anyone who you can go to for support. Imagine being mistreated for things that you can't control. Imagine growing up with people who don’t understand you and make you feel like you just don't fit in. Eden Moody is a 10th grader from Altamont who is trying to help young Black girls gain self -esteem and confidence. Eden has been in this situation herself, so this project means so much to her! Her Miree project is a book that will help young Black girls feel more confident and supported. Think about a time when you were neglected or not supported when you thought you needed it. Think about how that made you feel. Purchase our shirt and you will be helping Eden by getting her enough money to publish her book and spreading her message even more.`,
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
                onclick="window.open('https://www.myschoolshares.com/schools/the-altamont-schl-birmingham-al/store')"
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
            If you'd prefer to make a donation, <a href="https://host.nxt.blackbaud.com/donor-form?svcid=tcs&formId=caace702-1e84-4782-b8ee-a7e9a5a6f4a8&envid=p-TXIC5ZT33Em9MPiPKMeOig&zone=usa" rel="noopener" target="_blank">click here</a> and enter <b>${student.projectName}</b> in the "leave a comment" section.
          </p>
          <div class="buttons">
            <button
            class="card-btn"
            style="font-size: .7rem;"
            onclick="window.open('https://www.myschoolshares.com/schools/the-altamont-schl-birmingham-al/store')"
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

// Create new date for 12:00 am on Wednesday, April 6th 2024
const date = new Date(2024, 3, 6, 0, 0, 0, 0);

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
