import { useState } from "react";
import { Link } from "react-router-dom";
import { InputProps } from "./Login.types";
import { FcTodoList } from "react-icons/fc";
import { convertPixelsToRem } from "../../utils";
import { LoginCard } from "../../components/LoginCard";
import { RiEyeCloseLine, RiEyeLine } from "react-icons/ri";
import { ClickableCustomizableLogo } from "../../components/ClickableCustomizableLogo";
import {
  Block,
  ContentInput,
  ForgotYourPassword,
  Button,
  LoginContainer,
  TitleContainer,
  IconContainer,
} from "./Login.styles";

export function Login() {
  const [hidePassword, setHidePassword] = useState<boolean>(false);
  const [inputValues, setInputValues] = useState<InputProps>({
    email: "",
    password: "",
  });

  function validations() {
    const isDisabled =
      inputValues.email.trim() !== "" && inputValues.password.trim() !== "";

    return isDisabled;
  }

  async function handleUserLogin() {}

  return (
    <LoginContainer>
      <div>
        <ClickableCustomizableLogo />
      </div>

      <div>
        <LoginCard width="37.5rem">
          <IconContainer>
            <FcTodoList size={100} />
          </IconContainer>

          <TitleContainer>
            <h1>Login</h1>
          </TitleContainer>

          <Block>
            <div>
              <ContentInput
                height={convertPixelsToRem(50)}
                width={convertPixelsToRem(400)}
              >
                <label htmlFor="email">Email</label>

                <input
                  id="email"
                  type="email"
                  value={inputValues.email}
                  onChange={({ target }) => {
                    setInputValues({ ...inputValues, email: target.value });
                  }}
                />
              </ContentInput>

              <ContentInput
                height={convertPixelsToRem(50)}
                width={convertPixelsToRem(400)}
              >
                <label htmlFor="password">Senha</label>

                <div>
                  <input
                    id="password"
                    type={hidePassword ? "text" : "password"}
                    value={inputValues.password}
                    onChange={({ target }) => {
                      setInputValues({
                        ...inputValues,
                        password: target.value,
                      });
                    }}
                  />

                  <button
                    type="button"
                    onClick={() => setHidePassword(!hidePassword)}
                  >
                    {hidePassword ? (
                      <RiEyeLine size={18} />
                    ) : (
                      <RiEyeCloseLine size={18} />
                    )}
                  </button>
                </div>
              </ContentInput>

              <Button onClick={handleUserLogin} disabled={!validations()}>
                Entrar
              </Button>
            </div>
          </Block>

          <ForgotYourPassword>
            <div>
              Novo por aqui ?{" "}
              <Link to="/login/forgotPassword">Cadastre-se</Link>
            </div>
          </ForgotYourPassword>
        </LoginCard>
      </div>
    </LoginContainer>
  );
}
