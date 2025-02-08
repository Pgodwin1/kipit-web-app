import React from "react";

const DeleteSavingsModal = ({ handleDelete, setIsDelete }) => {
  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-[70%] p-6">
        <p>Are you sure you want to delete this savings</p>
        <div className="flex justify-center gap-4 mt-4">
          <button
            className="border border-blue-400 rounded-lg px-2"
            onClick={() => setIsDelete(false)}
          >
            Cancel
          </button>
          <button
            className="border border-red-500 rounded-lg  px-2"
            onClick={handleDelete}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteSavingsModal;
