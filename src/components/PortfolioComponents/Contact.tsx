/**
 * This code was generated by Builder.io
 */
import React from "react";
import styles from "./Contact.module.css";

const Contact: React.FC = () => {
  return (
    <section className={styles.contact}>
      <h2 className={styles.contactTitle}>
        Let's work together and make everything super cute and super useful.
      </h2>
      <a href="#contact" className={styles.contactCta}>
        Contact Me
      </a>
      <div className={styles.socialLinks}>
        <a href="#" aria-label="LinkedIn">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/1e47bd3ec4ea7822d76025ca4ae849fd89365d551636f9199edf98126f773320?placeholderIfAbsent=true&apiKey=3b2a0042ca5b469d94ce21876bd60fcd"
            alt=""
            className={styles.socialIcon}
          />
        </a>
        <a href="#" aria-label="Twitter">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e8d25a9e133ac1e4d856cb685b04857111cd4e012f46d33da6c8500d610e0752?placeholderIfAbsent=true&apiKey=3b2a0042ca5b469d94ce21876bd60fcd"
            alt=""
            className={styles.socialIcon}
          />
        </a>
        <a href="#" aria-label="Instagram">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/2752835e80c2fc0aea1db303bb85eb0c3a1afcc8f723ad6c360f86b4878fe931?placeholderIfAbsent=true&apiKey=3b2a0042ca5b469d94ce21876bd60fcd"
            alt=""
            className={styles.socialIcon}
          />
        </a>
        <a href="#" aria-label="GitHub">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/2ef4d2cb16bd7434735ea7ebc2cf065d94ab5cc18ec083ea5ac74720b32e6e73?placeholderIfAbsent=true&apiKey=3b2a0042ca5b469d94ce21876bd60fcd"
            alt=""
            className={styles.socialIcon}
          />
        </a>
      </div>
    </section>
  );
};

export default Contact;
