'use client';

import Link from 'next/link';
import { useState } from 'react';

export interface MenuItem {
    label: string;
    route?: string;
    items?: MenuItem[];
}

export interface DropdownMenuProps {
    menuData: MenuItem;
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ menuData }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isHoveringDropdown, setIsHoveringDropdown] = useState(false);
    let hoverTimeout: any;

    const handleTriggerMouseEnter = () => {
        clearTimeout(hoverTimeout);
        setIsOpen(true);
    };

    const handleTriggerMouseLeave = () => {
        hoverTimeout = setTimeout(() => {
            if (!isHoveringDropdown) {
                setIsOpen(false);
            }
        }, 300); // 300ms delay
    };

    const handleDropdownMouseEnter = () => {
        setIsHoveringDropdown(true);
    };

    const handleDropdownMouseLeave = () => {
        setIsHoveringDropdown(false);
        // If user leaves dropdown, consider closing it after a delay
        hoverTimeout = setTimeout(() => {
            setIsOpen(false);
        }, 300);
    };

    return (
        <div className="relative w-1/12" onMouseEnter={handleTriggerMouseEnter} onMouseLeave={handleTriggerMouseLeave}>
            <div className="bg-gray-900 text-white px-4 py-2 rounded hover:bg-gray-800">{menuData.label}</div>

            {isOpen && (
                <div
                    className="absolute top-full mt-2 w-64 bg-white shadow-lg rounded z-10"
                    onMouseEnter={handleDropdownMouseEnter}
                    onMouseLeave={handleDropdownMouseLeave}
                >
                    {menuData.items?.map((item, index) =>
                        item.items ? (
                            <DropdownMenu key={index} menuData={item} />
                        ) : (
                            <Link key={index} href={item.route as string} passHref>
                                <div className="cursor-pointer block px-4 py-2 text-black hover:bg-gray-100">{item.label}</div>
                            </Link>
                        )
                    )}
                </div>
            )}
        </div>
    );
};

export default DropdownMenu;
