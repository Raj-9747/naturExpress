import LoginForm from "@/components/Auth/LoginForm";
import { useSelector } from "react-redux";
// import { RootState } from "@/redux";
import { useEffect } from "react";
import { useRouter } from "next/router";

function Login() {
  //   const router = useRouter();
  //   const { userLoginData } = useSelector((state: RootState) => state.auth);

  //   useEffect(() => {
  //     if (userLoginData?.auth_token) {
  //         router.push("/");
  //     }
  //   }, [userLoginData]);
  return (
    <div className="">
      <LoginForm />
    </div>
    //   </div>
  );
}
export default Login;
