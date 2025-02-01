import React, { useState } from "react";
import { textContent } from "../../../content";

const ScrollBox: React.FC = () => {
  const [catNames, setCatNames] = useState(textContent.dialog.catNames);

  const handleRemove = (name: string) => {
    setCatNames(catNames.filter((catName) => catName !== name));
  };

  return (
    <div className="max-h-64 overflow-y-auto p-4 border border-gray-300 rounded">
      <ul>
        {catNames.map((name) => (
          <li key={name} className="py-1 flex justify-between items-center">
            {name}
            <button
              onClick={() => handleRemove(name)}
              className="ml-4 bg-red-500 text-white px-2 py-1 rounded hover:bg-red-400"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ScrollBox;
