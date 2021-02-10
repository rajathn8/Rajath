//  Work experience cards


const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Software Engineer",
    cardImage: "assets/images/experience-page/NextOrbit_Logo_Image.svg",
    place: "NextOrbit Platforms and Solutions",
    time: "Nov 2018 - present < 2 Years 3 Months >",
    desp: "<li>Implemented a custom reverse index text similarity algorithm for the company’s searching needs.</li> <li>Developed Pipelines for data ingestion in the form of a data lake. The prime challenge here was to build an ecosystem that is capable of ingesting and retrieving large amounts of data in the order of TerraBytes in near real-time.</li> <li> An integral part of the platform engineering team handled functions like Backend web development, Testing, and was part of the entire build and release cycle. </li><li> Built extensive monitoring pipelines to ensure the continuous availability of various services by leveraging orchestration container software like DOCKER, DOCKER-COMPOSE, KUBERNETES.</li><li> Worked directly with clients and provided business intelligence reports using Tableau</li>",
  },
  {
    title: "Information Technology Analyst",
    cardImage: "assets/images/experience-page/ibm_logo.png",
    place: "IBM India",
    time: " Dec 2017 - Oct 2018 < 11 Months >",
    desp: "<li>Performed Data Cleaning & Data Normalization </li><li>Worked Extensively on Tableau and  IBM Watson Analytics to derive comprehensive reports about IT Operational Data Like Incident Tickets, Service Request, Problem Requests, and Change Requests. Most Reports Assessed the KPIs of the Account like SLA, Staffing Plan, and Incident Management. </li><li>Worked Extensively on Tableau and  IBM Watson Analytics to derive comprehensive reports about IT Operational Data Like Incident Tickets, Service Request, Problem Requests, and Change Requests. Most Reports Assessed the KPIs of the Account like SLA, Staffing Plan, and Incident Management. </li> <li> Identifying  Automation Opportunities</li>",
  },
  {
    title: "Research Associate",
    cardImage: "assets/images/experience-page/amc_logo.png",
    place: "AMC Engineering College",
    time: " June 2016 - June 2017 ",
    desp:"<li>Statistical Study of Treated Waste Water Using  Nano Technology</li>",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time,desp }) =>
      (output += `        
      <ul>
      <li class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br><br>
              <span class="author"><h5>${time}</h5></span><br>
            </p>
            <ol>
              <h6>${desp}</h6>
            </ol>
          </header>
        </article>
      </li>
    </ul>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);


// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "Global Program",
    cardImage: "assets/images/experience-page/1.jpg",
    description:
      "Responsible for teaching Spoken English to Teenagers",
  },
  {
    title: "Geeks For Geeks",
    cardImage: "assets/images/experience-page/2.jpg",
    description:
      "Created Premium Membership to their Job Portal",
  },
  {
    title: "HackRank",
    cardImage: "assets/images/experience-page/3.jpg",
    description:
      "",
  },
  
];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" style="background-image: url(${cardImage});background-repeat: no-repeat, repeat; background-size: cover; background-position: center;">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2>
          <p class="copy">${description}</p></div>
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);


// Mentorship Card
/*
const mentorshipcards = document.querySelector(".mentorship-cards");
const mentor = [
  {
    title: "HakinCode",
    image: "assets/images/experience-page/hakin.png",
    time: "06/2020 - 08/2020",
    desp: "<li>It is an open source community where students and mentors can apply.</li><hr /><li>Ample amount of technologies and projects are there and we are given opportunity to work on them according to our interest and knowledge.</li>",
  },
  {
    title: "Google Summer of Code",
    image: "assets/images/experience-page/gsoc.png",
    time: "03/2020 - 08/2020",
    desp: "<li>Google Summer of Code is a global program focused on introducing students to open source software development.</li><hr /><li>It is a great platform to explore new areas, maybe discover a new career path!</li>",
  },
];

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, time, desp}) =>
      (output += `        
      <div class="column mentorshipCard"> 
      <div class="card card2 mentorshipCardCover">
        <img src="${image}" class="card-img-top" alt="..."  width="64" height="300">
        <div class="information">
        <div class="card-body">
          <h5 class="card-title">${title}</h5>
          <p class=""sub-title">${time}</p>
        </div>
        <div class="more-information">
        <ul class="list-group list-group-flush p-0 right-aligned">
          <div class="list-group-item card2 disclaimer">${desp}</div>
        </ul>
        </div>
        </div>
      </div>
      </div>
      `)
  );
  mentorshipcards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
*/