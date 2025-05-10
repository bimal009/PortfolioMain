import React from "react";
import Image from "next/image";

const Footer = () => {
    return (
        <footer className="py-8 px-4 sm:px-6 md:px-12 border-t border-white/5">
            <div className="max-w-6xl mx-auto flex flex-col items-center">
                <div className="w-12 h-12 relative mb-4">
                    <Image
                        src="/logo.svg"
                        alt="Logo"
                        fill
                        sizes="48px"
                        className="object-contain"
                    />
                </div>

                <p className="text-gray-400 text-sm text-center">
                    © {new Date().getFullYear()} Bimal Pandey. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;