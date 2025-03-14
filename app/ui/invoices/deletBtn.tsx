// ClientDeleteButton.tsx
"use client";

import { useState } from 'react';
import { TrashIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';

export default function ClientDeleteButton() {
    // State to control visibility of the button
    const [hidden, setHidden] = useState(false);

    // Hide the button when clicked
    const handleClick = () => {
        setHidden(true);
    };

    return (
        <button
            type="submit"
            onClick={handleClick}
            className={clsx("rounded-md border p-2 hover:bg-gray-100", { hidden: hidden })}
        >
            <span className="sr-only">Delete</span>
            <TrashIcon className="w-4" />
        </button>
    );
}
