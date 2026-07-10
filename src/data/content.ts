export const meta = {
	title: 'Mateusz Laskowski — React Native Developer',
	description:
		'Portfolio of Mateusz Laskowski, a React Native Developer who has built, shipped, and maintained five apps for iOS and Android.',
};

export const identity = {
	name: 'Mateusz Laskowski',
	role: 'Mobile product developer',
	location: 'Warsaw',
	email: 'mat.laskowski.kontakt@gmail.com',
	linkedIn: 'https://www.linkedin.com/in/mateusz-l-16321b310/',
	github: 'https://github.com/matcane',
	cv: '',
};

export const heroContact = {
	intent: 'Open to mobile roles',
	contactCta: 'Get in touch ↗',
	workLabel: 'See flagship work ↓',
	discussLabel: 'Discuss a mobile role ↗',
};

export const flagship = {
	index: '01',
	name: 'T-Up',
	status: 'Published · maintained',
	platforms: 'iOS + Android',
	summary:
		"A cross-platform men's wellness app for habits around exercise, nutrition, sleep, stress management, and lifestyle.",
	results: [
		{ value: '5,000+', label: 'downloads' },
		{ value: '130-200', label: 'weekly organic Google Play installs' },
	],
	contribution: [
		'Full mobile codebase ownership as the product evolved',
		'Auth, subscriptions, push, and data integrations',
		'Store releases, monitoring, fixes, and maintenance',
	],
	stack: ['React Native', 'TypeScript', 'Expo', 'Expo Router', 'Supabase', 'React Query'],
	playUrl: 'https://play.google.com/store/apps/details?id=com.azzteco.tup',
	storeUrl: 'https://apps.apple.com/us/app/t-up-boost-testosterone/id6757311278',
};

export const shippedProducts = [
	{
		index: '02',
		name: 'Hair Studio',
		platform: 'iOS',
		date: 'May 2026',
		highlight: 'On-device face analysis · privacy-aware image flow · RevenueCat',
		storeUrl: 'https://apps.apple.com/app/hair-try-on-ai-styles/id6761934608',
	},
	{
		index: '03',
		name: 'AstroNova',
		platform: 'Android',
		date: 'Apr 2025',
		highlight: 'First complete Google Play release · ~100 downloads',
		playUrl: 'https://play.google.com/store/apps/details?id=com.azzteco.astro.nova',
	},
	{
		index: '04',
		name: 'Christmas Cards AI',
		platform: 'iOS',
		date: 'Holiday 2025',
		highlight: 'AI generation · save · share',
		storeUrl: 'https://apps.apple.com/us/app/christmas-cards-greetings-ai/id6755625843',
	},
	{
		index: '05',
		name: 'Couples Questions',
		platform: 'iOS',
		date: 'Feb 2026',
		highlight: 'No account or subscription · same-device gameplay',
		storeUrl: 'https://apps.apple.com/us/app/couples-questions-games/id6757876851',
	},
];

export const toolkit = [
	{
		title: 'Build',
		items: ['TypeScript', 'React Native', 'Expo', 'Expo Router', 'Responsive UI'],
	},
	{
		title: 'Data & backend',
		items: ['React Query', 'Zustand', 'Zod', 'Supabase', 'REST APIs', 'JWT sessions'],
	},
	{
		title: 'Mobile integrations',
		items: [
			'Google + Apple sign-in',
			'RevenueCat',
			'Push notifications',
			'Deep links',
			'Secure local storage',
		],
	},
	{
		title: 'Ship & observe',
		items: ['EAS Build', 'App Store', 'Google Play', 'Sentry', 'PostHog', 'Production debugging'],
	},
];

export const experience = {
	role: 'React Native Developer',
	dates: 'Jan 2025 — present',
	context: 'Azzteco · own products · informal two-person product team',
	summary:
		'Started with shared development, then gradually took full ownership of mobile while the other team member focused on marketing and growth.',
	responsibilities: [
		'Build mobile products and handle auth, subscription, push, and data integrations',
		'Test on physical devices, create builds, and submit releases to both stores',
		'Monitor production, investigate issues, ship fixes, and maintain released apps',
	],
};

export const education = [
	{
		degree: 'MSc in Computer Science',
		school: 'University of Warmia and Mazury in Olsztyn',
		dates: 'Mar 2024 — Jun 2025',
	},
	{
		degree: 'BSc in Computer Science',
		school: 'University of Warmia and Mazury in Olsztyn',
		dates: 'Oct 2020 — Feb 2024',
	},
];

export const languages = [
	{ language: 'Polish', level: 'Native' },
	{ language: 'English', level: 'B2' },
];
