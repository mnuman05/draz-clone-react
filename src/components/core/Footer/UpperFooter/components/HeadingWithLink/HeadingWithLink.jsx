import React from "react";
import "./headingWithLink.css";

function HeadingWithLink({ sections }) {
  return (
    <>
      {sections.map((section, index) => (
        <div key={index}>
          <h3 className="footer-title">{section.heading}</h3>
          <ul className="footer-link-list ps-0 m-0">
            {section.links.map((link, linkIndex) => (
              <li key={linkIndex} className="footer-li">
                <a href={link.url}>{link.text}</a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
}

export default HeadingWithLink;
