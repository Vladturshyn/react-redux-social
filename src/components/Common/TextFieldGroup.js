import React from 'react';
//import classnames from 'classnames';
import propTypes from 'prop-types';

const TextFieldGroup = ({
    name,
    placeholder,
    value,
    label,
    errors,
    info,
    type,
    onChange,
    disabled
}) => {
  return (
    <div>
        <input
            type={type}
            name={name}
            placeholder={placeholder}
            value={value} 
            onChange={onChange}
            disabled={disabled}/>
        {info && <span>{info}</span>}
        {errors && <span>{errors}</span>}
    </div>
  )
}

TextFieldGroup.propTypes = {
    name: propTypes.string.isRequired,
    placeholder: propTypes.string,
    value: propTypes.string.isRequired,
    label: propTypes.string,
    error: propTypes.string,
    info: propTypes.string,
    type: propTypes.string.isRequired,
    onChange: propTypes.func.isRequired,
    disabled: propTypes.string,
}
TextFieldGroup.defaultProps = {
    type: 'name'
}

export default TextFieldGroup;
