import React from 'react';
import './Input.scss';

const Input = ({ breadcrumb, title, rightContent }) => (
    <div>
        <input type="text"/>
        <ul>
            {
                breadcrumb.map((item, i) => (
                    <li key={item.link}>{item.link}</li>
                ))
            }

        </ul>
    </div>
);


Input.defaultProps = {
    // breadcrumb: [{link:"1"},{link:"2"},{link:"3"}],
    breadcrumb:[]
};

Input.propTypes = {
    // attr: PropTypes.string,
    // data: PropTypes.arrayOf(PropTypes.any),
};

export default Input;
