export interface Work {
	period: string;
	position: string;
	descriptions: string[];
	tech: string[];
}

 const works: Work[] = [
	{
		period: '2024 - PRESENT',
		position: 'Java Fullstack Developer Consultant · School of Applied Technology </salt>',
		descriptions:
			['Intensive three month training program for full stack web development with a focus on TDD, mob programming, and applied learning. Acquired solid foundation in Java and frameworks such as SpringBoot and React. Hands-on experience utilizing Docker, Github Actions and Azure. Built a fullstack Receipt handling app with Java, Springboot, Typescript, React, Azure (Azure SQL, Azure App Service, Azure Blob Storage).','Following the bootcamp, I joined Salt’s Post Graduate Program (PGP), where I continue to upskill daily by working on real-world applications and solutions. As part of a collaborative team, I focus on building diverse applications to address various industry challenges, applying my technical expertise, and refining my problem-solving skills.'],
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
		period: '2024 - PRESENT',
		position: 'Business Technology Analyst (DevOps)-DELOITTE CONSULTING.',
		descriptions:
			[' During my time at Deloitte Consulting as a Business Technology Analyst, I specialized in DevOps for Salesforce environments. I worked on proposing environment and organizational strategies to clients, ensuring successful production releases. I implemented robust CI/CD pipelines using tools like Copado, Azure DevOps, and Bitbucket to automate the deployment of code across various environments. I collaborated closely with development, testing, and operations teams to optimize workflows, enhance delivery processes, and identify areas for performance improvements to increase system reliability.'],
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
