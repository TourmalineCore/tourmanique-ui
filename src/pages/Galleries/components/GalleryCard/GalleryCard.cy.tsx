import '../../../../../cypress/support/commands';

import GalleryCard from './GalleryCard';

describe(`GalleryCard`, () => {
  describe(`name default rendering`, defaultNameRenderingTests);

  describe(`name editing`, nameEditingTests);

  describe(`photo preview`, photoPreviewTests);

  describe(`delete gallery`, deleteGalleryTests);
});

function defaultNameRenderingTests() {
  it(`newly created gallery card SHOULD have name field filled and focused`, () => {
    mountComponent({
      id: 1,
      newlyCreated: true,
    });

    cy.getByData(`gallery-name-input`)
      .should(`have.value`, `new gallery`)
      .focused();
  });
}

function nameEditingTests() {
  it(`SHOULD apply changes to name WHEN pressing Enter in focused name`, () => {
    mountComponent({
      id: 1,
      newlyCreated: true,
    });

    cy.getByData(`gallery-name-input`)
      .type(`123`);

    cy.getByData(`gallery-name-input`)
      .should(`have.value`, `new gallery123`)
      .type(`{enter}`);

    checkOnApplyCalledOnce({
      expectedName: `new gallery123`,
    });
  });

  it(`SHOULD apply changes to name WHEN focus out in focused name`, () => {
    mountComponent({
      id: 1,
      newlyCreated: true,
    });

    cy.getByData(`gallery-name-input`)
      .type(`!!!`);

    cy.getByData(`gallery-name-input`)
      .blur();

    checkOnApplyCalledOnce({
      expectedName: `new gallery!!!`,
    });
  });

  it(`SHOULD discard changes to name and apply it with original name WHEN pressing Escape in focused name`, () => {
    mountComponent({
      id: 1,
      newlyCreated: true,
    });

    cy.getByData(`gallery-name-input`)
      .type(`777 {esc}`);

    checkOnApplyCalledOnce({
      expectedName: `new gallery`,
    });

    cy.getByData(`gallery-name-input`)
      .should(`have.value`, `new gallery`);
  });

  it(`SHOULD discard changes to name and apply it with original name WHEN pressing Enter in focused empty name`, () => {
    mountComponent({
      id: 1,
      newlyCreated: true,
    });

    cy.getByData(`gallery-name-input`)
      .clear();

    cy.getByData(`gallery-name-input`)
      .type(`{enter}`);

    checkOnApplyCalledOnce({
      expectedName: `new gallery`,
    });

    cy.getByData(`gallery-name-input`)
      .should(`have.value`, `new gallery`);
  });

  it(`SHOULD discard changes to name and apply it with original name WHEN focus out in focused empty name`, () => {
    mountComponent({
      id: 1,
      newlyCreated: true,
    });

    cy.getByData(`gallery-name-input`)
      .clear();

    cy.getByData(`gallery-name-input`)
      .blur();

    checkOnApplyCalledOnce({
      expectedName: `new gallery`,
    });

    cy.getByData(`gallery-name-input`)
      .should(`have.value`, `new gallery`);
  });

  it(`SHOULD have the possibility to edit name WHEN it is not a newly created one`, () => {
    mountComponent({
      id: 1,
      name: `my super`,
      newlyCreated: false,
    });

    cy.getByData(`gallery-name-input`)
      .click();

    cy.getByData(`gallery-name-input`)
      .type(` duper`);

    cy.getByData(`gallery-name-input`)
      .blur();

    checkOnApplyCalledOnce({
      expectedName: `my super duper`,
    });
  });
}

function photoPreviewTests() {
  it(`SHOULD show dummy picture WHEN no image is available`, () => {
    mountComponent({
      id: 1,
      newlyCreated: true,
      previewPhotos: [],
    });

    cy.getByData(`gallery-photo-preview`)
      .should(`have.attr`, `alt`)
      .and(`equal`, `No photos have been added to new gallery yet`);
  });

  it(`SHOULD show a single photo on gallery card preview WHEN only one image is added to the gallery`, () => {
    mountComponent({
      id: 1,
      newlyCreated: false,
      previewPhotos: [
        { photoPath: `https://picsum.photos/200/300` },
      ],
    });

    cy.getByData(`gallery-photo-collage`)
      .get(`img`)
      .should(`have.length`, 1);
  });

  it(`SHOULD show a single photo on gallery card preview WHEN more than 1 and less than 4 images are added to the gallery`, () => {
    mountComponent({
      id: 1,
      newlyCreated: false,
      previewPhotos: [
        { photoPath: `https://picsum.photos/200/300` },
        { photoPath: `https://picsum.photos/400/300` },
        { photoPath: `https://picsum.photos/400/400` },
      ],
    });

    cy.getByData(`gallery-card-preview-image`)
      .should(`have.length`, 1);
  });

  it(`SHOULD show a collage of 4 photos on gallery card preview WHEN 4 images are added to the gallery`, () => {
    mountComponent({
      id: 1,
      newlyCreated: false,
      previewPhotos: [
        { photoPath: `https://picsum.photos/200/300` },
        { photoPath: `https://picsum.photos/400/300` },
        { photoPath: `https://picsum.photos/400/400` },
        { photoPath: `https://picsum.photos/300/200` },
      ],
    });

    cy.getByData(`gallery-card-preview-image`)
      .should(`have.length`, 4);
  });

  it(`SHOULD show a collage of 4 photos on gallery card preview WHEN more than 4 images are added to the gallery`, () => {
    mountComponent({
      id: 1,
      newlyCreated: false,
      previewPhotos: [
        { photoPath: `https://picsum.photos/200/300` },
        { photoPath: `https://picsum.photos/400/300` },
        { photoPath: `https://picsum.photos/400/400` },
        { photoPath: `https://picsum.photos/300/200` },
        { photoPath: `https://picsum.photos/500/200` },
      ],
    });

    cy.getByData(`gallery-card-preview-image`)
      .should(`have.length`, 4);
  });
}

function deleteGalleryTests() {
  it(`SHOULD delete a gallery WHEN this gallery's Delete button is clicked`, () => {
    mountComponent({
      id: 1,
      newlyCreated: false,
      previewPhotos: [],
    });

    cy.getByData(`delete-gallery-button`).click();

    cy.get(`@onDelete`)
      .should(`have.been.calledOnce`);
  });
}

function checkOnApplyCalledOnce(
  {
    expectedName,
  }: {
    expectedName: string;
  },
) {
  cy.get(`@onNameApply`)
    .should(`have.been.calledOnceWith`, expectedName);
}

function mountComponent({
  id,
  name = `new gallery`,
  newlyCreated,
  previewPhotos = [],
}: {
  id: number;
  name?: string;
  newlyCreated: boolean;
  onNameApply?: (newName: string) => unknown;
  onDelete?: () => unknown;
  photos?: [];
  previewPhotos?: { photoPath: string }[];
}) {
  const onNameApplySpy = cy.spy().as(`onNameApply`);
  const onDeleteSpy = cy.spy().as(`onDelete`);

  cy.mount(
    <GalleryCard
      id={id}
      previewPhotos={previewPhotos}
      photosCount={0}
      name={name}
      newlyCreated={newlyCreated}
      onNameApply={onNameApplySpy}
      onDelete={onDeleteSpy}
    />,
  );
}
