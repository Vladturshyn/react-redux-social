import React from 'react';
//import classnames from 'classnames';
import propTypes from 'prop-types';

const SelectListGroup = ({
    name,
    value,
    errors,
    onChange,
    options
}) => {
  return (
    <div>
        <select name={name} value={value} onChange={onChange}>
            {options.map(option => 
                <option 
                    key={option.label} 
                    value={option.value}> 
                {option.label}
                </option>)}
        </select>
        {errors && <span>{errors}</span>}
    </div>
  )
}

SelectListGroup.propTypes = {
    name: propTypes.string.isRequired,
    value: propTypes.string.isRequired,
    error: propTypes.object,
    onChange: propTypes.func.isRequired,
    options: propTypes.array.isRequired
}

export default SelectListGroup;
