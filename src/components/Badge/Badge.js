import * as React from 'react';
import PropTypes from 'prop-types';
import styled, {css} from 'react-emotion';
import { size } from 'polished';
import { values } from 'lodash/fp';

// import { subHeadingKilo } from '../../styles/style-helpers';
// import { colorNames } from '../../styles/constants';
import {
	SUCCESS, DANGER, WARNING, PRIMARY, NEUTRAL
} from 'src/utils/constants';
export const colorNames = { SUCCESS, DANGER, WARNING, PRIMARY, NEUTRAL };

const COLOR_MAP = {
  [colorNames.SUCCESS]: {
    default: 'g500',
    hover: 'g700',
    active: 'g900'
  },
  [colorNames.WARNING]: {
    default: 'y500',
    hover: 'y700',
    active: 'y900'
  },
  [colorNames.DANGER]: {
    default: 'r500',
    hover: 'r700',
    active: 'r900'
  },
  [colorNames.PRIMARY]: {
    default: 'b500',
    hover: 'b700',
    active: 'b900'
  },
  [colorNames.NEUTRAL]: {
    default: 'n500',
    hover: 'n700',
    active: 'n900'
  }
};

const colorStyles = ({ theme, color, onClick }) => {
  const currentColor = COLOR_MAP[color];

  if (!currentColor) {
    return null;
  }

  return css`
    label: badge--${color};
    background-color: ${theme.colors[currentColor.default]};
    ${onClick &&
      `
      &:hover {
        background-color: ${theme.colors[currentColor.hover]};
      }

      &:active {
        background-color: ${theme.colors[currentColor.active]};
      }
    `};
  `;
};

const baseStyles = ({ theme, onClick }) => css`
  label: badge;
  border-radius: 100px;
  color: ${theme.colors.white};
  cursor: ${onClick ? 'pointer' : 'default'};
  display: inline-block;
  padding: 0 10px;
  font-size: ${theme.typography.fontSize.s};
  font-weight: ${theme.typography.fontWeight.bold};
  text-transform: uppercase;
  user-select: none;
`;

const circleStyles = ({ circle }) =>
  circle &&
  css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
  `;

/**
 * A badge for displaying update notifications etc.
 */
const BadgeStyled = styled('div')`
  ${baseStyles};
  ${colorStyles};
  ${circleStyles};
`;

const Badge = props => <BadgeStyled {...props} />;

Badge.NEUTRAL = colorNames.NEUTRAL;
Badge.PRIMARY = colorNames.PRIMARY;
Badge.SUCCESS = colorNames.SUCCESS;
Badge.WARNING = colorNames.WARNING;
Badge.DANGER = colorNames.DANGER;

let colors = values(colorNames).toString().split(',');
console.log('colors',colors);
let colors2 = [
	'success',
	'danger',
	"warning",
	"primary",
	"neutral"
];
console.log('colors2',colors2);

Badge.propTypes = {
  /** Callback for the click event. */
  onClick: PropTypes.func,
  /** Ensures text is centered and the badge looks like a circle. */
  circle: PropTypes.bool,
  /**  Background color */
  color: PropTypes.oneOf(colors2)
};

Badge.defaultProps = {
  circle: false,
  color: 'neutral'
};

/**
 * @component
 */
export default Badge;
