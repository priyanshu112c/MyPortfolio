const change_img = document.querySelector('.vector1')
const vector3 = document.querySelector('.vector3')
function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}
const dark = document.querySelector('.dark')
const light = document.querySelector('.light')
dark.addEventListener('click',()=>{
    document.querySelector("link[href='style.css']").href = 'darkstyle.css'
    light.style.display = 'block'
    dark.style.display = 'none'
    change_img.src = "assets/Extra/Vector 1-dark.png"
    vector3.src = "assets/Extra/Vector3-dark.png"
})
light.addEventListener('click',()=>{
    document.querySelector("link[href='darkstyle.css']").href = 'style.css'
    light.style.display = 'none'
    dark.style.display = 'block'
    change_img.src = "assets/Extra/Vector 1.png"
    vector3.src = "assets/Extra/Vector3.png"
})

gsap.from('#profile1, .vector1, .vector3',{
    y:70,
    opacity:0,
    duration:1,
    stagger:1,
    // scrollTrigger:{
    //     trigger:'#profile1, .vector1, .vector3',
    // }
})

gsap.from('.logo',{
    x:-70,
    opacity:0,
    duration:3,
    stagger:1,
    // scrollTrigger:{
    //     trigger:'.logo, .nav-links',
    // }
})
gsap.from('.linksss',{
    x:70,
    opacity:0,
    duration:3,
    delay:1,
    stagger:1,
    // scrollTrigger:{
    //     trigger:'.nav-links',
    // }
})
gsap.from('.section__text, .hellotext, .webdevelopertext, .btn-container',{
    y:-70,
    opacity:0,
    duration:1,
    stagger:1,
})

gsap.from('.about-text-know, #aboutTitle, .detailcontainer1, .detailcontainer2, .text-container',{
    y:70,
    opacity:0,
    duration:3,
    stagger:1,
    scrollTrigger:{
        trigger:'.about-details-container',
        scroller:'body',
        start:"top 90%",
        end:"top 40%",
        // markers:true,
        scrub:1
    }
})
// gsap.from('.experience-text1, .experience-title, .experience-detail-cont1, .experience-detail-cont2, .icon-new, .anime',{
//     y:-70,
//     opacity:0,
//     duration:2,
//     stagger:2,
//     scrollTrigger:{
//         trigger:'.experience-detail-cont2',
//         scroller:'body',
//         start:"top 90%",
//         end:"top 20%",
//         markers:true,
//         scrub:2
//     }
// })
gsap.from('.experience-text1, .experience-title, .icon-new, .anime',{
    y:-70,
    opacity:0,
    duration:2,
    stagger:2,
    scrollTrigger:{
        trigger:'.experience-detail-cont2',
        scroller:'body',
        start:"top 80%",
        end:"top 20%",
        // markers:true,
        scrub:2
    }
})
gsap.from('.experience-detail-cont1',{
    x:-70,
    opacity:0,
    duration:2,
    scrollTrigger:{
        trigger:'.experience-detail-cont2',
        scroller:'body',
        start:"top 80%",
        end:"top 20%",
        // markers:true,
        scrub:2
    }
})
gsap.from('.experience-detail-cont2',{
    x:70,
    opacity:0,
    duration:2,
    scrollTrigger:{
        trigger:'.experience-detail-cont2',
        scroller:'body',
        start:"top 80%",
        end:"top 20%",
        // markers:true,
        scrub:2
    }
})

gsap.from('.project-subtitle, .project-titles',{
    y:70,
    opacity:0,
    duration:2,
    stagger:1,
    scrollTrigger:{
        trigger:'#projects',
        scroller:'body',
        start:"top 90%",
        end:"top 20%",
        // markers:true,
        scrub:2
    }
})

gsap.from('.projectdiv1',{
    x:-70,
    opacity:0,
    duration:2,
    stagger:1,
    scrollTrigger:{
        trigger:'.projectdiv1',
        scroller:'body',
        start:"top 90%",
        end:"top 20%",
        // markers:true,
        scrub:2
    }
})
gsap.from('.projectdiv2',{
    x:70,
    opacity:0,
    duration:2,
    stagger:1,
    scrollTrigger:{
        trigger:'.projectdiv1',
        scroller:'body',
        start:"top 90%",
        end:"top 20%",
        // markers:true,
        scrub:2
    }
})
gsap.from('.projectdiv3',{
    x:-70,
    opacity:0,
    duration:2,
    stagger:1,
    scrollTrigger:{
        trigger:'.projectdiv4',
        scroller:'body',
        start:"top 90%",
        end:"top 20%",
        // markers:true,
        scrub:2
    }
})
gsap.from('.projectdiv4',{
    x:70,
    opacity:0,
    duration:2,
    stagger:1,
    scrollTrigger:{
        trigger:'.projectdiv3',
        scroller:'body',
        start:"top 90%",
        end:"top 20%",
        // markers:true,
        scrub:2
    }
})

gsap.from('.blog-sub-title, .service-title',{
    y:70,
    opacity:0,
    duration:2,
    stagger:1,
    scrollTrigger:{
        trigger:'#blogs',
        scroller:'body',
        start:"top 90%",
        end:"top 20%",
        // markers:true,
        scrub:2
    }
})

gsap.from('.service-container1, .service-img1',{
    x:-70,
    opacity:0,
    duration:2,
    stagger:1,
    scrollTrigger:{
        trigger:'.service-container1',
        scroller:'body',
        start:"top 70%",
        end:"top 10%",
        // markers:true,
        scrub:2
    }
})
gsap.from('.service-container3, .service-img3',{
    x:70,
    opacity:0,
    duration:2,
    stagger:1,
    scrollTrigger:{
        trigger:'.service-container3',
        scroller:'body',
        start:"top 70%",
        end:"top 10%",
        // markers:true,
        scrub:2
    }
})
gsap.from('.service-container2, .service-img2',{
    y:70,
    opacity:0,
    duration:2,
    stagger:1,
    scrollTrigger:{
        trigger:'.service-container2',
        scroller:'body',
        start:"top 70%",
        end:"top 10%",
        // markers:true,    
        scrub:2
    }
})
gsap.from('.contact-sub-title, .contact-title',{
    y:70,
    scale:0,
    opacity:0,
    duration:2,
    stagger:1,
    scrollTrigger:{
        trigger:'#contact',
        scroller:'body',
        start:"top 80%",
        end:"top 20%",
        // markers:true,    
        scrub:2
    }
})
gsap.from('.contactupperdiv, .contactdiv1',{
    x:-70,
    scale:0,
    opacity:0,
    duration:4,
    stagger:1,
    scrollTrigger:{
        trigger:'.contactupperdiv',
        scroller:'body',
        start:"top 80%",
        end:"top 50%",
        // markers:true,    
        scrub:2
    }
})
gsap.from('.footer-nav,.copy',{
    y:30,
    opacity:0,
    duration:2,
    stagger:1,
    scrollTrigger:{
        trigger:'.contactupperdiv',
        scroller:'body',
        start:"top 80%",
        end:"top 50%",
        // markers:true,    
        scrub:2
    }
})

// gsap.to('.main',{
//     backgroundColor:'#000',

//     duration:4,
//     scrollTrigger:{
//         trigger:'#experience',
//         scroller:'body',
//         start:"top 25%",
//         end:"top 100%",
//         scrub:2,
//         markers:true
//     }
// })