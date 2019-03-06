import React from "react";
import { configure, addDecorator } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import { withInfo } from "@storybook/addon-info";
import { withNotes } from "@storybook/addon-notes";
import { setOptions } from "@storybook/addon-options";
import { ThemeProvider } from "emotion-theming";

import { standard, se_theme } from "src/themes";
import createGlobalStyles from "src/styles/global.styles";

if (true) {
	createGlobalStyles({ theme: se_theme });
}

setOptions({
	hierarchySeparator: /\//,
	hierarchyRootSeparator: /\|/,
	name: "UIlib",
	url: "https://github.com/"
});

const req = require.context("../src/components", true, /\.story\.js$/);

const withStoryStyles = storyFn => {
	return (
		<div
			style={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				height: "100vh"
			}}
		>
			{storyFn()}
		</div>
	);
};

const withThemeProvider = storyFn => (
	<ThemeProvider theme={se_theme}>{storyFn()}</ThemeProvider>
);

addDecorator(withInfo);

const loadStories = () => {
	addDecorator(withKnobs);
	addDecorator(withStoryStyles);
	addDecorator(withThemeProvider);
	addDecorator(withNotes);
	req.keys().forEach(filename => req(filename));
};

configure(loadStories, module);
