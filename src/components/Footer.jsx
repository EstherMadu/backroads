import React from "react";
import { pageLinks, socialLinks } from "../data";

const Footer = () => {
  return (
    <footer class="section footer">
      <ul class="footer-links">
        {pageLinks.map((link) => {
          const { id, href, text } = link;
          return (
            <li key={id}>
              <a href={href} class="footer-link">
                {text}
              </a>
            </li>
          );
        })}
      </ul>

      <ul class="footer-icons">
        {socialLinks.map((social) => {
          const { id, href, icon } = social;
          return (
            <li>
              <a
                href={href}
                target="_blank"
                class="footer-icon"
                rel="non-referrer"
              >
                <i class={icon}></i>
              </a>
            </li>
          );
        })}
      </ul>
      <p class="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  );
};

export default Footer;
