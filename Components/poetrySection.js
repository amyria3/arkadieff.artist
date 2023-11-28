import poetryElement from "./poetryElement.js";

export default function poetrySection() {
  const section = document.createElement("section");
  section.id = "poetrySection";

  section.appendChild(poetryElement("This is my poetry text", "text"));
  return section
}