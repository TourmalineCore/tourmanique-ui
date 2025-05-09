import { createContext } from "react"
import { PhotoState } from "./PhotoState"

export const PhotoStateContext = createContext<PhotoState>(null as unknown as PhotoState)