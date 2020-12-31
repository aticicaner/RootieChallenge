const colors = [
  '#ffda73',
  '#bbff80',
  '#80ffd9',
  '#85f3ff',
  '#85a1ff',
  '#a985ff',
  '#e483fc',
  '#ff575a',
  '#ff9557',
  '#9e8f86',
  '#869e92',
  '#6b818a',
  '#888a6b',
  '#9a89b3',
  '#9cb4b8',
]

export default () => {
  return colors[Math.floor(Math.random() * colors.length)]
}
