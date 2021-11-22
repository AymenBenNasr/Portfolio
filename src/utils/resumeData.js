
import React from "react";


import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import CodeIcon from '@mui/icons-material/Code';
import WebIcon from '@mui/icons-material/Web';

const resumeData = {
    name : 'Aymen Ben Nasr',
    title : 'Full Stack developer',
    email : 'aymen.bennasr@sesame.com.tn',
    birthday : '17 December 1994',
    address : 'Tunisia',
    phone : '+216 28 207 639',
    
    socials :{
        facebook :{
            link: 'https://www.facebook.com/aymen.bnasr.315/',
            text: '@Facebook',
            icon: <FacebookIcon />,
        },

        linkedin :{
            link: 'https://www.linkedin.com/in/aymenbennasr/',
            text: '@Linkedin',
            icon: <LinkedInIcon />,
        },

        GitHub :{
            link: 'https://github.com/AymenBenNasr',
            text: '@GitHub',
            icon: <GitHubIcon />,
        },

    },
    about :
    "Lorem ipsum dolor sit amet , consectetur adipiscing elit. Nulla et nisi fermentum, commodo dui rhoncus, congue metus. Cras at nisl ligula. Etiam faucibus velit sed neque condimentum, et sodales lectus placerat. Aenean sit amet sem condimentum, convallis justo et, pulvinar lacus. Vivamus venenatis tortor sapien, quis fringilla est pellentesque vitae. Ut vitae nibh vel nibh consequat hendrerit aliquet vel nibh. Sed ornare massa vitae libero condimentum rhoncus. Sed ac massa quis urna faucibus ultricies. Ut vehicula rhoncus leo a sollicitudin. Sed elementum sit amet tellus ac tempus. Donec iaculis risus at feugiat aliquam. Praesent vitae metus a ligula porta euismod nec in sem. Vivamus sed massa eu purus rhoncus efficitur et eu risus. Aenean tempor libero ac massa scelerisque aliquam. Praesent cursus neque sed venenatis ornare/n/n Suspendisse ultrices tellus risus, a iaculis quam maximus ut. Donec malesuada vestibulum tortor id tincidunt. Integer ornare quis diam nec convallis. Donec et enim turpis. Mauris fermentum accumsan finibus. \n\nDonec ut convallis mauris. In hac habitasse platea dictumst. Aenean ut felis vel felis convallis dignissim. Donec vitae sollicitudin sem.  Donec vitae nisl at nulla maximus maximus. Aliquam non eros vel erat dapibus faucibus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam blandit dictum nisl eu iaculis. Fusce vel lectus ipsum. Proin luctus congue ante vitae tristique.",

    experiences : [
        {
            title: 'Work1',
            date :'2018 - present',
            description: 'Lorem ipsum dolor sit amet , consectetur adipiscing elit'

        },
        {
            title: 'Work2',
            date :'2015 - 2017',
            description: 'Lorem ipsum dolor sit amet , consectetur adipiscing elit'

        },
        {
            title: 'Work3',
            date :'2013 - 2015',
            description: 'Lorem ipsum dolor sit amet , consectetur adipiscing elit'

        },

    ],
    educations : [
        {
            title: 'ed1',
            date :'2018 - present',
            description: 'Lorem ipsum dolor sit amet , consectetur adipiscing elit'

        },
        {
            title: 'ed2',
            date :'2015 - 2017',
            description: 'Lorem ipsum dolor sit amet , consectetur adipiscing elit'

        },
        {
            title: 'ed3',
            date :'2013 - 2015',
            description: 'Lorem ipsum dolor sit amet , consectetur adipiscing elit'

        },

    ],

    services : [
        {
            title: 'Dev Web',
            description: 'develop fullstack web apps',
            icon: <CodeIcon />
        },
        {
            title: 'Dev desktop',
            description: 'develop fullstack web apps',
            icon: <WebIcon />
        },
        {
            title: 'Dev Mobile',
            description: 'develop fullstack web apps',
            icon: <CodeIcon />
        },
    ],

    skills:[
        {
            title:"Front-End",
            description: [
                {
                    name: "ReactJS",
                    icon: "src/assets/images/springboot.png"
                },
                {
                    name: "Angul",
                    icon: "src/assets/images/nodejs.png"
                },
                // "Reactjs",
                // "Angular",
                // "Typescript",
                // "javascript",
                // "bootstrap",
                // "Material Ui"
            ],

        },
        {
            title:"Back-End",
            description: [
                {
                    name: "SpringBoot",
                    icon: `../../assets/images/springboot.png`
                },
                {
                    name: "NodeJs",
                    icon: `../../assets/images/springboot.png`
                },
                {
                    name: "No",
                    icon: `../../assets/images/springboot.png`
                },
                {
                    name: "NodeJs",
                    icon: `../../assets/images/springboot.png`
                },
                
            ],

        },
        {
            title:"Source Control",
            description: [
                {
                    name: "Git",
                    icon: "src/assets/images/springboot.png"
                },
                {
                    name: "sCRUM/Agile",
                    icon: "src/assets/images/nodejs.png"
                },
               
            
            ],

        },



    ]
    


}

export default resumeData;