"use client";
import React from "react";

interface ViewUserButtonProps {
  userId: number;
}

const ViewUserButton: React.FC<ViewUserButtonProps> = ({ userId }) => {
  const handleClick = () => alert(`user id: ${userId}`);

  return (
    <>
      <button
        onClick={handleClick}
        className="underline text-purple-700 hover:text-purple-400"
      >
        Look user id
      </button>
    </>
  );
};

export default ViewUserButton;
