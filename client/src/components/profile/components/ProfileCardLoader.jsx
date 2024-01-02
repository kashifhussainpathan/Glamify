import React from "react";
import { Button, Skeleton } from "@ui";
import { FaEdit } from "react-icons/fa";

const ProfileCardLoader = () => {
  return (
    <div>
      <div>
        <div className="w-full h-[200px] max-md:h-[100px]">
          <Skeleton classes="w-full h-full object-cover rounded" />
        </div>

        <Skeleton classes="w-[150px] h-[150px] rounded-full mt-[-70px] mx-auto max-md:h-[70px] max-md:w-[70px] max-md:mt-[-35px]" />
      </div>

      <div className="flex flex-col gap-1 items-center justify-center mt-3">
        <Skeleton classes="h-6 w-28" />
        <Skeleton classes="h-4 w-28" />
      </div>

      <div className="flex justify-center mt-4">
        <Button className="flex items-center">
          <FaEdit className="mr-2" /> <span>Edit </span>
        </Button>

        <Button>Logout</Button>
      </div>
    </div>
  );
};

export default ProfileCardLoader;
