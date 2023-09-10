import Link from 'next/link';
import { useState } from 'react';

const MenuComponent = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative">
            {/* Header Button */}
            <button onClick={() => setIsOpen(!isOpen)} className="bg-gray-900 text-white px-4 py-2 rounded hover:bg-gray-800">
                Admin
            </button>

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
    );
};

export default MenuComponent;
