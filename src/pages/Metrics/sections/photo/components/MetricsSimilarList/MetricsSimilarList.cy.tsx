import { SimilarPhotoType } from "../MetricsSimilarCard/MetricsSimilarCard";
import MetricsSimilarList from "./MetricsSimilarList";

describe(`MetricsSimilarList`, () => {
  it(`SHOULD render no similar images WHEN there are no images`, () => {
    mountComponent({
      isLoading: false,
      similarPhotosArray: [],
    });
    cy.getByData(`empty-container`).should(`be.exist`);
  });
  it(`SHOULD render loading text WHEN loading props true`, () => {
    mountComponent({
      isLoading: true,
      similarPhotosArray: [],
    });
    cy.getByData(`empty-loader-text`).should(`be.exist`);
  });
  it(`SHOULD render cards WHEN loading props false and array has values`, () => {
    mountComponent({
      isLoading: false,
      similarPhotosArray: [{
        photoId: 24,
        photoPath: `https://stickerbase.ru/wp-content/uploads/2021/07/61607.png`,
        relatedColors: [{
          red: 57,
          green: 56,
          blue: 56,
        },
        {
          red: 58,
          green: 48,
          blue: 106,
        },
        ],
        relatedFeatures: [`calm`, `mountain`, `tree`, `lake`, `snow`],
      }],
    });
    cy.getByData(`full-container`).should(`be.exist`);
  });
});

function mountComponent({
  isLoading,
  similarPhotosArray,
}: {
  isLoading: boolean;
  similarPhotosArray: SimilarPhotoType[];
}) {
  cy.mount(<MetricsSimilarList
    isLoading={isLoading}
    similarPhotosArray={similarPhotosArray}
  />);
}
