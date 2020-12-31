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
]

export const pickRandomColor = () => {
  return colors[Math.floor(Math.random() * colors.length)]
}
