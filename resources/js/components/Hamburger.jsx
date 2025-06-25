import React from 'react';

export default function Hamburger({ onClick, open }) {
    return (
        <button
            className="fixed top-4 left-4 z-50 w-15 h-15 rounded-full bg-white shadow"
            onClick={onClick}
        >
            <span className={open ? 'transform rotate-45' : ''}>☰</span>
        </button>
    );
}
