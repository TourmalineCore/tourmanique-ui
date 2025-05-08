import { observer } from "mobx-react-lite"
import { useContext, useEffect } from "react"
import { api } from "../../../../common/utils/HttpClient"
import { PhotoContent } from "./PhotoContent"
import { PhotoStateContext } from "./state/PhotoStateContext"

export const PhotoContainer = observer(({
  galleryId,
  photoId,
}: {
  galleryId: number,
  photoId: number,
}) => {
  const photoState = useContext(PhotoStateContext)

  useEffect(() => {
    async function loadPhotoAsync() {
      photoState.setIsLoading({
        isLoading: true
      })

      try {
        const {
          data: {
            photo,
          }
        } = await api.get(`/galleries/${galleryId}/${photoId}/photo`)

        photoState.initialize({
          photo,
        })
      } finally {
        photoState.setIsLoading({
          isLoading: false
        })
      }
    }

    loadPhotoAsync()
  }, [])

  return (
    <PhotoContent />
  )
})