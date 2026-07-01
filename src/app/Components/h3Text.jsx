import React from 'react';
import { Outfit } from "next/font/google";
const outfit = Outfit({
  subsets: ["latin"],
});

const H3Text = ({children}) => {
    return (
        <div>
            <h3 className={`${outfit.className} font-bold text-4xl text-center text-white`}>{children}</h3>
        </div>
    );
};

export default H3Text;