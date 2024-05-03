import * as React from "react"
import Svg, { Path, Rect } from "react-native-svg"

function Calendar() {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
    >
      <Path
        d="M2 6.5A1.5 1.5 0 013.5 5h17A1.5 1.5 0 0122 6.5v4a.5.5 0 01-.5.5h-19a.5.5 0 01-.5-.5v-4zM2 13.5a.5.5 0 01.5-.5h19a.5.5 0 01.5.5v7a1.5 1.5 0 01-1.5 1.5h-17A1.5 1.5 0 012 20.5v-7z"
        fill="#888"
      />
      <Path
        d="M6.5 3a1 1 0 012 0v4h-2V3zM15.5 3a1 1 0 112 0v4h-2V3z"
        fill="#888"
      />
    </Svg>
  )
}

function Folder() {
  return (
    <Svg
      width={28}
      height={28}
      viewBox="0 0 28 28"
      fill="none"
    >
      <Path
        d="M2.332 11.889a1 1 0 011-1h21.333a1 1 0 011 1V22.11a2 2 0 01-2 2H4.332a2 2 0 01-2-2V11.889zM2.332 4.889V9.11a1 1 0 001 1h21.333a1 1 0 001-1V7.555a1 1 0 00-1-1H10.94a1 1 0 01-.675-.262L7.922 4.151a1 1 0 00-.675-.262H3.332a1 1 0 00-1 1z"
        fill="#AAA"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.72 13.223a.5.5 0 00-.5.5v2.61h-2.61a.5.5 0 00-.5.5v.556a.5.5 0 00.5.5h2.61V20.5a.5.5 0 00.5.5h.556a.5.5 0 00.5-.5v-2.61h2.611a.5.5 0 00.5-.5v-.556a.5.5 0 00-.5-.5h-2.611v-2.611a.5.5 0 00-.5-.5h-.556z"
        fill="#DDD"
      />
    </Svg>
  )
}

function Menu() {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
    >
      <Rect x={3} y={4} width={4} height={4} rx={1} fill="#DDD" />
      <Rect x={3} y={10} width={4} height={4} rx={1} fill="#DDD" />
      <Rect x={9} y={16} width={12} height={4} rx={1} fill="#DDD" />
      <Rect x={9} y={10} width={12} height={4} rx={1} fill="#DDD" />
      <Rect x={9} y={4} width={12} height={4} rx={1} fill="#DDD" />
      <Rect x={3} y={16} width={4} height={4} rx={1} fill="#DDD" />
    </Svg>
  )
}

function BookMark() {
  return (
    <Svg
      width={21}
      height={21}
      viewBox="0 0 21 21"
      fill="none"
    >
      <Path
        d="M7.228 6.893l2.49-5.014a.873.873 0 011.562 0l2.49 5.014 5.566.81a.864.864 0 01.482 1.477l-4.027 3.9.95 5.51c.122.708-.625 1.247-1.265.913L10.5 16.9 5.52 19.503c-.638.335-1.386-.205-1.264-.913l.95-5.51L1.18 9.178a.864.864 0 01.482-1.476l5.566-.81z"
        stroke="#888"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

function Favorite() {
  return (
    <Svg
      width={18}
      height={18}
      viewBox="0 0 18 18"
      fill="none"
    >
      <Rect width={18} height={18} rx={3} fill="#DDD" />
    </Svg>
  )
}

export { Calendar, Folder, Menu, BookMark, Favorite }