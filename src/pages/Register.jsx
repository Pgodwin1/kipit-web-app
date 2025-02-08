import React, { useState, useRef, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import FormInput from "../components/FormInput";
import { useRecoilState } from "recoil";
import { ToastContainer, toast } from "react-toastify";
import AuthScreen from "../components/AuthScreen";
import { userAtom } from "../recoil/userAtom";
import Spinner from "../components/Spinner/Spinner";
import apiClient from "../ApiClient/apiClient"

const Register = () => {
  const urlParams = new URLSearchParams(window.location.search);
  //  const redirectLink = urlParams.get("login_to");
  const history = useNavigate();
  const [signUpData, setSignUpData] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    confirmPassword: "",
  });
  const [user, setUser] = useRecoilState(userAtom);
  const [isLoading, setIsLoading] = useState(false);
  const [validationError, setValidationError] = useState("");
  const location = useLocation();

   const validateForm = () => {
     const email = signUpData.email;
     const password = signUpData.password;
     const confirmPassword = signUpData.confirmPassword;
     const firstName = signUpData.firstName;
     const lastName = signUpData.lastName;

     const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

     if (!emailRegex.test(email)) {
       setValidationError("Invalid email address.");
       return false;
     }
     if (password.length < 8) {
       setValidationError("Password should be at least 8 characters.");
       return false;
     }
     if (password !== confirmPassword) {
       setValidationError("Password and Confirm Password do not match.");
       return false;
     }
     if (firstName.length < 1) {
       setValidationError("First Name should be at least 1 character.");
       return false;
     }
     if (lastName.length < 1) {
       setValidationError("Last Name should be at least 1 character.");
       return false;
     }
     setValidationError("");
     return true;
   };

    const handleSubmit = async (e) => {
      e.preventDefault();
      if (validateForm()) {
        setIsLoading(true);

        const { confirmPassword, ...data } = signUpData;
        try {
          const response = await apiClient.post("/v1/auth/signup", data);

          if (response.status === 201) {
            setUser(response.data.user);

            // Parse the current URL search parameters
            const searchParams = new URLSearchParams(window.location.search);
            // const planParam = searchParams.get("plan"); // Extract the 'plan' parameter

            // Conditionally add the plan parameter if it exists
            // const redirectUrl = planParam
            //   ? `/select-plan?user=${response.data.user._id}&plan=${planParam}`
            //   : `/select-plan?user=${response.data.user._id}`;

            history('/login');
          }
        } catch (error) {
          if (
            error.response &&
            error.response.data &&
            error.response.data.message
          ) {
            setValidationError(error.response.data.message);
          } else {
            setValidationError("Internal Server Error");
          }
          toast({
            title: "Sign up error.",
            description:
              error.response?.data?.message ??
              "Unable to sign up. Please try again later.",
            status: "error",
            duration: 5000,
            isClosable: true,
          });
        }
        setIsLoading(false);
      }
    };

    const handleChange = (e) => {
      const { id, value } = e.target;

      setSignUpData({
        ...signUpData,
        [id]: value,
      });
    };
    
  return (
    <AuthScreen>
      <div className="flex flex-col gap-4 sm:mx-28 sm:w-[360px]">
        <div className="flex flex-col gap-1">
          <h1 className="text-4xl font-normal">Sign Up</h1>
          <p className="text-xs">
            Get started in less than 5 minutes and experience the ease of
            savings and investment.
          </p>
        </div>
        <form className="flex flex-col gap-1 sm:gap-2" onSubmit={handleSubmit}>
          <FormInput
            label="First Name*"
            id="firstName"
            type="text"
            placeholder="Enter your first name"
            autoComplete="first-name"
            onChange={handleChange}
            required
          />

          <FormInput
            label="Last Name*"
            id="lastName"
            type="text"
            placeholder="Enter your last name"
            autoComplete="last-name"
            onChange={handleChange}
            required
          />

          <FormInput
            label="Email"
            id="email"
            type="email"
            placeholder="Enter your email"
            autoComplete="email"
            onChange={handleChange}
            value={signUpData.email}
            required
          />

          <FormInput
            label="Phone Number"
            id="phoneNumber"
            type="text"
            placeholder="Enter your phone number"
            autoComplete="phone-number"
            onChange={handleChange}
            required
          />

          <FormInput
            label="NIN"
            id="nin"
            type="text"
            placeholder="Enter your nin"
            autoComplete="nin-number"
            onChange={handleChange}
            required
          />

          <FormInput
            label="Enter Password*"
            id="password"
            type="password"
            placeholder="Create a password"
            autoComplete="current-password"
            onChange={handleChange}
            hint={
              signUpData.password && signUpData.password.length < 8
                ? "Must be at least 8 characters"
                : ""
            }
            required
          />

          <FormInput
            label="Confirm Password*"
            id="confirmPassword"
            type="password"
            placeholder="Enter password again"
            autoComplete="confirm-password"
            onChange={handleChange}
            hint={
              signUpData.confirmPassword &&
              signUpData.password !== signUpData.confirmPassword
                ? "Must match chosen password"
                : ""
            }
            error={signUpData.password !== signUpData.confirmPassword}
            required
          />

          <div className="flex items-center justify-between mt-1">
            <button
              className="w-full bg-[#101c4e] text-white py-2 rounded-md sm:h-11 text-sm"
              type="submit"
            >
              {isLoading ? (
                <div className="spinner">
                  <Spinner />
                </div>
              ) : (
                "Get started"
              )}
            </button>
          </div>
        </form>
        <div className="items-center text-center text-gray-400 text-sm">
          <p className="text-md">
            Already have an account?{" "}
            <span
              className="text-primary cursor-pointer"
              onClick={() => history("/login")}
            >
              Log in
            </span>
          </p>
        </div>
      </div>
    </AuthScreen>
  );
};

export default Register;
