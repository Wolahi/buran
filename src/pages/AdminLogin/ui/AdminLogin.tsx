import styles from "./AdminLogin.module.scss";

import LoginForm from "@/features/LoginForm/ui/LoginForm.tsx";

const AdminLogin = () => (
  <div className={styles.root}>
    <LoginForm />
  </div>
);

export default AdminLogin;
