import React, { Component } from "react";
import PropTypes from "prop-types";

import styled, { css } from "react-emotion";

// import Badge from "../Badge/Badge";

const ButtonRaw = React.memo(function ButtonRaw(props) {
	return (
		<button className={props.className} disabled={props.disabled && "disabled"}>
			{props.children}
		</button>
	);
});

const baseStyles = ({ theme }) => css`
	color: #1f2931;
	font-size: ${theme.typography.fontSize.m};
	line-height: ${theme.typography.fontSize.m};
	border: 0;
	cursor: pointer;
	user-select: none;

	&:focus {
	}

	&:hover {
		color: ${theme.colors.lb500};
	}

	&:disabled {
		color: ${theme.colors.t300};
		background-color: #e2e6eb;
		cursor: default;

		&:hover {
			color: ${theme.colors.t300};
			background-color: #e2e6eb;
		}
	}

	${theme.component_presets.button}
`;

const primaryStyles = ({ theme, primary }) =>
	primary &&
	css`
		label: button--primary;
		background-color: ${theme.colors.lb500};
		color: #ffffff;

		&:hover {
			background-color: ${theme.colors.lb900};
			color: #ffffff;
		}

		&:focus {
			outline-style: dashed;
			outline-color: ${theme.colors.lb900};
			outline-width: 1px;
			outline-offset: 0;
			// box-shadow: 0 0 0 2pt ${theme.colors.lb900};
		}
	`;

const compactStyles = ({ theme, compact }) =>
	compact &&
	css`
		label: button--compact;
		padding: 8px 10px;
		height: 30px;
	`;

const blockLevelStyles = ({ theme, spread }) =>
	spread &&
	css`
		label: button--block;
		display: block;
		width: 100%;
	`;

const levelStyles = ({ theme, level }) => {
	let cssString = ``;
	switch (level) {
		case "error":
		case "danger":
			cssString = `
					background-color: ${theme.colors.errorbg};
					color: ${theme.colors.error};
					
					&:hover {
							background-color: ${theme.colors.errorbghover};
							color: ${theme.colors.error};
					}
				`;
			break;
		case "success":
		case "safe":
			cssString = `
					background-color: ${theme.colors.successbg};
					color: ${theme.colors.success};
					
					&:hover {
							background-color: ${theme.colors.successbghover};
							color: ${theme.colors.success};
					}
				`;
			break;
		case "warning":
		case "caution":
			cssString = `
					background-color: ${theme.colors.warningbg};
					color: ${theme.colors.warning};
					
					&:hover {
							background-color: ${theme.colors.warningbghover};
							color: ${theme.colors.warning};
					}
				`;
			break;
		default:
			break;
	}
	return css(cssString);
};

const loadingStyles = ({ theme, loading }) =>
	loading &&
	css`
		label: button--loading;
		position: relative;
		cursor: default;
		text-shadow: none !important;
		color: transparent !important;
		pointer-events: none;

		&:before {
			position: absolute;
			content: "";
			top: 50%;
			left: 50%;
			margin: -0.64285714em 0 0 -0.64285714em;
			width: 1.28571429em;
			height: 1.28571429em;
			border-radius: 500rem;
			border: 0.2em solid rgba(0, 0, 0, 0.15);
		}

		&:after {
			position: absolute;
			content: "";
			top: 50%;
			left: 50%;
			margin: -0.64285714em 0 0 -0.64285714em;
			width: 1.28571429em;
			height: 1.28571429em;
			animation: button-spin 0.6s linear;
			animation-iteration-count: infinite;
			border-radius: 500rem;
			border-color: #fff transparent transparent;
			border-style: solid;
			border-width: 0.2em;
			box-shadow: 0 0 0 1px transparent;
		}

		@keyframes button-spin {
			from {
				-webkit-transform: rotate(0);
				transform: rotate(0);
			}

			to {
				-webkit-transform: rotate(360deg);
				transform: rotate(360deg);
			}
		}
	`;

const ButtonStyled = styled(ButtonRaw)`
	${baseStyles}

	${primaryStyles};

	${compactStyles}

	${blockLevelStyles}
	
	${levelStyles}
	
	${loadingStyles}
`;

const Button = props => <ButtonStyled {...props} />;

Button.propTypes = {
	/** disabled button */
	disabled: PropTypes.bool,
	/** action, called after clicking on the button */
	onClick: PropTypes.func,
	/** A button can be formatted to show different levels of emphasis. */
	primary: PropTypes.bool,
	/** Give a semantic color to the button */
	level: PropTypes.oneOf(["success", "warning", "error", "danger", "safe"]),
	/** Signifies if button is in loading state */
	loading: PropTypes.bool,
	/** Take the whole width of container */
	spread: PropTypes.bool,
	/** Width size */
	// hsize: PropTypes.oneOf([1, 2, 3, "fluid"]),
	/** Height size */
	// vsize: PropTypes.oneOf(["s", "m"])
	/** classNames to pass, *escape hatch* */
	className: PropTypes.string
};
Button.defaultProps = {};

export default Button;

const style = {
	primary: primaryStyles,
	level: levelStyles,
	loading: loadingStyles,
	spread: blockLevelStyles
};

export { style };
