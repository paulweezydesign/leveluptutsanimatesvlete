export function custom(node, { delay, duration }) {
  return {
    delay,
    css: (t) => {
      return `
        opacity: ${t}; 
        transform: scale(${t});
      `
    },
  }
}
