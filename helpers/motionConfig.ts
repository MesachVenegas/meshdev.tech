export const transitionVariantsPage = {
    initial: {
        x: "100%",
        width: "100%",
    },
    animate: {
        x: "0%",
        width: "0%",
    },
    exit: {
        x: ["0%", "100%"],
        width: ["0%", "100%"],
    },
};

export const motionTransitionsAbout = {
    initial: {
        opacity: 0,
        bottom: "5rem",
        transform: "translateY(200px)",
    },
    transition: {
        duration: 2.3,
        type: "tween",
        ease: [0.25, 0.6, 0.3, 0.8],
    },
    animate: {
        opacity: 1,
        transform: "translateY(0px)",
    },
};

export const fadeIn = (direction: string, delay: number) => {
    return {
        hidden: {
            y: direction === "up" ? 80 : direction === "down" ? -80 : 0,
            opacity: 0,
            x: direction === "left" ? 80 : direction === "right" ? -80 : 0,
            transition: {
                type: "tween",
                duration: 1.5,
                delay: delay,
                ease: [0.25, 0.6, 0.3, 0.8],
            },
        },
        show: {
            y: 0,
            x: 0,
            opacity: 1,
            transition: {
                type: "tween",
                duration: 1.4,
                delay: delay,
                ease: [0.25, 0.25, 0.25, 0.75],
            },
        },
    };
};

export const slideBottom = () => {
    return {
        offscreen: {
            y: 200,
            opacity: 0
        },
        onscreen: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                bounce: 0.4,
                duration: .5,
                delay: 0.2,
                ease: [0.25, 0.25, 0.25, 0.75],
            }
        },
    }
}

export const zoom = () => {
    return {
        offscreen: {
            opacity: 0,
            scale: 0.5
        },
        onscreen: {
            opacity: 1,
            scale: 1,
            transition: {
                type: "spring",
                bounce: 0.4,
                duration: 1.5,
                delay: 0.2
            }
        },
    }
}