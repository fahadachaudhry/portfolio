/* eslint-disable max-len */
export interface ISocial{
  name: 'LinkedIn' |
  'Behance' |
  'Github' |
  'Instagram' |
  'Facebook';
  url: string;
}

export interface ICertification{
  name: string;
  issuedBy: string;
  verificationURL: string;
}

export interface IProject{
  imageUrl?: string;
  name: string;
  companyName: string;
  url: string;
  description: string[];
  tags: string[];
}

// export interface IDate{
//   day: string;
//   month: string;
//   year: string;
// }

// export interface IDateRange{
//   startDate: IDate;
//   endDate: IDate;
// }

export interface IExperience{
  companyName: string;
  endDate: string;
  position: string;
  startDate: string;
  summary: string;
  website: string;
}

export interface ISkill{
  languages: string[];
  frameworks: string[];
  tools: string[];
  design: string[];
  devtools: string[];
}

export interface IStudent{
  avatar: string;
  name: string;
  quote: string;
}

export interface IProfile{
  name: string;
  intro: string;
  skills?: ISkill;
  phone: string;
  email: string;
  socials: ISocial[];
  bio: string[];
  students?: IStudent[];
  experiences?: IExperience[];
  certifications?: ICertification[];
  projects?: IProject[];
}

const profile : IProfile = {
  name: 'Shahzada Fahad Ashraf',
  intro: 'Pro Bono Programming Career Consultant and Full Stack Developer',
  students: [
    {
      name: 'Awais Zafar',
      avatar: 'https://media-exp1.licdn.com/dms/image/C5103AQHNewoR5FzCaQ/profile-displayphoto-shrink_400_400/0/1587200960601?e=1623888000&v=beta&t=mquh0pdkolkg1VWbpkIKU2BlskgnfJSyNhTxyowWVU8',
      quote: 'Learning to crawl, walk, run and fly.',
    },
    {
      name: 'Umair Zafar',
      avatar: 'https://media-exp1.licdn.com/dms/image/C4D03AQEnZr7IWnstyQ/profile-displayphoto-shrink_400_400/0/1615956840787?e=1623888000&v=beta&t=HtxlJheHPxhmfW9J0M7gxlzDcG0yAtsuKcmPWBjxNCY',
      quote: 'Mechanical Engineer turned Front-End Engineer',
    },
    {
      name: 'Muhammad Naeem Shahzad',
      avatar: 'https://media-exp1.licdn.com/dms/image/C4D03AQEpvSpnRoE2fQ/profile-displayphoto-shrink_400_400/0/1615923251107?e=1623888000&v=beta&t=zMxgT_UcKU8T_S-bcV1pgwEtuCybrwQGmbssd5NZY-A',
      quote: 'Front-End Developer at Uncle Fixer',
    },
    {
      name: 'Ailyah Christopher',
      avatar: 'https://media-exp1.licdn.com/dms/image/C4D03AQFtX6s0y9aMjw/profile-displayphoto-shrink_400_400/0/1615563401157?e=1625097600&v=beta&t=lBw3lei20-m5lL147KACGlYzXbQYAds0uoc6bdMxDKg',
      quote: 'Python Enthusiast',
    },
    {
      name: 'Ahmad Muzzafar',
      avatar: '',
      quote: 'Learning to crawl, walk, run and fly.',
    },
    {
      name: 'Muhammad Shahzeb',
      avatar: '',
      quote: 'Learning to crawl, walk, run and fly.',
    },
  ],
  phone: '+923249496639',
  socials: [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/fahadachaudhry',
    },
    {
      name: 'Behance',
      url: 'http://www.behance.com/fahadachaudhry',
    },
    {
      name: 'Github',
      url: 'http://www.github.com/fahadachaudhry',
    },
    {
      name: 'Instagram',
      url: 'http://www.instagram.com/fahadachaudhry',
    },
    {
      name: 'Facebook',
      url: 'http://www.facebook.com/fahadachaudhry',
    },
  ],
  email: 'sh.fahadashraf@gmail.com',
  bio: ['I am a Software Engineer, Designer, and Web Developer currently living in Lahore, Pakistan.',
    'My interests range from UI/UX Designing to Web Development.'],
  skills: {
    languages: ['Javascript (ES6)', 'TypeScript', 'HTML', 'CSS/Sass', 'SQL'],
    frameworks: ['React', '.NET'],
    tools: ['Git', 'Postman', 'Chrome DevTools'],
    design: ['Figma', 'Sketch', 'Adobe Photoshop', 'Adobe Illustrator'],
    devtools: ['VSCode', 'Visual Studio', 'Webstorm'],
  },
  experiences: [
    {
      companyName: 'Conrad Labs',
      endDate: '',
      position: 'Software Engineer',
      startDate: '2020-05-31',
      summary: 'Conrad Labs is a company that helps startups breathe a technological life into their idea!\n\nMy responsibilities include:\n1. Engaging with the client to gather and analyze requirements. \n2. Actively indulge in Application Infrastructure Design and Development.',
      website: 'https://www.linkedin.com/company/conrad-labs/',
    },
    {
      companyName: 'CureMD Research and Development',
      endDate: '2020-05-31',
      position: 'Software Engineer (Full Stack .NET Developer)',
      startDate: '2017-08-31',
      summary: 'CureMD is a Cloud-based EHR, EMR, and Medical Billing Solution for the United States Medical System.\n\nAs a Software Engineer at CureMD, I served in development and support roles for Billing, Reports, Problem lists, and Referrals Modules.',
      website: 'https://www.linkedin.com/company/curemd/',
    },
    {
      companyName: 'CureMD Research and Development',
      endDate: '2018-07-31',
      position: 'Assistant Software Engineer',
      startDate: '2017-08-31',
      summary: 'While working as an Assistant Software Engineer, my responsibilities included the Platform-independence of Reports module in cross-browser environments by converting ASP Classic pages to ASP .NET Web Forms & VB Scripts to JavaScript/JQuery.',
      website: 'https://www.linkedin.com/company/curemd/',
    },
    {
      companyName: 'PUCIT - ACM Student Chapter',
      endDate: '2017-12-31',
      position: 'Lead Developer',
      startDate: '2016-12-31',
      summary: 'Acting as a Lead Developer, my job was to supervise the creation and maintenance of PASC\'s website built on Wordpress CMS.',
      website: 'https://www.linkedin.com/company/pucit-acm-student-chapter/',
    },
    {
      companyName: 'PUCIT - ACM Student Chapter',
      endDate: '2016-12-31',
      position: 'Graphic Designer',
      startDate: '2015-12-31',
      summary: 'As a Graphic Designer, my job at PASC was to design eye-catching designs that represented the chapter and its ideology.',
      website: 'https://www.linkedin.com/company/pucit-acm-student-chapter/',
    },
    {
      companyName: 'Punjab University College of Information Technology, Lahore',
      endDate: '2017-12-31',
      position: 'Teacher Assistant',
      startDate: '2013-12-31',
      summary: 'In the apprenticeship of Sir Imran Khalil, I was given the opportunity to assist the bright minds of the future in their Programming Fundamentals Course. This opportunity served me as a benchmark to learn crowd management and presentational skills.',
      website: 'https://www.linkedin.com/company/punjab-university-college-of-information-technology-lahore/',
    },
    {
      companyName: 'Plan9 - PITB\'s Tech Incubator',
      endDate: '2015-10-31',
      position: 'Graphic Designer',
      startDate: '2015-07-31',
      summary: 'At Trequant, my job was to create the export interface for their Bio-tech prototype - which consisted of a wrist-watch. Also, my job was to make designs for their Social Media Marketing campaign and for their website.',
      website: 'https://www.linkedin.com/company/plan9---pitbs-tech-incubator/',
    },
    {
      companyName: 'Geniusity',
      endDate: '2014-03-31',
      position: 'Web Development Intern',
      startDate: '2013-09-30',
      summary: 'While working for Geniusity, I learned languages such as HTML, CSS and JavaScript. I also had my Graphics designing training and worked my way towards the field of UI/UX Development.',
      website: 'https://www.linkedin.com/company/geniusity/',
    },
  ],
  certifications: [{
    name: 'Front End Libraries',
    issuedBy: 'freeCodeCamp',
    verificationURL: 'https://www.freecodecamp.org/certification/fahadachaudhry/front-end-libraries',
  },
  {
    name: 'JavaScript Algorithms and Data Structures',
    issuedBy: 'freeCodeCamp',
    verificationURL: 'https://www.freecodecamp.org/certification/fahadachaudhry/javascript-algorithms-and-data-structures',
  },
  ],
  projects: [
    {
      name: 'Red Velvet Cupcake | VSCode Theme',
      imageUrl: 'https://images.unsplash.com/photo-1524135329990-07660cd5bf10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=701&q=80',
      companyName: '',
      url: 'https://marketplace.visualstudio.com/items?itemName=fahadachaudhry.velvet-cupcake-theme',
      description: ['Red Velvet Cupcake is a playful VSCode theme. Currently available on Microsoft VSCode Marketplace.'],
      tags: ['Yeoman', 'CSS', 'JSON'],
    },
    {
      name: 'Valary | VSCode Theme',
      imageUrl: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      companyName: '',
      url: 'https://marketplace.visualstudio.com/items?itemName=fahadachaudhry.valary',
      description: ['Valary is an immersive Dark Theme for VSCode. Currently available on Microsoft VSCode Marketplace.'],
      tags: ['Yeoman', 'CSS', 'JSON'],
    },
    {
      name: 'Innovation Projects',
      imageUrl: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      companyName: 'CureMD Research and Development',
      url: '',
      description: ['I have proposed and successfully developed the following projects as personal innovative suggestions at CureMD Research & Development:',
        '1. Revamping the referrals module by User export interface reusability/flexibility and limiting the content flow on screen for the user to avoid overcrowdedness of information.',
        '2. Users prompt reduction to enhance interruption-free user experience in the Superbill module.',
        '3. Development of a dashboard to resolve client requests(L3s) at a decreased SLA.',
      ],
      tags: ['.NET', 'JS', 'CSS', 'HTML'],
    },
    {
      name: 'Billing Rule Engine - Expert System',
      imageUrl: 'https://images.unsplash.com/photo-1578496479763-c21c718af028?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80',
      companyName: 'CureMD Research and Development',
      url: '',
      description: ['In this project, we enabled the doctors to identify and rectify insurance-claim rejections at the appointment stage which is far earlier than the billing stage, using a C# based web service. This step reduced the insurance-claims rejections drastically and improved the overall efficiency of the billing process.'],
      tags: ['.NET', 'JS', 'CSS', 'HTML'],
    },
  ],
};

const getProfileData = () => profile;

export default getProfileData;
