import { useRef, useState } from "react";
import { useDispatch } from "react-redux";

import { Button, Skeleton } from "../@ui";
import { email, username } from "@constants";
import FormInput from "../formInput/FormInput";
import { useUserState, useToken } from "@hooks";
import { updateUserDetails, updateAvatar } from "@redux";

import { FaEdit, FaSave, FaCamera } from "react-icons/fa";

const ProfileCard = () => {
  const dispatch = useDispatch();
  const fileInputRef = useRef(null);

  const { token } = useToken();
  const {
    updateUserDetailsStatus,
    currentUser: user,
    updateAvatarStatus,
  } = useUserState();

  const [avatar, setAvatar] = useState();
  const [avatarPreview, setAvatarPreview] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [updatedDetails, setUpdatedDetails] = useState({
    username: user?.username,
    email: user?.email,
  });

  const handleUserDetailsChange = (e) => {
    const { name, value } = e.target;
    setUpdatedDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleEditClick = () => {
    setUpdatedDetails(user);
    setIsEditing(true);
  };

  const handleSaveClick = async () => {
    setIsEditing(false);
    if (updatedDetails !== user && avatar) {
      await dispatch(updateUserDetails({ token, updatedDetails }));
      await dispatch(updateAvatar({ avatar, token }));
    } else if (updatedDetails === user && avatar) {
      console.log("here");
      await dispatch(updateAvatar({ avatar, token }));
    } else if (updatedDetails !== user && !avatar) {
      await dispatch(updateUserDetails({ token, updatedDetails }));
    }

    setAvatar("");
    setAvatarPreview("");
  };

  const handleLogoutClick = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  const handleCameraIconClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];

    if (selectedFile) {
      setAvatar(selectedFile);

      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatarPreview(reader.result);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  return (
    <div>
      <div>
        <div className="w-full h-[200px] max-md:h-[100px]">
          <img
            src="https://plchldr.co/i/500x250?bg=bebebe&text=Cover-Image"
            alt="cover-image"
            className="w-full h-full object-cover rounded"
          />
        </div>
        <div className="mx-auto relative w-[150px]">
          {updateAvatarStatus === "loading" ? (
            <Skeleton
              classes={`w-[150px] h-[150px] rounded-full mt-[-70px] mx-auto max-md:h-[70px] max-md:w-[70px] max-md:mt-[-35px]`}
            />
          ) : (
            <img
              src={avatar ? avatarPreview : user?.avatar}
              alt="User avatar"
              className="w-[150px] h-[150px] rounded-full mt-[-70px] mx-auto max-md:h-[70px] max-md:w-[70px] max-md:mt-[-35px] object-cover"
            />
          )}

          {isEditing && (
            <div className="absolute bottom-2 right-2 p-2 rounded-full bg-white shadow border max-md:p-1 max-md:right-9 cursor-pointer">
              <input
                type="file"
                ref={fileInputRef}
                style={{ display: "none" }}
                onChange={handleFileChange}
              />
              <FaCamera
                onClick={handleCameraIconClick}
                className="max-md:text-[10px]"
              />
            </div>
          )}
        </div>
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
            {updateUserDetailsStatus === "loading" ? (
              <Skeleton classes="h-5 w-32" />
            ) : (
              user?.username
            )}
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
          <div className="text-gray-500">
            {updateUserDetailsStatus === "loading" ? (
              <Skeleton classes="h-4 w-32" />
            ) : (
              user?.email
            )}
          </div>
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

        <Button onClick={handleLogoutClick}>Logout</Button>
      </div>
    </div>
  );
};

export default ProfileCard;
