import { observer } from "mobx-react-lite"
import { useContext, useEffect } from "react"
import { api } from "../../../../common/utils/HttpClient"
import { MetricsContent } from "./MetricsContent"
import { MetricsStateContext } from "./state/MetricsStateContext"

export const MetricsContainer = observer(({
  galleryId,
  photoId,
}: {
  galleryId: number,
  photoId: number,
}) => {
  const metricsState = useContext(MetricsStateContext)

  useEffect(() => {
    async function loadMetricsAsync() {
      metricsState.setIsLoading({
        isLoading: true
      })

      try {
        const {
          data: {
            metrics,
          }
        } = await api.get(`/galleries/${galleryId}/${photoId}/metrics`)

        metricsState.initialize({
          metrics,
        })
      } finally {
        metricsState.setIsLoading({
          isLoading: false
        })
      }
    }

    loadMetricsAsync()
  }, [])

  return (
    <MetricsContent />
  )
})