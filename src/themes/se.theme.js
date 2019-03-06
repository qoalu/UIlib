export const colors = {
	white: "#ffffff",

	// text
	t300: "#95B1CE",
	t500: "#6E7C88",
	t700: "#1F2931",

	// greens
	g300: "#69d05a",
	g400: "#61cb52",
	g500: "#5bc34c",
	g600: "#50b442",
	g700: "#46a838",
	g800: "#3f9d31",
	// reds
	r300: "#ff6736",
	r400: "#f75c2a",
	r500: "#f05129",
	r600: "#e94729",
	r700: "#e43f29",
	r800: "#d63924",
	// Neutrals
	n100: "#f3fafc",
	n300: "#e1e8ea",
	n400: "#d6e2e5",
	n500: "#cddbde",
	n600: "#bdccd0",
	n700: "#aebfc4",
	n800: "#9db3b9",
	sb300: "#3992ea",
	sb400: "#2782db",
	sb500: "#1772cb",
	sb600: "#1169bf",
	sb700: "#0d60b2",
	sb800: "#0856a2",
	// Link Blue, 500 is regular, 900 is high contrast
	lb300: "#86b7ff",
	lb400: "#6fa9ff",
	lb500: "#5d9dfc",
	lb600: "#5190ed",
	lb700: "#4584e2",
	lb800: "#3b79d6",
	lb900: "#3773cc",
	// Purples
	p300: "#c388f4",
	p400: "#bb7eed",
	p500: "#b174e3",
	p600: "#a566d8",
	p700: "#9658c9",
	p800: "#894eba",
	// Yellows
	y300: "#fdb234",
	y400: "#f0a629",
	y500: "#e99a29",
	y600: "#e49129",
	y700: "#e08a2a",
	y800: "#d48428",
	// SE Blues
	seB300: "#6f7afc",
	seB400: "#6570f7",
	seB500: "#5964f4",
	seB600: "#505beb",
	seB700: "#4954e3",
	seB800: "#434edb",

	success: "#5BC34C",
	successbg: "#F7FBF6",
	successbghover: "#ECF7EB",
	warning: "#FAAC5E",
	warningbg: "#FDFAF7",
	warningbghover: "#FCF5ED",
	error: "#F2685F",
	errorbg: "#FDF7F7",
	errorbghover: "#FFEDED"
};

export const links = {
	// links
	regular: colors.lb500,
	highcontrast: colors.lb900
};

export const typography = {
	primary: "'FontAwesome', 'Palanquin'",
	secondary: "'Nunito Sans', sans-serif",
	tertiary: "'Montserrat', sans-serif",
	icon: "'icomoon', 'FontAwesome'",
	baseFontSize: "10px",
	fontSize: {
		s: "12px",
		m: "14px",
		l: "16px",
		xl: "20px"
	},
	fontWeight: {
		light: "300",
		regular: "500",
		bold: "700"
	}
};

const component_presets = {
	button: `
		background-color: #F9F9F9;
  `,
	button: `
		background-color: #F2F5F8;
		color: #546E79;
		transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
		border-radius: 4px;
		height: 36px;
		padding: 11px 10px;
		
		&:hover {
			color: #5964F4;
			background-color: #E4EDF7;
		}
		`
};

const theme = {
	typography,
	colors,
	links,
	component_presets
};

export const themefunc = () => theme;
export default theme;
