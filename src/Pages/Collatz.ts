
let steps: number[] = []

const CollatzFormula = (num: number): number => {
  steps.push(num)
  if (num <= 1) return 1
  if (num % 2 === 0) return CollatzFormula(num /= 2)
  return CollatzFormula((3 * num) + 1)
}

export const Collatz = (num: number): number[] => {
  steps = []
  CollatzFormula(num)
  return steps
}
