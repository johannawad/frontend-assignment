import React from 'react';
import './DropdownMenu.css';
import {highlightQueryMatch} from '../../utils/textFormatter';

const DropdownMenu = ({items, query}) => {
    return (
        <div className="menu">
            {items?.map((item, index) => 
                <li className="menu__item" key={index}>
                    <div className="menu__item__content">
                        {item.title? highlightQueryMatch(item.title, query): null}
                        {item.quantity? ` (${item.quantity})`: null}
                    </div>
                </li>
            )}
        </div>
    )
}

export default DropdownMenu;