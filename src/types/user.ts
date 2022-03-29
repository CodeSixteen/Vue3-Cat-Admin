export interface CostomResponse<T> {
  code: number
  msg: string | null
  data: T
}
