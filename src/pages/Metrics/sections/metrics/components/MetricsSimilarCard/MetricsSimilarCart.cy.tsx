import MetricsSimilarCard, { SimilarPhotoType } from "./MetricsSimilarCard";

describe(`MetricsSimilarCard`, () => {
  it(`count of colors item SHOULD be one`, () => {
    mountComponent({
      photoId: 1,
      photoPath: `https://stickerbase.ru/wp-content/uploads/2021/07/61607.png`,
      relatedColors: [{
        red: 57,
        green: 56,
        blue: 56,
      },
      ],
      relatedFeatures: [`calm`],
    });
    cy.getByData(`color`).its(`length`).should(`eq`, 1);
  });

  it(`count of colors item SHOULD be two`, () => {
    mountComponent({
      photoId: 1,
      photoPath: `https://stickerbase.ru/wp-content/uploads/2021/07/61607.png`,
      relatedColors: [{
        red: 57,
        green: 56,
        blue: 56,
      },
      {
        red: 30,
        green: 20,
        blue: 16,
      },
      ],
      relatedFeatures: [`calm`],
    });
    cy.getByData(`color`).its(`length`).should(`eq`, 2);
  });

  it(`count of tags item SHOULD be one`, () => {
    mountComponent({
      photoId: 1,
      photoPath: `https://stickerbase.ru/wp-content/uploads/2021/07/61607.png`,
      relatedColors: [{
        red: 57,
        green: 56,
        blue: 56,
      },
      ],
      relatedFeatures: [`calm`],
    });
    cy.getByData(`tag`).its(`length`).should(`eq`, 1);
  });

  it(`count of tags item SHOULD be two`, () => {
    mountComponent({
      photoId: 1,
      photoPath: `https://stickerbase.ru/wp-content/uploads/2021/07/61607.png`,
      relatedColors: [{
        red: 57,
        green: 56,
        blue: 56,
      },
      ],
      relatedFeatures: [`calm`, `love`],
    });
    cy.getByData(`tag`).its(`length`).should(`eq`, 2);
  });
});
function mountComponent({
  photoId,
  photoPath,
  relatedColors,
  relatedFeatures,
}: SimilarPhotoType) {
  cy.mount(<MetricsSimilarCard
    photoId={photoId}
    photoPath={photoPath}
    relatedColors={relatedColors}
    relatedFeatures={relatedFeatures}
  />);
}
