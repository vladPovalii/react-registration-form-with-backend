import React from 'react';
import Select from 'react-select';


class ExtSelect extends Select {

	renderValue = (valueArray, isOpen) => {
		var _this4 = this;

		var renderLabel = this.props.valueRenderer || this.getOptionLabel;
		var ValueComponent = this.props.valueComponent;
		if (!valueArray.length) {
			if (!this.state.inputValue) {
				return isOpen ? React.createElement(
					'div',
					{ className: 'Select-actual-placeholder' },
					this.props.placeholder
				) : React.createElement(
					'div',
					{ className: 'Select-placeholder' },
					this.props.placeholder
				)
			} else {
				return null;
			}

		}
		var onClick = this.props.onValueClick ? this.handleValueClick : null;
		if (this.props.multi) {
			return valueArray.map(function (value, i) {
				return React.createElement(
					ValueComponent,
					{
						id: _this4._instancePrefix + '-value-' + i,
						instancePrefix: _this4._instancePrefix,
						disabled: _this4.props.disabled || value.clearableValue === false,
						key: 'value-' + i + '-' + value[_this4.props.valueKey],
						onClick: onClick,
						onRemove: _this4.removeValue,
						value: value
					},
					renderLabel(value, i),
					React.createElement(
						'span',
						{ className: 'Select-aria-only' },
						' '
					)
				);
			});
		} else if (!this.state.inputValue) {
			if (isOpen) onClick = null;
			if (this.props.showPlaceholderWithValue) {
				return React.createElement(
					'span',
					{},
					React.createElement(
						'div',
						{ className: 'Select-actual-placeholder' },
						this.props.placeholder,
					),
					React.createElement(
						ValueComponent,
						{
							id: this._instancePrefix + '-value-item',
							disabled: this.props.disabled,
							instancePrefix: this._instancePrefix,
							onClick: onClick,
							value: valueArray[0]
						},
						renderLabel(valueArray[0])
					)
				);
			} else {
				return React.createElement(
					ValueComponent,
					{
						id: this._instancePrefix + '-value-item',
						disabled: this.props.disabled,
						instancePrefix: this._instancePrefix,
						onClick: onClick,
						value: valueArray[0]
					},
					renderLabel(valueArray[0])
				);
			}
		}
	}
}

export default ExtSelect;