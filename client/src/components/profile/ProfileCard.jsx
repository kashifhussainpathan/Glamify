import { useState } from "react";
import { useDispatch } from "react-redux";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { Button } from "../@ui";
import { updateUserDetails } from "@redux";
import { email, username } from "@constants";
import { useUserState, useToken } from "@hooks";

import { FaEdit, FaSave } from "react-icons/fa";
import FormInput from "../formInput/FormInput";

const ProfileCard = () => {
  const dispatch = useDispatch();

  const { token } = useToken();
  const { status, currentUser: user } = useUserState();

  const [isEditing, setIsEditing] = useState(false);
  const [updatedDetails, setUpdatedDetails] = useState({});

  const handleUserDetailsChange = (e) => {
    const { name, value } = e.target;
    setUpdatedDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleEditClick = () => {
    setUpdatedDetails(user);
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    if (updatedDetails !== user) {
      dispatch(updateUserDetails({ token, updatedDetails }));
    }
    setIsEditing(false);
  };

  return (
    <div className="">
      <div className="">
        <div>
          <div className="w-full h-[200px] max-md:h-[100px]">
            <img
              src="https://plchldr.co/i/500x250?bg=bebebe&text=Cover-Image"
              alt="cover-image"
              className="w-full h-full object-cover rounded"
            />
          </div>
          <img
            src={user?.avatar}
            alt="User Avatar"
            className="w-[150px] h-[150px] rounded-full mt-[-70px] mx-auto max-md:h-[70px] max-md:w-[70px] max-md:mt-[-35px]"
          />
        </div>

        <div className="flex flex-col gap-1 items-center justify-center mt-3">
          {isEditing ? (
            <div>
              <FormInput
                {...username}
                value={updatedDetails?.username}
                onChange={handleUserDetailsChange}
              />
            </div>
          ) : (
            <h3 className="text-lg font-semibold">
              {status === "loading" ? <Skeleton width={100} /> : user?.username}
            </h3>
          )}
          {isEditing ? (
            <div>
              <FormInput
                {...email}
                value={updatedDetails?.email}
                onChange={handleUserDetailsChange}
              />
            </div>
          ) : (
            <p className="text-gray-500">
              {status === "loading" ? <Skeleton width={100} /> : user?.email}
            </p>
          )}
        </div>

        <div className="flex justify-center mt-4">
          {isEditing ? (
            <Button onClick={handleSaveClick} className="flex items-center">
              <FaSave className="mr-2" /> <span> Save </span>
            </Button>
          ) : (
            <Button onClick={handleEditClick} className="flex items-center">
              <FaEdit className="mr-2" /> <span>Edit </span>
            </Button>
          )}

          <Button onClick={handleEditClick}>Logout</Button>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
