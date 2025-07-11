export interface Report {
  id: string
  name: string
  cards: { total: number; average: number }
  line: { date: string; value: number }[]
  bar: { category: string; value: number }[]
}
