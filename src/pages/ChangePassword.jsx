import React, { useState } from "react";
import FormInput from "../components/FormInput";
import Spinner from "../components/Spinner/Spinner";
import { toast } from "react-toastify";
import apiClient from "../ApiClient/apiClient";

const ChangePassword = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [changePassword, setChangePassword] = useState({
    oldPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;

    setChangePassword({
      ...changePassword,
      [id]: value,
    });
  };

  const handleChangePassword = async (e) => {
    e.preventDefault();

    if (
      !changePassword.oldPassword ||
      !changePassword.newPassword ||
      !changePassword.confirmNewPassword
    ) {
      toast.error("Please fill in all fields.", { autoClose: 3000 });
      return;
    }

    if (changePassword.newPassword !== changePassword.confirmNewPassword) {
      toast.error("Passwords do not match.", { autoClose: 3000 });
      return;
    }
    setIsLoading(true);
    try {
      const token = localStorage.getItem("token");
      const response = await apiClient.post(
        "/v1/auth/changepassword",
        {
          oldPassword: changePassword.oldPassword,
          newPassword: changePassword.newPassword,
          confirmPassword: changePassword.confirmNewPassword,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.statusCode === 200) {
        toast.success("Password changed successfully!", { autoClose: 3000 });
        setChangePassword({
          password: "",
          newPassword: "",
          confirmNewPassword: "",
        });
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.", { autoClose: 3000 });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen p-3 max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto">
      <div className="flex mb-6">
        <h1 className="text-lg font-semibold">Change Password</h1>
      </div>
      <form
        className="flex flex-col gap-2 sm:gap-2"
        onSubmit={handleChangePassword}
      >
        <FormInput
          label="Old Password"
          id="oldPassword"
          type="password"
          placeholder="Enter your old password"
          autoComplete="old-password"
          onChange={handleChange}
          hint={
            changePassword.oldPassword && changePassword.oldPassword.length < 8
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
            changePassword.newPassword && changePassword.newPassword.length < 8
              ? "Must be at least 8 characters"
              : ""
          }
          required
        />

        <FormInput
          label="Confirm Password"
          id="confirmNewPassword"
          type="password"
          placeholder="confirm new password"
          autoComplete="new-password"
          onChange={handleChange}
          hint={
            changePassword.confirmNewPassword &&
            changePassword.newPassword !== changePassword.confirmNewPassword
              ? "Must match chosen password"
              : ""
          }
          error={
            changePassword.newPassword !== changePassword.confirmNewPassword
          }
          required
        />

        <div className="flex items-center justify-between mt-4">
          <button
            className="w-full bg-[#101c4e] text-white py-2 rounded-md sm:h-11 text-sm"
            type="submit"
            disabled={isLoading}
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
