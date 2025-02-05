import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AuthScreen from "../components/AuthScreen";
import FormInput from "../components/FormInput";
import Spinner from "../components/Spinner/Spinner";
import apiClient from "../ApiClient/apiClient";
import { useRecoilState } from "recoil";
import { tempUserAtom, userAtom } from "../recoil/userAtom";
import { toast } from "react-toastify";
import { jwtDecode } from "jwt-decode";


const Login = () => {
  const history = useNavigate();
  const [loginData, setLoginData] = useState({
    emailOrPhone: "",
    password: "",
  });
  const [user, setUser] = useRecoilState(userAtom);
  const [, setTempUser] = useRecoilState(tempUserAtom);
  const [isLoading, setIsLoading] = useState(false);

  // if (!isEmptyObject(user)) {
  //   if (user.plan === "freeTrial") {
  //     history("/select-plan");
  //   } else {
  //     if (redirectLink) {
  //       window.location.href = redirectLink;
  //     } else {
  //       history("/workspaces");
  //     }
  //     // use replace to prevent user from going back to login page// Redirect to /signup
  //   }
  // }

  const validateForm = () => {
    const emailOrPhone = loginData.emailOrPhone;
    const password = loginData.password;

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailRegex.test(emailOrPhone)) {
      return false;
    }
    if (password.length == 0) {
      return false;
    }
    return true;
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    if (validateForm()) {
      const emailOrPhone = loginData.emailOrPhone;
      const password = loginData.password;

      try {
        const response = apiClient
          .post("/v1/auth/login", {
            emailOrPhone,
            password,
          })
          .then((response) => {
            const { token } = response.data.data;
            
            const decodedUser = jwtDecode(token);
            setUser(decodedUser);
            // Handle the response as needed, for example:
            // This function creates visitors and accounts in Pendo
            // You will need to replace <visitor-id-goes-here> and <account-id-goes-here> with values you use in your app
            // Please use Strings, Numbers, or Bools for value types.
            // window.pendo.initialize({
            //   visitor: {
            //     id: response.data.user._id,
            //     email: response.data.user.email, // Recommended if using Pendo Feedback, or NPS Email
            //     full_name: response.data.user.fullname, // Recommended if using Pendo Feedback
            //   },
            //   account: {
            //     id: response.data.user._id,
            //   },
            // });
            history("/dashboard");
            setIsLoading(false);
          })
          .catch((error) => {
           toast.error(
             error.response?.data?.message ?? "Invalid login credentials",
             {
               position: "top-right",
               autoClose: 5000,
               hideProgressBar: false,
               closeOnClick: true,
               pauseOnHover: true,
               draggable: true,
               progress: undefined,
             }
           );

            setIsLoading(false);
          });
      } catch (error) {
        console.error("Firebase sign-in error:", error);
        setIsLoading(false);
      }
    }
  };

  const handleChange = (e) => {
    const { id, value } = e.target;

    setLoginData({
      ...loginData,
      [id]: value,
    });
  };

  return (
    <AuthScreen>
      <div className="flex flex-col gap-4 sm:mx-28 sm:w-[360px]">
        <div className="flex flex-col gap-3">
          <h1 className="text-4xl font-normal">Login</h1>
          <p className="text-xs">
            Login to begin the experience of savings and investment.
          </p>
        </div>
        <form
          className="flex flex-col gap-3 sm:gap-2"
          onSubmit={(e) => handleLogin(e)}
        >
          <FormInput
            label="Email Or Phone"
            id="emailOrPhone"
            type="text"
            placeholder="Enter your email"
            autoComplete="email-or-phone"
            onChange={handleChange}
            required
          />

          <FormInput
            label="Password*"
            id="password"
            type="password"
            placeholder="Create a password"
            autoComplete="current-password"
            onChange={handleChange}
            hint={
              loginData.password && loginData.password.length < 8
                ? "Must be at least 8 characters"
                : ""
            }
            // forwardedRef={passwordRef}
          />

          <div className="items-center text-center text-sm text-gray-500">
            <p
              className="cursor-pointer"
              onClick={() => history("/forgot-password")}
            >
              Forgot Password
            </p>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="w-full bg-[#101c4e] text-white py-2 rounded-md sm:h-11 text-sm"
              type="submit"
            >
              {isLoading ? (
                <div className="spinner">
                  <Spinner />
                </div>
              ) : (
                "Login"
              )}
            </button>
          </div>

          <div className="items-center text-center text-gray-400 mt-8 text-sm">
            <p className="text-md">
              Don't have an account?{" "}
              <span
                className="text-primary cursor-pointer"
                onClick={() => history("/register")}
              >
                Sign Up
              </span>
            </p>
          </div>
        </form>
      </div>
    </AuthScreen>
  );
};

export default Login;
