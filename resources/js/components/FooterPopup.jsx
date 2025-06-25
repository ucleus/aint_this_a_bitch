import React, { useState } from 'react';

export default function FooterPopup() {
    const [open, setOpen] = useState(false);
    const year = new Date().getFullYear();

    return (
        <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 text-center">
            <button
                className="rounded-full bg-white shadow p-2"
                onClick={() => setOpen(!open)}
            >
                ^
            </button>
            <div
                className={`transition-transform duration-300 ease-in-out bg-white shadow mt-2 p-4 rounded ${open ? 'translate-y-0' : 'translate-y-full'}`}
                style={{ height: '12rem' }}
            >
                <p>Designed & built with ❤️ + 🤖 by <a href="https://seanblake.info" target="_blank">Sean</a></p>
                <p>© {year}</p>
            </div>
        </div>
    );
}
