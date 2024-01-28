// src/components/Home.tsx
import React from 'react';
import styles from '../Assets/css/AuthForm.module.css';


interface LoginComponentProps {
  onRegisterButtonClick: () => void;
}
const LoginComponent: React.FC<LoginComponentProps> = ({ onRegisterButtonClick }) => {
  return <div>
    <div className={styles.loginContainer}>
      <form className={styles.loginForm}>
      <h2>Welcome back</h2>

        <label className={styles.formLabel} htmlFor="username">
          Username:
        </label>
        <input className={styles.formInput} type="text" id="username" name="username" />

        <label className={styles.formLabel} htmlFor="password">
          Password:
        </label>
        <input className={styles.formInput} type="password" id="password" name="password" />
        <div className={styles.rememberMe}>
        <label>
          <input type="checkbox" /> Remember me
        </label>
      </div>
        <button className={styles.formButton} type="submit">
          Login
        </button>
        <span style={{cursor: 'pointer' }} onClick={onRegisterButtonClick}>
          Already have an account?
        </span>  
      </form>
    </div>
    
    </div>;
};

export default LoginComponent;
