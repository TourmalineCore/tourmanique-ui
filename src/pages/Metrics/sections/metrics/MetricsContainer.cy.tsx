import { associationsArray, colorsArray, emotionsArray, objectsArray } from "../../MetricsTestValues.data"
import { MetricsContainer } from "./MetricsContainer"
import { MetricsState } from "./state/MetricsState"
import { MetricsStateContext } from "./state/MetricsStateContext"

const GALLERY_ID = 1
const PHOTO_ID = 2

describe(`ToDosContainer`, () => {
  beforeEach(() => {
    const metricsResponse = {
      metrics: {
        uniqueness: {
          mainInPercentage: 75,
          colorsInPercentage: 44,
          otherInPercentage: 32, 
        },
        features: {
          colors: colorsArray,
          emotions: emotionsArray,
          objects: objectsArray,
          associations: associationsArray,
        }
      },
    }

    cy.intercept(
      `GET`,
      `*/galleries/${GALLERY_ID}/${PHOTO_ID}/metrics`,
      metricsResponse,
    )
  })

  describe(`Initialization`, initializationTests)
})


function initializationTests() {
  it(`
  GIVEN metrics from network
  WHEN render the component
  SHOULD see them
  `, () => {
    mountComponent()

    cy.contains(`75%`)
    cy.contains(`44%`)
    cy.contains(`32%`)
    cy.contains(`calm`)
    cy.contains(`sky`)
    cy.contains(`vacation`)
  })
}

function mountComponent() {
  const metricsState = new MetricsState()

  cy.mount(
    <MetricsStateContext.Provider value={metricsState}>
      <MetricsContainer 
        galleryId={GALLERY_ID}
        photoId={PHOTO_ID}
      />
    </MetricsStateContext.Provider>,
  )
}