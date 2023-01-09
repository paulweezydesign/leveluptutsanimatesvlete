import { spring } from "svelte/motion"

export function drag(node, params) {
  let x
  let y

  const coordinates = spring(
    { x: 0, y: 0 },
    {
      stiffness: 0.2,
      damping: 0.4,
    }
  )

  // Default Directions
  let directions = {
    y: true,
    x: true,
  }

  if (params?.direction === "x") {
    directions.y = false
  } else if (params?.direction === "y") {
    directions.x = false
  }

  coordinates.subscribe(($coords) => {
    node.style.transform = `translate3d(${$coords.x}px, ${$coords.y}px, 0)`
  })

  node.addEventListener("mousedown", handleMouseDown)

  function handleMouseDown(event) {
    x = event.clientX
    y = event.clientY
    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("mouseup", handleMouseUp)
  }

  function handleMouseMove(event) {
    // Delta X = difference of where we clicked vs where we are currently
    const dx = event.clientX - x
    const dy = event.clientY - y
    x = event.clientX
    y = event.clientY
    coordinates.update(($coords) => {
      return {
        x: directions.x ? $coords.x + dx : 0,
        y: directions.y ? $coords.y + dy : 0,
      }
    })
  }

  function handleMouseUp() {
    // Fire up event
    node.dispatchEvent(
      new CustomEvent("dragStop", {
        detail: {
          x,
          y,
        },
      })
    )

    // Reset values
    x = 0
    y = 0
    coordinates.update(() => {
      return {
        x: 0,
        y: 0,
      }
    })
    // Remove event listers
    window.removeEventListener("mousemove", handleMouseMove)
    window.removeEventListener("mouseup", handleMouseUp)
  }

  return {
    destroy() {
      node.removeEventListener("mousedown", () => console.log("clicks"))
    },
  }
}
