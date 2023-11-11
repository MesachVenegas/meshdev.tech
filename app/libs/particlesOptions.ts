export const optionsParticles = {
    fpsLimit: 60,
    interactivity: {
        events: {
            onClick: {
                enable: true,
                mode: "push",
            },
            onHover: {
                enable: true,
                mode: "repulse",
            },
            resize: true,
        },
        modes: {
            push: {
                quantity: 2,
            },
            repulse: {
                distance: 80,
                duration: 0.4,
            },
        },
    },
    particles: {
        color: {
            value: "#ee3a6d",
        },
        links: {
            color: "#ee3a6d",
            distance: 150,
            enable: true,
            opacity: 0.8,
            width: 1,
        },
        collisions: {
            enable: true,
        },
        move: {
            direction: undefined,
            enable: true,
            random: true,
            speed: 1,
            straight: false,
        },
        number: {
            density: {
                enable: true,
                area: 800,
            },
            value: 80,
        },
        opacity: {
            value: 0.7,
        },
        shape: {
            type: "circle",
        },
        size: {
            value: { min: 1, max: 5 },
        },
    },
    detectRetina: true,
};