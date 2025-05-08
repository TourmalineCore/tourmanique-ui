import { useContext } from "react";
import { observer } from "mobx-react-lite";
import Skeleton from 'react-loading-skeleton';
import GalleriesPageStateContext from "../../state/GalleriesPageStateContext";
import GalleryCard from "../GalleryCard/GalleryCard";

function GalleriesList({
  onNameApply,
  onGalleryDelete,
  isLoading,
}: {
  onNameApply: ({
    galleryId,
    newName,
  }: {
    galleryId: number;
    newName: string;
  }) => unknown;
  onGalleryDelete: (id: number) => unknown;
  isLoading: boolean;
}) {
  const galleriesPageState = useContext(GalleriesPageStateContext);

  const skeletons = [...new Array(6)].map((_, index) => (
    <li
      // eslint-disable-next-line react/no-array-index-key
      key={index}
      className="galleries-list__item"
      data-cy="galleries-list-skeleton"
    >
      <Skeleton
        height={200}
        borderRadius={12}
      />
    </li>
  ));

  return (
    <ul className="galleries-list">
      {
        isLoading ? (skeletons) : galleriesPageState.galleries.map(({
          id,
          name,
          previewPhotos,
          // @ts-ignore
          photosCount
        }) => (
          <li
            className="galleries-list__item"
            key={`${id}-${name}`}
          >
            <GalleryCard
              id={id}
              name={name}
              newlyCreated={galleriesPageState.newlyCreatedGalleryId === id}
              onNameApply={(newName) => {
                onNameApply({
                  galleryId: id,
                  newName,
                });
              }}
              onDelete={() => {
                onGalleryDelete(id);
              }}
              photosCount={photosCount}
              previewPhotos={previewPhotos}
            />
          </li>
        ))
      }
    </ul>

  );
}

export default observer(GalleriesList);
