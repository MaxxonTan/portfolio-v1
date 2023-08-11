import { generateExperienceArticle } from "./dom-helper.js";

const workSection = document.getElementById("work-section");
const projectSection = document.getElementById("project-section");

// Create DOM elements for work
const workExperienceElements = work
  .map((w, index) => generateExperienceArticle(w, index))
  .reverse();
workSection.append(...workExperienceElements);

// Create DOM elements for projects
const projectExperienceElements = projects
  .map((p, index) => generateExperienceArticle(p, index))
  .reverse();
projectSection.append(...projectExperienceElements);
