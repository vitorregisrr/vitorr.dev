export const fadeTop = {
    initial: {y: -300, opacity: 0 },
    animate:{ y: 0, opacity: 1 },
    exit:{ y: 300, opacity: 0 },
    transition:{
      type: "spring",
      stiffness: 260,
      damping: 20,
    }
}

export const fadeBottom = {
    initial: {y: 300, opacity: 0 },
    animate:{ y: 0, opacity: 1 },
    exit:{ y: -300, opacity: 0 },
    transition:{
      type: "spring",
      stiffness: 260,
      damping: 20,
    }
}