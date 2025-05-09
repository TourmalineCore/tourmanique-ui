import { observer } from "mobx-react-lite"
import { useContext } from "react"
import MetricsInfo from "./components/MetricsInfo/MetricsInfo"
import { MetricsStateContext } from "./state/MetricsStateContext"

export const MetricsContent = observer(() => {
  const metricsState = useContext(MetricsStateContext)

  return (
    <MetricsInfo
      uniqueness={metricsState.metrics.uniqueness}
      features={metricsState.metrics.features}
      isLoading={metricsState.isLoading}
    />
  )
})