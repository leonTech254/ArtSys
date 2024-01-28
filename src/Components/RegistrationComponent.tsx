// src/components/RegistrationComponent.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../Assets/css/AuthForm.module.css';


interface RegisterComponent {
  onLoginButtonClick: () => void;
}

const RegistrationComponent: React.FC<RegisterComponent> = ({ onLoginButtonClick }) => {
  return (
    <div className={styles.registrationContainer}>
      <form className={styles.registrationForm}>
      <h2>Create an Account</h2>
        <div className={styles.formGroup}>
          <label className={styles.formLabel} htmlFor="firstName">
            First Name:
          </label>
          <input className={styles.formInput} type="text" id="firstName" name="firstName" />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.formLabel} htmlFor="lastName">
            Last Name:
          </label>
          <input className={styles.formInput} type="text" id="lastName" name="lastName" />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.formLabel} htmlFor="email">
            Email:
          </label>
          <input className={styles.formInput} type="email" id="email" name="email" />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.formLabel} htmlFor="password">
            Password:
          </label>
          <input className={styles.formInput} type="password" id="password" name="password" />
        </div>

  

        <button className={styles.formButton} type="submit">
          Register
        </button>
        <p className={styles.loginLink}>
        Already have an account? <span style={{cursor: 'pointer' }} onClick={onLoginButtonClick}>Login here</span>
      </p>
      </form>

     
    </div>
  );
};

export default RegistrationComponent;
