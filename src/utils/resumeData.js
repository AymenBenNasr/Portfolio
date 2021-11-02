
import React from "react";


import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';


const resumeData = {
    name : 'Aymen Ben Nasr',
    title : 'Full Stack developer',

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
        }
    }

}

export default resumeData;