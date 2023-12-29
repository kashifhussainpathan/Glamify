import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { getUser } from "@redux";
import { useCartState, useUserState, useToken } from "@hooks";
import { Address, ProfileCard, ToggleSigninSignup } from "@components";

const Profile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { token } = useToken();
  const { cart } = useCartState();
  const { currentUser: user } = useUserState();

  useEffect(() => {
    if (!user) dispatch(getUser({ token }));
  }, []);

  if (!user) {
    return <ToggleSigninSignup />;
  }

  return (
    <div className="container mx-auto my-8 flex justify-center">
      <div className="lg:w-3/4 bg-white p-4 rounded-md shadow-lg">
        <ProfileCard />

        <Address />

        <div className="bg-gray-100 p-6 rounded-md shadow-md mt-4">
          <h2 className="text-xl font-semibold mb-4 max-md:text-lg">
            Order Details
          </h2>
          <div className="max-md:text-sm">
            You haven't placed an order yet. We invite you to explore our
            collection and discover something special for yourself.
            <p
              className="text-blue-500 underline cursor-pointer"
              onClick={() => navigate("/cart")}
            >
              Place Order..
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
