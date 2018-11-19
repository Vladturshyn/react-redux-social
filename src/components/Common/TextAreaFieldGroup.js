import React from 'react';
//import classnames from 'classnames';
import propTypes from 'prop-types';

const TextAreaFieldGroup = ({
    name,
    placeholder,
    value,
    errors,
    onChange
}) => {
  return (
    <div>
        <textarea
            name={name}
            placeholder={placeholder}
            value={value} 
            onChange={onChange}/>
        {errors && <span>{errors}</span>}
    </div>
  )
}

TextAreaFieldGroup.propTypes = {
    name: propTypes.string.isRequired,
    placeholder: propTypes.string,
    value: propTypes.string.isRequired,
    error: propTypes.object,
    onChange: propTypes.func.isRequired,
}

export default TextAreaFieldGroup;
