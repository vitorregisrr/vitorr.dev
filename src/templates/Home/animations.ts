export const eagle = {
  transition: { duration: 0.7, origin: 'center center' },
  initial: { opacity: 0, scale: 0, y: 100 },
  animate: { opacity: 1, scale: 1, y: 0 },
  exit: { opacity: 0, scale: 0, y: 100 }
}

export const coruja = {
  transition: { duration: 0.7, origin: 'center center' },
  initial: { opacity: 0, scale: 0, y: 100 },
  animate: { opacity: 1, scale: 1, y: 0 },
  exit: { opacity: 0, scale: 0, y: 100 }
}

export const sun = {
  transition: { delay: 0, duration: 0.7, origin: 'center center' },
  initial: { opacity: 0, scale: 0 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0 }
}

export const moon = {
  transition: { delay: 0, duration: 0.7, origin: 'center center' },
  initial: { opacity: 0, scale: 0, y: -200 },
  animate: { opacity: 1, scale: 1, y: 0 },
  exit: { opacity: 0, scale: 0, y: -200 }
}
