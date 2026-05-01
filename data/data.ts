const currentYear = new Date().getFullYear();
const data = {
    sitename: "proecoglobal.com",
    sitetagline: "Поки ви переглядаєте цю сторінку ми виробляємо добрива",
    siteurl: "https://github.com/EFilonov",
    sitelogo: "",
    title: "Сайт на реконструкції!",
    description: "Ми тяжко працюємо над створенням чогось нового та ефективного. Ми не можемо дочекатися, щоб поділитися з вами!",
    newsletterheading: "Будь з нами на зв'язку!",
    copyrightText: `Copyright © ${currentYear} | Design and Developed By &nbsp;<a target="_blank" class="no-underline md:underline" href="https://github.com/EFilonov">EFilonov</a>`,
    socialIconsHeading: "Підписуйтесь на наші оновлення",
    hideSubscribeForm: false, // make true to disable subscription form 
    socialIcons: [
        // {
        //     icon: "facebook",
        //     link: "https://www.facebook.com/sandeep.baikare/",
        // },
        // {
        //     icon: "twitter",
        //     link: "https://twitter.com/BaikareSandeep",
        // },
        // {
        //     icon: "linkedIn",
        //     link: "https://www.linkedin.com/in/sandip-baikare/",
        // },
    ],
    hide :{
        subscribeForm: false , // make true to disable subscription form         
        header: false,
        content: false,
        footer: false,
    }
}

export default data;
