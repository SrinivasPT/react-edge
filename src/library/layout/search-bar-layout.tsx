import { faCircleMinus, faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { isNil } from 'lodash';
import React, { useState } from 'react';

const SearchBarLayout = (props: any) => {
    const [isCollapsed, setIsCollapsed] = useState(false);

    if (isNil(props.title)) return <>{props.children}</>;

    return (
        <div className="block rounded-lg bg-white hover:shadow-md transition-shadow duration-300 ease-in-out w-full border mb-3">
            <div
                className={`border-b border-gray-200 ps-6 pt-2 pb-2 bg-zinc-50 flex justify-between items-center ${
                    !isCollapsed ? 'text-center' : ''
                }`}
            >
                <h3 className={`${isCollapsed ? 'text-left flex-grow' : ''} mb-2 text-md font-semibold text-gray-700 uppercase`}>{props.title}</h3>

                {isCollapsed && (
                    <div className="flex flex-grow ps-6 justify-end space-x-2">
                        {React.Children.toArray(props.children?.props?.children).slice(0, 2)}
                    </div>
                )}

                <button onClick={() => setIsCollapsed(!isCollapsed)} className="px-3 py-1">
                    {isCollapsed ? <FontAwesomeIcon icon={faCirclePlus} /> : <FontAwesomeIcon icon={faCircleMinus} />}
                </button>
            </div>

            {!isCollapsed && <div className="p-6">{props.children}</div>}
        </div>
    );
};

export default SearchBarLayout;
