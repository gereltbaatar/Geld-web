"use client";
 
import React, { useState } from "react";
 
export const RecordCard = ({ onAddRecord }) => {
  const [transactionType, setTransactionType] = useState("EXP");
  const [records, setRecords] = useState({
    name: "",
    amount: "",
    transaction_type: transactionType,
    category_id: "",
    description: "",
    createdat: "",
    createdatTime: "",
  });
 
  const toggleTransactionType = (type) => {
    setTransactionType(type);
    setRecords((prev) => ({ ...prev, transaction_type: type }));
  };
 
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setRecords((prevRecords) => ({ ...prevRecords, [name]: value }));
  };
 
  const handleFormSubmit = async (event) => {
    event.preventDefault();
 
    try {
      const response = await fetch(`http://localhost:3030/records`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(records),
      });
 
      if (!response.ok)
        throw new Error(`HTTP error! Status: ${response.status}`);
 
      const data = await response.json();
      console.log("Record added successfully:", data);
      onAddRecord(data);
 
      // Reset the form after successful submission
      setRecords({
        name: "",
        amount: "",
        transaction_type: transactionType,
        category_id: "",
        description: "",
        createdat: "",
        createdatTime: "",
      });
 
      // Close the modal
      document.getElementById("my_modal_3").close();
    } catch (error) {
      console.error("Error adding record:", error);
    }
  };
 
  return (
    <div className="flex min-h-screen bg-gray-100">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-6 mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">
          Add Record
        </h2>
 
        <button
          className="mb-4 py-2 px-4 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition duration-200"
          onClick={() => document.getElementById("my_modal_3").showModal()}
        >
          Add Record
        </button>
 
        <dialog id="my_modal_3" className="modal">
          <div className="modal-box rounded-lg shadow-lg p-4">
            <form method="dialog" onSubmit={handleFormSubmit}>
              <button
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                type="button"
                onClick={() => document.getElementById("my_modal_3").close()}
              >
                ✕
              </button>
              <h3 className="font-bold text-lg text-center mb-4 text-gray-900">
                Add New Record
              </h3>
 
              <div className="flex mb-4">
                <button
                  className={`flex-1 py-2 font-semibold rounded-l-lg transition duration-200 ${
                    transactionType === "EXP"
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                  type="button"
                  onClick={() => toggleTransactionType("EXP")}
                >
                  Expense
                </button>
                <button
                  className={`flex-1 py-2 font-semibold rounded-r-lg transition duration-200 ${
                    transactionType === "INC"
                      ? "bg-green-500 text-white"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                  type="button"
                  onClick={() => toggleTransactionType("INC")}
                >
                  Income
                </button>
              </div>
 
              <div className="mb-4">
                <label className="block text-gray-700">Amount</label>
                <input
                  type="number"
                  name="amount"
                  value={records.amount}
                  onChange={handleInputChange}
                  placeholder="₮ 000"
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200"
                  required
                />
              </div>
 
              <div className="mb-4">
                <label className="block text-gray-700">Category</label>
                <select
                  name="category_id"
                  value={records.category_id}
                  onChange={handleInputChange}
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200"
                  required
                >
                  <option value="">Choose</option>
                  <option value="Food">Food</option>
                  <option value="Rent">Rent</option>
                </select>
              </div>
 
              <div className="flex mb-4">
                <div className="flex-1 pr-2">
                  <label className="block text-gray-700">Date</label>
                  <input
                    type="date"
                    name="createdat"
                    value={records.createdat}
                    onChange={handleInputChange}
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200"
                    required
                  />
                </div>
                <div className="flex-1 pl-2">
                  <label className="block text-gray-700">Time</label>
                  <input
                    type="time"
                    name="createdatTime"
                    value={records.createdatTime}
                    onChange={handleInputChange}
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200"
                    required
                  />
                </div>
              </div>
 
              <div className="mb-4">
                <label className="block text-gray-700">Payee</label>
                <input
                  type="text"
                  name="name"
                  value={records.name}
                  onChange={handleInputChange}
                  placeholder="Write here"
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200"
                  required
                />
              </div>
 
              <div className="mb-4">
                <label className="block text-gray-700">Note</label>
                <textarea
                  name="description"
                  value={records.description}
                  onChange={handleInputChange}
                  placeholder="Write here"
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200"
                  rows="3"
                />
              </div>
 
              <button
                type="submit"
                className={`w-full py-2 text-white font-semibold rounded-lg ${
                  transactionType === "EXP"
                    ? "bg-blue-600 hover:bg-blue-700"
                    : "bg-green-600 hover:bg-green-700"
                } transition duration-200`}
              >
                Add Record
              </button>
            </form>
          </div>
        </dialog>
      </div>
    </div>
  );
};
 
 