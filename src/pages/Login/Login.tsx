import { useState } from "react";
import { Link } from "react-router-dom";
import { convertPixelsToRem } from "../../utils";
import { RiEyeCloseLine, RiEyeLine } from "react-icons/ri";
import {
  Block,
  ContentInput,
  ForgotYourPassword,
  Button,
  LoginContainer,
} from "./Login.styles";
import { LoginCard } from "../../components/LoginCard";
import { ClickableCustomizableLogo } from "../../components/ClickableCustomizableLogo";

export function Login() {
  const [hidePassword, setHidePassword] = useState<boolean>(false);

  return (
    <LoginContainer>
      <div>
        <ClickableCustomizableLogo />
      </div>

      <div>
        <LoginCard width="37.5rem">
          <div>
            <h3>Login</h3>
          </div>

          <Block>
            <div>
              <ContentInput
                height={convertPixelsToRem(50)}
                width={convertPixelsToRem(400)}
              >
                <label htmlFor="email">Email</label>

                <input id="email" type="email" />
              </ContentInput>
              ,
              <ContentInput
                height={convertPixelsToRem(50)}
                width={convertPixelsToRem(400)}
              >
                <label htmlFor="password">Senha</label>

                <div>
                  <input
                    id="password"
                    type={hidePassword ? "text" : "password"}
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
              <ForgotYourPassword>
                <div>
                  <Link to="/login/forgotPassword">Esqueceu sua senha?</Link>
                </div>
              </ForgotYourPassword>
              <Button>
                <img src="/loading.gif" width={30} height={30} alt="loading" />
              </Button>
            </div>
          </Block>
        </LoginCard>
      </div>
    </LoginContainer>
  );
}
