import { faHouseChimney } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { useState } from 'react';

const MenuComponent = () => {
    const [isOpen, setIsOpen] = useState(false);
    let hoverTimeout: any;

    const handleMouseEnter = () => {
        clearTimeout(hoverTimeout);
        setIsOpen(true);
    };

    const handleMouseLeave = () => {
        hoverTimeout = setTimeout(() => {
            setIsOpen(false);
        }, 300); // 300ms delay to cater for minor "gaps" in user movement
    };

    return (
        <div className="relative">
            <div className="flex align-middle">
                <div className="ps-6 pt-2 w-2/12 align-middle">
                    <Link href={`/`}>
                        <FontAwesomeIcon
                            className="cursor-pointer text-white hover:text-blue-700 w-5 h-5"
                            icon={faHouseChimney}
                            title="Edit Action"
                        />
                    </Link>
                </div>
                <div className="w-8" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    {/* Header Button */}
                    <div className="bg-gray-900 text-white px-4 py-2 rounded hover:bg-gray-800">Admin</div>

                    {/* Dropdown */}
                    {isOpen && (
                        <div className="absolute top-full mt-2 w-64 bg-white shadow-lg rounded z-10">
                            <Link href="/admin/control-master" passHref>
                                <div className="cursor-pointer block px-4 py-2 text-black hover:bg-gray-100">Control Master</div>
                            </Link>
                            <Link href="/admin/form-builder/form" passHref>
                                <div className="cursor-pointer block px-4 py-2 text-black hover:bg-gray-100">Form Builder</div>
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default MenuComponent;
