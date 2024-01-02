import React, { useState } from "react";

const Address = () => {
  const initialFormData = {
    fullName: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    postalCode: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [editMode, setEditMode] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform validation if needed

    // Save or update the address details (you can add your logic here)
    console.log("Form submitted:", formData);

    // Clear the form and exit edit mode
    setFormData(initialFormData);
    setEditMode(false);
  };

  const handleEdit = () => {
    // Enter edit mode and populate the form with existing data
    setEditMode(true);
  };

  const handleClear = () => {
    // Clear the form
    setFormData(initialFormData);
    setEditMode(false);
  };

  return (
    <div className="bg-gray-100 mt-6 p-6 rounded-md shadow-md">
      <h2 className="text-xl font-semibold mb-4 max-md:text-lg">
        Address Details
      </h2>
      {true && (
        <div className="max-md:text-sm">
          No address found, please add a address.
        </div>
      )}
      {/* <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-4">
          <div className="mb-4">
            <label
              htmlFor="fullName"
              className="block text-sm font-medium text-gray-600"
            >
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="mt-1 p-2 border rounded-md w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="addressLine1"
              className="block text-sm font-medium text-gray-600"
            >
              Address Line 1
            </label>
            <input
              type="text"
              id="addressLine1"
              name="addressLine1"
              value={formData.addressLine1}
              onChange={handleChange}
              className="mt-1 p-2 border rounded-md w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="addressLine2"
              className="block text-sm font-medium text-gray-600"
            >
              Address Line 2
            </label>
            <input
              type="text"
              id="addressLine2"
              name="addressLine2"
              value={formData.addressLine2}
              onChange={handleChange}
              className="mt-1 p-2 border rounded-md w-full"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="city"
              className="block text-sm font-medium text-gray-600"
            >
              City
            </label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="mt-1 p-2 border rounded-md w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="state"
              className="block text-sm font-medium text-gray-600"
            >
              State
            </label>
            <input
              type="text"
              id="state"
              name="state"
              value={formData.state}
              onChange={handleChange}
              className="mt-1 p-2 border rounded-md w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="postalCode"
              className="block text-sm font-medium text-gray-600"
            >
              Postal Code
            </label>
            <input
              type="text"
              id="postalCode"
              name="postalCode"
              value={formData.postalCode}
              onChange={handleChange}
              className="mt-1 p-2 border rounded-md w-full"
              required
            />
          </div>
        </div>
        <div className="flex items-center justify-between mt-4">
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded-md"
          >
            {editMode ? "Update" : "Save"}
          </button>
          {editMode ? (
            <button
              type="button"
              onClick={handleClear}
              className="text-gray-500 ml-2"
            >
              Clear
            </button>
          ) : (
            <button
              type="button"
              onClick={handleEdit}
              className="text-gray-500 ml-2"
            >
              Edit
            </button>
          )}
        </div>
      </form> */}
    </div>
  );
};

export default Address;
