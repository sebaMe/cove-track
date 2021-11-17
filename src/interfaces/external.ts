export interface CountryStatistic {
  continent: string
  country: string
  population: number
  time: Date
  cases: {
    new: string
    active: number
    critical: number
    recovered: number
    total: number
    '1M_pop': string
  }
  tests: {
    total: number
    '1M_pop': string
  }
  deaths: {
    new: string
    total: number
    '1M_pop': string
  }
}

export interface StatisticsResponse {
  response: CountryStatistic[]
}
