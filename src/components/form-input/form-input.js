import React from 'react';
import './form-input.scss'

const FormInput = ({ onChange, label, ...otherInputProps }) => {
	return (
		<div className="group">
			<input className="form-input" onChange={onChange} {...otherInputProps} />
			{label ? (
				<label className={`${otherInputProps.value.length ? 'shrink' : ''} form-input-label`}>{label}</label>
			) : null}
		</div>
	);
};

export default FormInput;
