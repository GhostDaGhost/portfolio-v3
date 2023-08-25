export const pages: string[] = ['About', 'Experience', 'Education', 'Projects', 'Contact'];

// API INFO FOR CONTACT FORM
export const contactAPIKey: string = '9e66aaa8-8293-4f02-ae04-e006f4ef8c4e';
export const contactAPIRoute: string = 'https://api.web3forms.com/submit';

// SOCIAL MEDIA LINKS
export const socialMediaLinks: object[] = [
    {
        name: 'GitHub',
        link: 'https://github.com/GhostDaGhost/'
    },
    {
        name: 'Instagram',
        link: 'https://instagram.com/alex.arizola/'
    },
    {
        name: 'Twitter',
        link: 'https://x.com/alex_arizola/'
    },
    {
        name: 'LinkedIn',
        link: 'https://linkedin.com/in/alexander-arizola/'
    },
    {
        name: 'Email',
        link: 'mailto:alexarizola46@gmail.com'
    }
];

// PROJECTS
export const listOfProjects: object[] = [
    {
        title: 'Adriana\'s Bowtique',
        description: 'A website built for the bowtique named "Adriana\'s Bowtique". It is a bow shop centered in Washington, United States. This is a website to allow users to contact and view available bows for sale. Additionally, the website allows for translation to Spanish from English and vice versa.',
        image: 'adrianas-bowtique.png',
        featured: true,
        toolsUsed: ['React.js', 'Material UI', 'TypeScript', 'Vite', 'Sass'],
        githubLink: 'https://github.com/GhostDaGhost/adriana_bowtique'
    },
    {
        title: 'GitHub User Lookup',
        description: 'A tool to look up and view a GitHub user\'s profile.',
        image: 'github_userlookup.png',
        featured: true,
        toolsUsed: ['Preact.js', 'Mantine', 'TypeScript', 'Vite', 'Sass'],
        githubLink: 'https://github.com/GhostDaGhost/github_userlookup',
        siteLink: 'https://clever-wisp-aa80d7.netlify.app/'
    },
    {
        title: 'Movie Info App',
        description: 'A tool to look up a movie and see information about it!',
        image: 'movieinfoapp.png',
        featured: true,
        toolsUsed: ['Preact.js', 'Mantine', 'TypeScript', 'Vite', 'Sass'],
        githubLink: 'https://github.com/GhostDaGhost/movieinfoapp',
        siteLink: 'https://zippy-cat-24ae8d.netlify.app/'
    },
    {
        title: 'Weather Lookup',
        description: 'A tool to look up a region for the current climate statistics. Statistics include temperature, pressure, humidity, wind speed/direction and more! This was also my very first Vue.js project!',
        image: 'weatherlookup.png',
        featured: true,
        toolsUsed: ['Vue.js', 'TypeScript', 'Vite', 'Sass'],
        githubLink: 'https://github.com/GhostDaGhost/weatherapp',
        siteLink: 'https://dainty-tapioca-dbc275.netlify.app/'
    },
    {
        title: 'QR Code Generator',
        description: 'A simple QR code generator for any text or link.',
        featured: false,
        toolsUsed: ['React.js', 'Material UI', 'TypeScript', 'Vite', 'Sass'],
        githubLink: 'https://github.com/GhostDaGhost/qr-code-generator',
        siteLink: 'https://aa-qrcodegenerator.netlify.app/'
    },
    {
        title: 'Personal Portfolio v3',
        description: 'The third version of my personal portfolio.',
        featured: false,
        toolsUsed: ['React.js', 'Material UI', 'TypeScript', 'Vite', 'Sass'],
        githubLink: 'https://github.com/GhostDaGhost/portfolio-v3',
        siteLink: 'https://aa-portfolio-v3.netlify.app/'
    },
    {
        title: 'Coin Flipper',
        description: 'A quick and easy coin flipper to get either heads or tails!',
        featured: false,
        toolsUsed: ['React.js', 'Material UI', 'TypeScript', 'Cascading Style Sheets', 'Vite'],
        githubLink: 'https://github.com/GhostDaGhost/flip-a-coin',
        siteLink: 'https://aa-flipacoin.netlify.app/'
    },
    {
        title: 'Password Generator',
        description: 'A tool to generate a password! It gives the options for various factors to play into the generation such as numbers or symbols.',
        featured: false,
        toolsUsed: ['Preact.js', 'Mantine', 'TypeScript', 'Vite', 'Less'],
        githubLink: 'https://github.com/GhostDaGhost/password_generator',
        siteLink: 'https://sparkly-kelpie-d89b5d.netlify.app/'
    },
    {
        title: 'Currency Converter',
        description: 'A tool to get the exchange rate of an amount of money in one currency to another.',
        featured: false,
        toolsUsed: ['React.js', 'Mantine', 'TypeScript', 'Vite', 'Sass'],
        githubLink: 'https://github.com/GhostDaGhost/currency_converter',
        siteLink: 'https://classy-choux-2958bf.netlify.app/'
    },
    {
        title: 'URL Shortener',
        description: 'A tool to shorten long URLs to shorter URLs.',
        featured: false,
        toolsUsed: ['Svelte', 'TypeScript', 'Vite', 'Less'],
        githubLink: 'https://github.com/GhostDaGhost/url_shortener',
        siteLink: 'https://transcendent-palmier-9cc6ea.netlify.app/'
    },
    {
        title: 'Contact Form',
        description: 'A form for users to send their contact details and a message to my email!',
        featured: false,
        toolsUsed: ['React.js', 'Bootstrap', 'TypeScript', 'Vite', 'Less'],
        githubLink: 'https://github.com/GhostDaGhost/contactme',
        siteLink: 'https://sparkly-swan-b4f0e8.netlify.app/'
    },
    {
        title: 'Link Tree',
        description: 'A tree of links directing to my social media, portfolio and LinkedIn!',
        featured: false,
        toolsUsed: ['Vue.js', 'Sass'],
        githubLink: 'https://github.com/GhostDaGhost/linktree',
        siteLink: 'https://alexarizola.info/'
    },
    {
        title: 'Weekly Temperature Chart',
        description: 'This is a program that will record temperatures of each day of the week per user\'s input as well as display the coldest and warmest day. It will also summon a bar chart with the temperature values.',
        featured: false,
        toolsUsed: ['Python'],
        githubLink: 'https://github.com/GhostDaGhost/linktree'
    },
    {
        title: 'Mock Mobile Data Terminal for FiveM',
        description: 'Created for usage on the multiplayer roleplay-based video game called FiveM. The purpose of this interface is to simulate the functionalities of a real MDT to work hand in hand with emergency services as well as to enhance the roleplay and immersion.',
        featured: false,
        toolsUsed: ['HTML', 'Cascading Style Sheets', 'jQuery', 'TypeScript', 'Lua', 'MySQL'],
        siteLink: 'https://imgur.com/gallery/nn2cCiE'
    },
    {
        title: 'Mock Mobile Phone for FiveM',
        description: 'Created for usage on the multiplayer roleplay-based video game called FiveM. The purpose of this phone is to simulate the functionalities of a real phone with the ability to call, text, email, manage contacts and interact with the world on social media!',
        featured: false,
        toolsUsed: ['HTML', 'Cascading Style Sheets', 'jQuery', 'TypeScript', 'Lua', 'MySQL'],
        siteLink: 'https://imgur.com/gallery/EP8iE8w'
    },
    {
        title: 'Personal Portfolio v2',
        description: 'The second version of my personal portfolio.',
        featured: false,
        toolsUsed: ['React.js', 'Material UI', 'TypeScript', 'Cascading Style Sheets'],
        githubLink: 'https://github.com/GhostDaGhost/portfolio',
        siteLink: 'https://aa-portfolio-v2.netlify.app/'
    },
    {
        title: 'Personal Portfolio v1',
        description: 'The very first version of my personal portfolio. This is as well as my first project in web development.',
        featured: false,
        toolsUsed: ['HTML', 'Cascading Style Sheets'],
        githubLink: 'https://github.com/GhostDaGhost/portfolio-old',
        siteLink: 'https://aa-portfolio-v1.netlify.app/'
    }
];

