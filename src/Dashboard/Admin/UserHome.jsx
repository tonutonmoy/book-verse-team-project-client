import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const UserHome = () => {
  const { user, profileUpdate } = useContext(AuthContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    watch,
  } = useForm();

  const from = location?.state?.from?.pathname || "/dashboard/userHome";

  const updateProfile = (data) => {
    if (data !== "null") {
      const { name, url } = data;
      const imageUploadUrl = `https://api.imgbb.com/1/upload?key=${
        import.meta.env.VITE_Image_Upload_token
      }`;

      const coverForm = new FormData();
      coverForm.append("image", url[0]);

      fetch(imageUploadUrl, {
        method: "POST",
        body: coverForm,
      })
        .then((res) => res.json())
        .then((imageResponse) => {
          if (imageResponse.success) {
            const imageURL = imageResponse.data.display_url;
            const profile = { displayName: name, photoURL: imageURL };
            console.log(profile);
            profileUpdate(profile)
              .then(() => {
                reset();
                Swal.fire({
                  position: "center",
                  icon: "success",
                  title: "User updated successfully.",
                  showConfirmButton: false,
                  timer: 1500,
                });
                navigate(from, { replace: true });
              })
              .catch();
          }
        });
    }
  };

  console.log(user);
  return (
    <div className=" bg-slate-50 w-3/4 h-3/4 p-10 rounded shadow-xl border-t-2 border-[#d71d24]">
      <img className="rounded-full w-32 h-32" src={user?.photoURL} alt="" />
      <p className="font-bold text-xl text-[#d71d24] uppercase my-4">
        Name: <span className="font-normal">{user?.displayName}</span>
      </p>
      <p className="font-bold text-xl text-[#d71d24] uppercase mb-4">
        Email: <span className="lowercase font-normal">{user?.email}</span>
      </p>

      <label
        htmlFor="my_modal_7"
        onClick={() => window.my_modal_3.showModal()}
        className="primary-button"
      >
        Update Profile
      </label>
      <input type="checkbox" id="my_modal_7" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <div className="relative flex flex-col justify-center my-4 overflow-hidden">
            <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl lg:max-w-xl">
              <h1 className="text-3xl font-semibold text-center text-red uppercase">
                Update Profile
              </h1>
              <form onSubmit={handleSubmit(updateProfile)} className="mt-6">
                <div className="mb-2">
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-gray-800"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder={user?.displayName}
                    {...register("name", { required: true })}
                    className="block w-full px-4 py-2 mt-2 text-red bg-white border rounded-md focus:border-red focus:ring-red focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>
                {errors.name && <span className="error">Name is required</span>}
                <div className="mb-2">
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-gray-800"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder={user?.email}
                    {...register("email", { disabled: true })}
                    className="block w-full px-4 py-2 mt-2 text-red bg-white border rounded-md focus:border-red focus:ring-red focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>
                {/* {errors.email && <span className="error">Email is required</span>} */}
                <div className="mb-2">
                  <label
                    htmlFor="url"
                    className="block text-sm font-semibold text-gray-800"
                  >
                    Photo Url
                  </label>
                  <input
                    type="file"
                    id="url"
                    {...register("url")}
                    className="block   mt-2 text-red bg-white border rounded-md focus:border-red focus:ring-red focus:outline-none focus:ring focus:ring-opacity-40
                  input file-input file-input-bordered w-full "
                  />
                </div>
                {/* <div className="mb-2">
                <label
                  htmlFor="password"
                  className="block text-sm font-semibold text-gray-800"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters long",
                    },
                    pattern: {
                      value:
                        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{6,}$/,
                      message:
                        "Password must contain an uppercase letter, a lowercase letter, a number, and a special character",
                    },
                  })}
                  className="block w-full px-4 py-2 mt-2 text-red bg-white border rounded-md focus:border-red focus:ring-red focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
              {errors.password && (
                <span className="error">{errors.password.message}</span>
              )}
              <div className="mb-2">
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm font-semibold text-gray-800"
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  {...register("confirmPassword", {
                    validate: (value) =>
                      value === passwordValue || "Passwords do not match",
                  })}
                  className="block w-full px-4 py-2 mt-2 text-red bg-white border rounded-md focus:border-red focus:ring-red focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
              {errors.confirmPassword && (
                <span className="error">{errors.confirmPassword.message}</span>
              )} */}

                <div className="mt-6">
                  <button
                    type="submit"
                    className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-red rounded-md hover:bg-red focus:outline-none focus:bg-red"
                  >
                    Submit
                  </button>
                </div>
                
              </form>
            </div>
          </div>
        </div>
        <label className="modal-backdrop" htmlFor="my_modal_7">
          Close
        </label>
      </div>
    </div>
  );
};

export default UserHome;
