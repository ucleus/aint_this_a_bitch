import React from 'react';

export default function SideDrawer({ open, children }) {
    return (
        <div
            className={`fixed top-0 left-0 h-full w-72 bg-white shadow transform transition-transform ease-in-out duration-300 ${open ? 'translate-x-0' : '-translate-x-full'}`}
            style={{ zIndex: 1000 }}
        >
            {children}
        </div>
    );
}
