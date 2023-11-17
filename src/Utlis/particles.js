const particlesObj = {
    background: {
        color: {
            value: "#2e2e2e",
        },
    },
    fpsLimit: 120,
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
                quantity: 1,
            },
            repulse: {
                distance: 100,
                duration: 0.9,
            },
        },
    },
    particles: {
        color: {
            value: "#0075ff",
        },
        links: {
            color: "#00eeff",
            distance: 150,
            enable: true,
            opacity: 0.1,
            width: 1,
        },
        move: {
            direction: "none",
            enable: true,
            outModes: {
                default: "bounce",
            },
            random: false,
            speed: 3,
            straight: true,
        },
        number: {
            density: {
                enable: true,
                area: 500,
            },
            value: 100,
        },
        opacity: {
            value: 0.2,
        },
        shape: {
            type: "circle",
        },
        size: {
            value: { min: 1, max: 5 },
        },
    },
    detectRetina: true,
}

export default particlesObj;