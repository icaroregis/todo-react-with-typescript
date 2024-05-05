import { useContext, useState } from "react";
import Logo from "../../assets/planning.png";
import { InputProps } from "./Login.types";
import { FcTodoList } from "react-icons/fc";
import { convertPixelsToRem } from "../../utils";
import { Link, useNavigate } from "react-router-dom";
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
import { api } from "../../service";
import { AuthContext } from "../../contexts/authContext";

export function Login() {
  const navigate = useNavigate();
  const { setAuthToken } = useContext(AuthContext);
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

  async function handleUserLogin() {
    try {
      const userData = {
        email: inputValues.email,
        password: inputValues.password,
      };

      const response = await api.post("/users/login", userData);
      const { token, userId } = response.data;

      localStorage.setItem("token", token);
      localStorage.setItem("userId", userId);

      setAuthToken({
        token,
        id: userId,
      });

      setInputValues({
        email: "",
        password: "",
      });

      navigate("/home");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <LoginContainer>
      <div>
        <ClickableCustomizableLogo srcImage={Logo} alt={"Logomarca do Autor"} />
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
              Novo por aqui ? <Link to="/register">Cadastre-se</Link>
            </div>
          </ForgotYourPassword>
        </LoginCard>
      </div>
    </LoginContainer>
  );
}
