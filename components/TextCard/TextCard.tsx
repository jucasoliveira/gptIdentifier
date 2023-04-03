"use client";

import React, { useState } from "react";

const TextCard = () => {
  const [text, setText] = useState("");

  async function handleSubmit() {
    const endpoint = "/api/verify";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text }),
    };
    const response = await fetch(endpoint, options);
    const result = await response.json();
    alert(`Is this text generated by AI? ${result.isGenerated ? "Yes" : "No"}`);
  }

  function handleInputChange(event: {
    target: { value: React.SetStateAction<string> };
  }) {
    setText(event.target.value);
  }
  return (
    <div className="bg-white shadow-md rounded-md p-6">
      <div className="relative">
        <textarea
          value={text}
          onChange={handleInputChange}
          placeholder="Enter text to check for AI and ChatGPT Plagiarism"
          name="textArea"
          id="textArea"
          rows={12}
          className="bg-white w-full h-48 px-4 py-2 text-base text-gray-700 placeholder-gray-600 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500"
        ></textarea>
      </div>
      <div className="mt-4">
        <button
          className="w-full px-4 py-2 text-base font-semibold text-center text-white bg-indigo-500 rounded-md shadow-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          onClick={handleSubmit}
        >
          Detect Text
        </button>
      </div>
    </div>
  );
};

export default TextCard;