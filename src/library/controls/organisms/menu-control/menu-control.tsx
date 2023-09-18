'use client';

import { faHouseChimney } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import DropdownMenu, { MenuItem } from './dropdown-menu';

export interface MenuWrapperProps {
    menus: MenuItem[];
}

const MenuControl: React.FC<MenuWrapperProps> = ({ menus }) => {
    return (
        <div className="flex space-x-4">
            <div className="ps-6 pt-2 w-2/12 align-middle">
                <Link href={`/`}>
                    <FontAwesomeIcon className="cursor-pointer text-white hover:text-blue-700 w-5 h-5" icon={faHouseChimney} title="Edit Action" />
                </Link>
            </div>
            {menus.map((menu, index) => (
                <DropdownMenu key={index} menuData={menu} />
            ))}
        </div>
    );
};

export default MenuControl;
