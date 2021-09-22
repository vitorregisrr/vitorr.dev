export const eagle = {
  transition: { duration: 1.2, origin: 'center center' },
  initial: { opacity: 0, scale: 0, y: 100 },
  animate: { opacity: 1, scale: 1, y: 0 },
  exit: { opacity: 0, scale: 0, y: 100 }
}

export const coruja = {
  transition: { duration: 1.2, origin: 'center center' },
  initial: { opacity: 0, scale: 0, y: 100 },
  animate: { opacity: 1, scale: 1, y: 0 },
  exit: { opacity: 0, scale: 0, y: 100 }
}

export const sun = {
  transition: { delay: 0, duration: 1, origin: 'center center' },
  initial: { opacity: 0 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0 }
}

export const moon = {
  transition: { delay: 0, duration: 1, origin: 'center center' },
  initial: { opacity: 0, scale: 0.5, y: -200 },
  animate: { opacity: 1, scale: 1, y: 0 },
  exit: { opacity: 0, scale: 0.5, y: -200 }
}
