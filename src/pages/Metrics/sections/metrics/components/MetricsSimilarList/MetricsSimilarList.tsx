/* eslint-disable no-nested-ternary */
import MetricsSimilarCard, { SimilarPhotoType } from '../MetricsSimilarCard/MetricsSimilarCard';
import MetricSimilarLoader from '../../../../assets/images/similar-loader-image.svg';

function MetricsSimilarList({
  isLoading,
  similarPhotosArray,
}: {
  isLoading: boolean;
  similarPhotosArray: SimilarPhotoType[];
}) {
  return (
    <div
      className="metrics-similar-list"

    >
      <h2 className="metrics-similar-list__title">Similar photos</h2>
      {isLoading ? (
        <div className="metrics-similar-list__empty-container">
          <img
            src={MetricSimilarLoader}
            className="metrics-similar-list__empty-loader-svg"
            data-cy="empty-loader-svg"
            alt="loader similar images"
            draggable={false}
          />
          <span
            className="metrics-similar-list__empty"
            data-cy="empty-loader-text"
          >
            We&apos;ll start searching for photos once we&apos;ve highlighted
            all the tags
          </span>
        </div>
      ) : similarPhotosArray.length === 0 ? (
        <div
          className="metrics-similar-list__empty-container"
          data-cy="empty-container"
        >
          <span className="metrics-similar-list__empty">
            The photo is unique so it has
            no similar photos
          </span>
        </div>
      ) : (
        <ul
          className="metrics-similar-list__full-container"
          data-cy="full-container"
        >
          {similarPhotosArray.map((photo) => (
            <MetricsSimilarCard
              photoId={photo.photoId}
              key={photo.photoId}
              photoPath={photo.photoPath}
              relatedColors={photo.relatedColors}
              relatedFeatures={photo.relatedFeatures}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

export default MetricsSimilarList;
