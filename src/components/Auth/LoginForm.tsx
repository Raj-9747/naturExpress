import { useState } from "react";
import { Form } from "react-bootstrap";
import Image from "next/image";
// import { login } from "@/redux/actions/authAction/authAction";
import { useDispatch } from "react-redux";

const LoginForm = () => {
  //   const dispatch = useDispatch();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isCheckValid, setIsCheckValid] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState(false);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const checkValidation = (type: string) => {
    if (type === "email") {
      if (!email) {
        return { isValid: false, message: "Email is required" };
      }
      if (!emailRegex.test(email)) {
        return { isValid: false, message: "Invalid Email" };
      }
      return { isValid: true, message: "" };
    }

    if (type === "password") {
      if (!password) {
        return {
          isValid: false,
          message: "Password is required.",
        };
      }
      if (password.length < 6 && password.length > 0) {
        return {
          isValid: false,
          message: "Password Length Should be 6 or more",
        };
      }
      return {
        isValid: true,
        message: "",
      };
    }
  };
  const handleLogin = async (e: any) => {
    e.preventDefault();
    setIsCheckValid(true);
    if (
      checkValidation("email")?.isValid &&
      checkValidation("password")?.isValid
    ) {
      //   dispatch(login({ email: email, password: password }));
    }
  };

  return (
    <div
      className="d-flex vh-100 align-items-center justify-content-center bg-light"
      style={{
        gap: "20px",
      }}
    >
      <div className="d-flex justify-content-center align-items-center p-4">
        <Image
          width={400}
          height={400}
          src="/assets/company-logo-blue.png"
          alt="mkart-logo"
          className=""
        />
      </div>
      <div className="d-flex flex-column justify-content-center align-items-center vh-100 bg-light">
        <div
          className="p-4 border rounded shadow bg-white"
          style={{ width: "26rem" }}
        >
          <div className="d-flex justify-content-center p-4">
            <Image
              width={100}
              height={40}
              src="/assets/company-logo-white.png"
              alt="mkart-logo"
              className=""
            />
          </div>
          <Form onSubmit={() => {}}>
            <div className="login-title">Login to Naturexpress</div>
            <div className="my-4">
              <div className="d-flex flex-column">
                <div className="custom-input-container mt-3">
                  <div className="input-icon-wrapper">
                    <Image
                      src="/assets/icons/email-logo.svg"
                      alt="email"
                      width={20}
                      height={20}
                    />
                  </div>
                  <input
                    type="email"
                    className="custom-input-field"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                {/* <div className="error-message-div">
                {checkValidation("email") && isCheckValid && <span className="error-message">{checkValidation("email")?.message}</span>}
              </div> */}
                {isCheckValid && !checkValidation("email")?.isValid && (
                  <div className="error-message-div">
                    <span className="error-message">
                      {checkValidation("email")?.message}
                    </span>
                  </div>
                )}
              </div>

              <div className="d-flex flex-column">
                <div className="custom-input-container mt-2">
                  <div className="input-icon-wrapper">
                    <Image
                      src="/assets/icons/password-lock.svg"
                      alt="password"
                      width={20}
                      height={20}
                    />
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    className="custom-input-field"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <div
                    className="d-flex justify-content-center align-item-center "
                    onClick={() => setShowPassword(!showPassword)}
                    style={{
                      cursor: "pointer",
                    }}
                  >
                    {showPassword ? (
                      <Image
                        width={19}
                        height={19}
                        src="/assets/icons/close_eye.svg"
                        alt="Hide"
                      />
                    ) : (
                      <Image
                        width={19}
                        height={19}
                        src="/assets/icons/open_eye.svg"
                        alt="Show"
                      />
                    )}
                  </div>
                </div>
                {isCheckValid && !checkValidation("password")?.isValid && (
                  <div className="error-message-div">
                    <span className="error-message">
                      {checkValidation("password")?.message}
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* <Form.Group className="mb-3 d-flex align-items-center">
            <Form.Check type="checkbox" id="rememberMe" />
            <Form.Label className="ms-2 mb-0" htmlFor="rememberMe">
              Remember me
            </Form.Label>
          </Form.Group> */}

            <div className="d-flex justify-content-between align-items-center flex-column">
              <button
                type="submit"
                className="general-button w-100 p-2"
                onClick={(e: any) => handleLogin(e)}
              >
                Log in
              </button>
              <a
                href="#"
                className="text-decoration-none p-2"
                style={{
                  color: "#2b3783",
                }}
              >
                Forgot your password?
              </a>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
