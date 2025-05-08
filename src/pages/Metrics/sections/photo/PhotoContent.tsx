import { observer } from "mobx-react-lite"
import { useContext } from "react"
import Skeleton from "react-loading-skeleton"
import { PhotoStateContext } from "./state/PhotoStateContext"

export const PhotoContent = observer(() => {
  const photoState = useContext(PhotoStateContext)

  return (
    <div className="metrics-page__image-container">
      {
        photoState.isLoading
          ? (
            <Skeleton
              height={200}
              borderRadius={12}
            />
          )
          : (
            <img
              src={photoState.photo.url}
              className="metrics-page__image"
              alt="metric"
              draggable={false}
            />
          )
      }
    </div>
  )
})