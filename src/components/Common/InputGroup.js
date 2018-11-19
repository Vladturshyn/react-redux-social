import React from 'react';
//import classnames from 'classnames';
import propTypes from 'prop-types';

const InputGroup = ({
    name,
    placeholder,
    value,
    errors,
    icon,
    type,
    onChange
}) => {
  return (
    <div>
        <input
            type={type}
            name={name}
            placeholder={placeholder}
            value={value} 
            onChange={onChange}/>
        {errors && <span>{errors}</span>}
    </div>
  )
}

InputGroup.propTypes = {
    name: propTypes.string.isRequired,
    placeholder: propTypes.string,
    value: propTypes.string.isRequired,
    error: propTypes.object,
    type: propTypes.string.isRequired,
    onChange: propTypes.func.isRequired,
    icon: propTypes.string
}
InputGroup.defaultProps = {
    type: 'text'
}

export default InputGroup;