import { makeAutoObservable } from 'mobx'

export class PhotoState {
  private _photo = {
    url: ``
  }
  private _isLoading: boolean = false

  constructor() {
    makeAutoObservable(this)
  }

  initialize({
    photo,
  }: {
    photo: any,
  }) {
    this._photo = photo
  }

  get photo() {
    return this._photo
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