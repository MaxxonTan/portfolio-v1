/**
 * Generate a string with leading zero given an index.
 * Ex: Index 6 will return "06".
 * @param {number} index
 */
const generateIndexString = (index) => {
  if (index >= 10) return index;

  return "0" + index.toString();
};

const generateExperienceArticle = (experience, index) => {
  const newArticle = document.createElement("article");
  const newDetail = document.createElement("details");

  newDetail.className = "experience-entry";

  /**
   * Elements for summary
   **/
  const detailSummary = document.createElement("summary");
  const summaryHeader = document.createElement("header");
  const experienceIndex = document.createElement("p");
  experienceIndex.className = "index";
  experienceIndex.innerHTML = generateIndexString(index);
  const name = document.createElement("h3");
  name.className = "name";
  name.innerHTML = experience.name;
  const position = document.createElement("p");
  position.className = "position";
  position.innerHTML = experience.position;
  summaryHeader.append(experienceIndex, name, position);

  detailSummary.appendChild(summaryHeader);

  /**
   * Elements for expanded section in details
   **/
  const expandedDiv = document.createElement("div");
  expandedDiv.className = "expanded";

  const image = document.createElement("img");
  image.src = experience.photoPath;
  // Setting alt to empty here because these images are only decorative. Therefore should be ignore by assitive techonologies.
  image.alt = "";
  expandedDiv.appendChild(image);

  const techDateContainer = document.createElement("div");
  techDateContainer.className = "tech-date-container";
  const techStack = document.createElement("p");
  techStack.className = "tech-stack";
  techStack.innerHTML = `<i>${experience.techStack.join(", ")}</i>`;
  const dateRange = document.createElement("p");
  dateRange.className = "date-range";
  dateRange.innerHTML = `${experience.startDate} - ${experience.endDate}`;
  techDateContainer.append(techStack, dateRange);
  expandedDiv.appendChild(techDateContainer);

  experience.details.forEach((content) => {
    const detail = document.createElement("p");
    detail.className = "experience-detail";
    detail.innerHTML = content;

    expandedDiv.appendChild(detail);
  });

  const links = document.createElement("div");
  links.className = "links";
  experience.links.forEach((link) => {
    const a = document.createElement("a");
    a.href = link.href;
    a.innerHTML = link.title;

    links.appendChild(a);
  });
  expandedDiv.appendChild(links);

  const line = document.createElement("hr");
  expandedDiv.appendChild(line);

  newDetail.append(detailSummary, expandedDiv);
  newArticle.appendChild(newDetail);

  return newArticle;
};

export { generateExperienceArticle };
