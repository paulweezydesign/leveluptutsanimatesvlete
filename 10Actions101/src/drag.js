export function drag(node, params) {
  node.addEventListener("mousedown", () => console.log("clicks"))
  return {
    destroy() {
      node.removeEventListener("mousedown", () => console.log("clicks"))
    },
  }
}