// TOOL INFORMATION
export const toolInformation: any = {
    'Netlify': {
        image: 'netlify.png',
        link: 'https://netlify.com/'
    },
    'Vite': {
        image: 'vite.png',
        link: 'https://vitejs.dev/'
    },
    'Mantine': {
        image: 'mantine.png',
        link: 'https://mantine.dev/'
    },
    'Preact.js': {
        image: 'preactjs.png',
        link: 'https://preactjs.com/'
    },
    'HTML': {
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg',
        link: 'https://html.com/'
    },
    'Cascading Style Sheets': {
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg',
        link: 'https://css3.com/'
    },
    'TypeScript': {
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
        link: 'https://typescriptlang.org/'
    },
    'JavaScript': {
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
        link: 'https://javascript.com/'
    },
    'jQuery': {
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-plain-wordmark.svg',
        link: 'https://jquery.com/'
    },
    'MySQL': {
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
        link: 'https://mysql.com/'
    },
    'PHP': {
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',
        link: 'https://php.net/'
    },
    'React.js': {
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
        link: 'https://reactjs.org/'
    },
    'Sass': {
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg',
        link: 'https://sass-lang.com/'
    },
    'Material UI': {
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-plain.svg',
        link: 'https://mui.com/'
    },
    'Less': {
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/less/less-plain-wordmark.svg',
        link: 'https://lesscss.org/'
    },
    'Lua': {
        //image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/lua/lua-original-wordmark.svg',
        image: 'lua.png',
        link: 'https://lua.org/'
    },
    'Vue.js': {
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
        link: 'https://vuejs.org/'
    },
    'Svelte': {
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg',
        link: 'https://svelte.dev/'
    },
    'Bootstrap': {
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
        link: 'https://getbootstrap.com/'
    },
    'Python': {
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
        link: 'https://python.org/'
    }
};
