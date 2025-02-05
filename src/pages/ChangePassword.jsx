import React, { useState } from "react";
import FormInput from "../components/FormInput";
import Spinner from "../components/Spinner/Spinner";

const ChangePassword = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [changePassword, setChangePassword] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;

    setChangePassword({
      ...changePassword,
      [id]: value,
    });
  };

  return (
    <div className="bg-gray-100 min-h-screen p-3">
      <div className="flex mb-6">
        <h1 className="text-lg font-semibold">Change Password</h1>
      </div>
      <form className="flex flex-col gap-2 sm:gap-2">
        <FormInput
          label="Old Password"
          id="oldPassword"
          type="password"
          placeholder="Enter your old password"
          autoComplete="old-password"
          hint={
            changePassword.password && changePassword.password.length < 8
              ? "Must be at least 8 characters"
              : ""
          }
          required
        />
        <FormInput
          label="New Password"
          id="newPassword"
          type="password"
          placeholder="Create a password"
          autoComplete="current-password"
          onChange={handleChange}
          hint={
            changePassword.password && changePassword.password.length < 8
              ? "Must be at least 8 characters"
              : ""
          }
          required
        />

        <FormInput
          label="Confirm Password"
          id="confirmPassword"
          type="password"
          placeholder="confirm password"
          autoComplete="confirm-password"
          onChange={handleChange}
          hint={
            changePassword.confirmPassword &&
            changePassword.password !== changePassword.confirmPassword
              ? "Must match chosen password"
              : ""
          }
          error={changePassword.password !== changePassword.confirmPassword}
          required
        />

        <div className="flex items-center justify-between mt-4">
          <button
            className="w-full bg-[#101c4e] text-white py-2 rounded-md sm:h-11 text-sm"
            type="submit"
          >
            {isLoading ? (
              <div className="spinner">
                <Spinner />
              </div>
            ) : (
              "Change Password"
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChangePassword;
