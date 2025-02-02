export interface Work {
	period: string;
	position: string;
	descriptions: string[];
	tech: string[];
}

 const works: Work[] = [
	{
		period: '2025 January - Present',
		position: 'Junior Software Developer · Portabel Health',
		descriptions:
			['• Collaborating in a fast-paced, startup environment to design, develop, and maintain full-stack solutions using Spring Boot (backend) and Angular (frontend).','• Setup Flyway for database schema migrations, ensuring robust version control and smooth updates in the backend.','• Designing, building and maintaining cloud architecture.','• Automated code building and testing on Azure Pipelines,accelerating the process by 80% Creating and managing Network Security Groups for Virtual Machines and Virtual Networks for security purposes'],
		tech: [
			'Java',
			'SpringBoot',
			'Javascript',
			'Typescript',
			'Angular',
			'Azure',
			'Flyway',
			'Docker',
			'Supabase',
		],
	},
	{
		period: '2024 September - 2024 December',
		position: 'Java Fullstack Developer Consultant · School of Applied Technology </salt>',
		descriptions:
			['• Developed a secure, team-based proxy service for managing API calls in enterprise applications, ensuring efficient and safe data handling.','• Created the Prompt Master Game, leveraging AI to generate images from text prompts and integrating ImageKit cloud storage to automatically store generated images.','• Spring Framework (Spring Core, Spring MVC, Spring Security, Spring Data JPA).','• Gained hands-on experience with full-stack development, building both frontend and backend systems using Java, JavaScript, ReactJS, and Spring Boot.'],
		tech: [
			'Java',
			'SpringBoot',
			'Javascript',
			'Typescript',
			'React',
			'Azure',
			'Tailwind CSS',
			'Docker',
			'PostgreSQL',
		],
	},
	{
		period: '2022 June - 2023 July',
		position: 'Business Technology Analyst (DevOps)-DELOITTE CONSULTING.',
		descriptions:
			['• Specialized in DevOps for Salesforce environments, proposing environment and organizational strategies to clients for seamless production releases.','• Built and optimized CI/CD pipelines using tools Copado, Azure DevOps, and Bitbucket to automate code deployments.','• Collaborated with development, testing, and operations teams to enhance workflows, improve delivery processes, and boost system reliability.'],
		tech: [
			'Salesforce',
			'CI/CD',
			'Azure Devops',
			'Bitbucket Pipelines',
			'Copado',
		],
	},
];

export default works;
