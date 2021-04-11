/* eslint-disable max-len */
interface IProject{
  name: string;
  url: string;
  description: string;
  tags: string[];
}

interface IDate{
  day: string;
  month: string;
  year: string;
}

interface IDateRange{
  startDate: IDate;
  endDate: IDate;
}

interface IExperience{
  companyName: string;
  designation: string;
  duration: IDateRange;
}

interface ISkill{
  languages: string[];
  frameworks: string[];
  tools: string[];
  design: string[];
}

interface IProfile{
  name: string;
  intro: string;
  email: string;
  bio: string[];
  skills?: ISkill;
  experiences?: IExperience[];
  projects?: IProject[];
}

const profile : IProfile = {
  name: 'Shahzada Fahad Ashraf',
  intro: 'Pro Bono Programming Career Consultant and Full Stack Developer',
  email: 'sh.fahadashraf@gmail.com',
  bio: ['I am a Software Engineer, Designer, and Web Developer currently living in Lahore, Pakistan.',
    'My interests range from UI/UX Designing to Web Development.'],
  skills: {
    languages: ['Javascript (ES6)', 'TypeScript', 'HTML', 'CSS/Sass', 'SQL'],
    frameworks: ['React', '.NET'],
    tools: ['Git', 'Postman', 'Chrome DevTools'],
    design: ['Figma', 'Sketch', 'Adobe Photoshop', 'Adobe Illustrator'],
  },
  experiences: [
    {
      companyName: 'Conrad Labs',
      designation: 'Full Stack Developer',
      duration: {
        startDate: {
          day: '',
          month: 'May',
          year: '2020',
        },
        endDate: {
          day: '',
          month: '',
          year: 'Present',
        },
      },
    },
    {
      companyName: 'CureMD Research & Development',
      designation: 'Software Engineer',
      duration: {
        startDate: {
          day: '',
          month: 'July',
          year: '2017',
        },
        endDate: {
          day: '',
          month: 'May',
          year: '2020',
        },
      },
    },
    {
      companyName: 'PUCIT - ACM Student Chapter',
      designation: 'Graphic Designer',
      duration: {
        startDate: {
          day: '',
          month: '',
          year: '2015',
        },
        endDate: {
          day: '',
          month: '',
          year: '2017',
        },
      },
    },
    {
      companyName: 'Graphic Designer',
      designation: 'PITB | Plan9 Tech Incubator',
      duration: {
        startDate: {
          day: '',
          month: '',
          year: '',
        },
        endDate: {
          day: '',
          month: '',
          year: '2015',
        },
      },
    },
  ],
  projects: [
    {
      name: 'Red Velvet Cupcake | VSCode Theme',
      url: 'https://marketplace.visualstudio.com/items?itemName=fahadachaudhry.velvet-cupcake-theme',
      description: 'Red Velvet Cupcake is a playful VSCode theme. Currently available on Microsoft VSCode Marketplace.',
      tags: ['yomen', 'css', 'json'],
    },
    {
      name: 'Valary | VSCode Theme',
      url: 'https://marketplace.visualstudio.com/items?itemName=fahadachaudhry.valary',
      description: 'Valary is an immersive Dark Theme for VSCode. Currently available on Microsoft VSCode Marketplace.',
      tags: ['yomen', 'css', 'json'],
    },
  ],
};

const getProfileData = () => profile;

export default getProfileData;
