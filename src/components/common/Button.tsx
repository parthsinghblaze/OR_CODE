import React from 'react';

function Button({ handleClick, text, variant }: any) {

    if(variant === 'outline') {
        return (
            <button
                className="flex justify-center rounded border border-stroke px-6 py-2 font-medium text-black hover:shadow-1 dark:border-strokedark dark:text-white"
                onClick={() => handleClick() || console.log("CLICKED")}

            >
                {text}
            </button>
        );
    }

    if(variant === 'container') {
        return (
            <button
                className="flex justify-center rounded border border-stroke bg-indigo-400 px-6 py-2 font-medium text-black hover:shadow-1 dark:border-strokedark dark:text-white"
                onClick={() => handleClick() || console.log("CLICKED")}

            >
                {text}
            </button>
        )
    }
}

export default Button;
