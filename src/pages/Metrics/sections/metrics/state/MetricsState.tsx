import { makeAutoObservable } from 'mobx'

export class MetricsState {
  private _metrics = {
    uniqueness: {
      mainInPercentage: 0,
      colorsInPercentage: 0,
      otherInPercentage: 0,
    },
    features: {
      colors: [] as {
        red: number,
        green: number,
        blue: number,
      }[],
      emotions: [] as string[],
      objects: [] as string[],
      associations: [] as string[],
    }
  }
  private _isLoading: boolean = false

  constructor() {
    makeAutoObservable(this)
  }

  initialize({
    metrics,
  }: {
    metrics: any,
  }) {
    this._metrics = metrics
  }

  get metrics() {
    return this._metrics
  }

  get isLoading() {
    return this._isLoading
  }


  setIsLoading({
    isLoading,
  }: {
    isLoading: boolean,
  }) {
    this._isLoading = isLoading
  }
}