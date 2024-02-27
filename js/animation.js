gsap.to(".logo_section", {
    scrollTrigger: {
        trigger: ".logo_section",
    },
    x: 100,
    duration: 1
});

gsap.to(".landing_main_text_section p", {
    scrollTrigger: {
        trigger: ".landing_main_text_section",
    },
    opacity: 1,
    duration: 1.2
});

gsap.to(".welcome_screen_svg", {
    scrollTrigger: {
        trigger: ".welcome_screen_svg",
    },
    opacity: 1,
    x: 100,
    duration: 1.2
});

gsap.to(".svg_main_text", {
    scrollTrigger: {
        trigger: ".img_hands_section",
    },
    opacity: 1,
    duration: 1.5,
});

gsap.to(".main_lan_icon", {
    scrollTrigger: {
        trigger: ".main_lan_icon",
    },
    opacity: 1,
    width: 302,
    height: 302,
    duration: 1.5,
});

gsap.to(".research_main_text_section p", {
    scrollTrigger: {
        trigger: ".research_section",
    },
    opacity: 1,
    duration: 1.5,
});

gsap.to(".research_card", {
    scrollTrigger: {
        trigger: ".card_researches_section",
    },
    opacity: 1,
    duration: 1.5,
});
