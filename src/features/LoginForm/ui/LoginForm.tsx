import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { Button, Input } from "antd";

import styles from "./LoginPage.module.scss";

import { useAuthContext } from "@/app/module/hooks/useAuthContext.ts";
import { ERoute } from "@/app/router/config.tsx";
import useLogin from "@/features/LoginForm/module/useLogin.ts";
import { ILoginForm } from "@/features/LoginForm/ui/interfaces/ILoginForm.ts";
import { CustomTypography } from "@/shared/ui/CustomTypography";

const LoginForm = () => {
  const { control, handleSubmit } = useForm<ILoginForm>();
  const { loginReq } = useLogin();
  const { login } = useAuthContext();
  const navigate = useNavigate();

  const onSubmit = async (data: ILoginForm) => {
    const res = await loginReq(data);
    if (login) {
      login(res.data.tokenOutput.access);
      navigate(ERoute.Main);
    }
  };

  return (
    <form className={styles.root} onSubmit={handleSubmit(onSubmit)}>
      <CustomTypography type="title">Войти</CustomTypography>

      <Controller
        control={control}
        name="username"
        render={({ field }) => (
          <div className={styles.item}>
            <CustomTypography type="subtitle">Логин</CustomTypography>
            <Input {...field} />
          </div>
        )}
      />

      <Controller
        control={control}
        name="password"
        render={({ field }) => (
          <div className={styles.item}>
            <CustomTypography type="subtitle">Пароль</CustomTypography>
            <Input.Password {...field} />
          </div>
        )}
      />

      <Button type="primary" htmlType="submit">
        <CustomTypography>Войти</CustomTypography>
      </Button>
    </form>
  );
};

export default LoginForm;
