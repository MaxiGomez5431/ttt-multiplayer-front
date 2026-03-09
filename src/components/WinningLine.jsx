import { useEffect, useRef, useState } from "react"

export default function WinningLine({ combination, boardRef }) {

  const [coords, setCoords] = useState(null)
  const [size, setSize] = useState({ w: 0, h: 0 })
  const lineRef = useRef(null)

  useEffect(() => {

    const board = boardRef.current
    if (!board) return

    const squares = board.children

    const first = squares[combination[0]]
    const last = squares[combination[2]]

    const boardRect = board.getBoundingClientRect()
    const firstRect = first.getBoundingClientRect()
    const lastRect = last.getBoundingClientRect()

    // centros de los cuadrados
    const x1 = firstRect.left + firstRect.width / 2 - boardRect.left
    const y1 = firstRect.top + firstRect.height / 2 - boardRect.top

    const x2 = lastRect.left + lastRect.width / 2 - boardRect.left
    const y2 = lastRect.top + lastRect.height / 2 - boardRect.top

    setCoords({ x1, y1, x2, y2 })

    setSize({
      w: boardRect.width,
      h: boardRect.height
    })

  }, [combination, boardRef])


  useEffect(() => {

    if (!lineRef.current || !coords) return

    const length = lineRef.current.getTotalLength()

    lineRef.current.style.strokeDasharray = length
    lineRef.current.style.strokeDashoffset = length

    requestAnimationFrame(() => {

      lineRef.current.style.transition = "stroke-dashoffset 0.6s ease"
      lineRef.current.style.strokeDashoffset = "0"

    })

  }, [coords])


  if (!coords) return null

  return (
    <svg
      className="absolute inset-0 pointer-events-none"
      viewBox={`0 0 ${size.w} ${size.h}`}
    >
      <line
        x1={coords.x1}
        y1={coords.y1}
        x2={coords.x2}
        y2={coords.y2}
        stroke="black"
        strokeWidth="14"
        strokeLinecap="round"
      />

      <line
        ref={lineRef}
        x1={coords.x1}
        y1={coords.y1}
        x2={coords.x2}
        y2={coords.y2}
        stroke="white"
        strokeWidth="7"
        strokeLinecap="round"
      />
    </svg>
  )
}