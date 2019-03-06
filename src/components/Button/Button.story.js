import React, { Fragment } from "react";
import { storiesOf } from "@storybook/react";
import { select } from "@storybook/addon-knobs";

import Button from "./";

import { GROUPS } from "/.storybook/hierarchySeparators";
// import withTests from "../../utils/withTests";

storiesOf(`${GROUPS.COMPONENTS}|Button`, module)
	.add("Default Button", () => <Button type="text">Button text</Button>, {
		info: "Info text",
		notes: ""
	})
	.add("Compact Button", () => (
		<Button type="text" compact>
			Button text
		</Button>
	))
	.add("Primary Button", () => (
		<Button type="text" primary>
			Button text
		</Button>
	))
	.add("Disabled Button", () => (
		<Button type="text" disabled>
			Button text
		</Button>
	))
	.add("Loading Button", () => (
		<Button type="text" loading>
			Button text
		</Button>
	));
