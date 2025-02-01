import React from "react";
import { text } from "stream/consumers";

interface Paragraph  {
    text: string;
}

const StyledParagraph: React.FC<Paragraph> = ({text})=>{
    return (
        <p className="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">{text}</p>
    );
}

export default StyledParagraph