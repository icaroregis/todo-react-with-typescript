import { useState } from "react";
import { FcTodoList } from "react-icons/fc";
import Rocket from "../../../assets/rocket.svg";
import { convertPixelsToRem } from "../../../utils";
import { Link, useNavigate } from "react-router-dom";
import { LoginCard } from "../../../components/LoginCard";
import { RiEyeCloseLine, RiEyeLine } from "react-icons/ri";
import { ClickableCustomizableLogo } from "../../../components/ClickableCustomizableLogo";
import {
  Block,
  ContentInput,
  ForgotYourPassword,
  Button,
  TitleContainer,
  IconContainer,
  RegisterContainer,
} from "./Register.styles";
import { InputProps } from "./Register.types";
import { api } from "../../../service";
import { toast } from "react-toastify";

export function Register() {
  const navigate = useNavigate();
  const [hidePassword, setHidePassword] = useState<boolean>(false);
  const [inputValues, setInputValues] = useState<InputProps>({
    name: "",
    email: "",
    password: "",
  });

  function validations() {
    const isDisabled =
      inputValues.email.trim() !== "" &&
      inputValues.password.trim() !== "" &&
      inputValues.name.trim() !== "";

    return isDisabled;
  }

  async function handleUserRegister() {
    try {
      const userData = {
        name: inputValues.name,
        email: inputValues.email,
        password: inputValues.password,
      };

      await api.post("/users/register", userData);
      setInputValues({
        name: "",
        email: "",
        password: "",
      });
      navigate("/");
      toast.success("Usuário cadastrado com sucesso!");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <RegisterContainer>
      <div>
        <ClickableCustomizableLogo
          srcImage={Rocket}
          alt={"Imagem de um foguete"}
        />
      </div>

      <div>
        <LoginCard width="37.5rem">
          <IconContainer>
            <FcTodoList size={100} />
          </IconContainer>

          <TitleContainer>
            <h1>Cadastro</h1>
          </TitleContainer>

          <Block>
            <div>
              <ContentInput
                height={convertPixelsToRem(50)}
                width={convertPixelsToRem(400)}
              >
                <label htmlFor="email">Nome</label>

                <input
                  id="name"
                  type="text"
                  value={inputValues.name}
                  onChange={({ target }) => {
                    setInputValues({ ...inputValues, name: target.value });
                  }}
                />
              </ContentInput>

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

              <Button onClick={handleUserRegister} disabled={!validations()}>
                Cadastrar
              </Button>
            </div>
          </Block>

          <ForgotYourPassword>
            <div>
              <Link to="/">Voltar para Login</Link>
            </div>
          </ForgotYourPassword>
        </LoginCard>
      </div>
    </RegisterContainer>
  );
}
