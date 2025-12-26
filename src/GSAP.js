gsap.registerPlugin(ScrollTrigger)

function heroProjects() {
    const heroProjects = document.querySelector('#hero-projects')
    const title = heroProjects.querySelector('.title')
    const spans = title.querySelectorAll('span:not(.not, .not2)')
    const span = title.querySelector("span.not")

    gsap.set(spans, { y: "100%" })
    gsap.set(span, { y: "100%" })

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: title,
            start: "top 20%",
            toggleActions: "play none none none",
            markers: false,
        }
    })

    const duration1 = .4
    const duration2 = .6

    tl.to(spans, {
        y: 0,
        duration: duration1,
    }, 0)

    tl.from(spans, {
        left: "50%",
        x: "-50%",
        duration: duration2,
    }, duration1)




    tl.to(span, {
        y: 0,
        duration: duration1,
    }, 0)

    tl.from(span, {
        left: "50%",
        x: "-50%",
        duration: duration2,
    }, duration1)
}

heroProjects()
