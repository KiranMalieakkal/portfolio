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
			'POP helps users store and organize receipts digitally, making them fully searchable and accessible. It automatically fills in bill details, and includes a tax wizard that simplifies regulations and helps uncover tax deductions.',
		project_link: 'https://salmon-sand-0f5314103.5.azurestaticapps.net/',
		github_link: 'https://github.com/KiranMalieakkal/POP',
	},
	{
		name: 'TripTrail',
		img_link: triptrailImage,
		description:
			'TripTrail is  designed to help users track and save details of all the trips they haveve taken. The app features an interactive map that highlights countries you have visited, allowing you to visually explore your travel history. Perfect for travel enthusiasts who want to keep a record of their adventures in a simple and engaging way.',
		project_link: 'https://kiranmalieakkal.github.io/TripTrail/',
		github_link: 'https://github.com/KiranMalieakkal/TripTrail',
	},
	{
		name: 'PromptMaster',
        img_link: promptMasterImage,
		description:
			'PromptMaster is an exciting and interactive game where users are challenged to type a creative prompt that generates an image matching a pre-selected target image. Players will then receive a score based on how closely their generated image aligns with the target image, using AI image generation technology.',
		project_link: 'https://salt-community.github.io/promptmaster/',
		github_link: 'https://github.com/salt-community/promptmaster',
	},
];