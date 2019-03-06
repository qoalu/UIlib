import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { select } from '@storybook/addon-knobs';

import {
	SUCCESS, DANGER, WARNING, PRIMARY, NEUTRAL
} from 'src/utils/constants';

import { GROUPS } from '/.storybook/hierarchySeparators';

// import withTests from '../../utils/withTests';
import Badge from './Badge';

const options = {
	SUCCESS,
    DANGER,
    WARNING,
    PRIMARY,
    NEUTRAL,
	None: null
};

storiesOf(`${GROUPS.COMPONENTS}|Badge`, module)
  .add(
  	'Default Badge',
	() => <Badge color={select('Color', options, SUCCESS)}>Badge Text</Badge>, { info: 'Additional text' }
  )
  .add(
    'Circular Badge',
	  () => <Fragment>
			  <Badge circle>1</Badge>
			  <Badge circle>12</Badge>
			  <Badge circle>88</Badge>
		    </Fragment>,
			{ info: 'Additional text' }
  );
