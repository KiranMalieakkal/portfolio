import popImage from '../assets/POP_Project.png'
import triptrailImage from '../assets/TripTrail_Project.png'
import promptMasterImage from '../assets/Prompt_Project.png'

export interface Project {
	name: string;
	img_link?: string;
	description: string;
	project_link: string;
	github_link: string;
}

export const projects: Project[] = [
	{
		name: 'Proof Of Purchase',
        img_link: popImage,
		description:
			'Receipt handling and tex deduction app built with React and SpringBoot.',
		project_link: 'https://salmon-sand-0f5314103.5.azurestaticapps.net/',
		github_link: 'https://github.com/KiranMalieakkal/POP',
	},
	{
		name: 'TripTrail',
		img_link: triptrailImage,
		description:
			'A trip handling app crafted with React, TypeScript, SpringBoot, Tailwind CSS, DaisyUI & Figma.',
		project_link: 'https://kiranmalieakkal.github.io/TripTrail/',
		github_link: 'https://github.com/KiranMalieakkal/TripTrail',
	},
	{
		name: 'PromptMaster',
        img_link: promptMasterImage,
		description:
			'A AI image generation game crafted with React, TypeScript, SpringBoot, Tailwind CSS, DaisyUI & Figma.',
		project_link: 'https://salt-community.github.io/promptmaster/',
		github_link: 'https://github.com/salt-community/promptmaster',
	},
];