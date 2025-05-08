export type SimilarPhotoType = {
  photoId: number;
  photoPath: string;
  relatedColors: {
    red: number;
    green: number;
    blue: number;
  }[];
  relatedFeatures: string[];
};

function MetricsSimilarCard({
  photoId,
  photoPath,
  relatedColors,
  relatedFeatures,
}: SimilarPhotoType) {
  return (
    <li
      className="metric-similar-card"
    >
      <div className="metric-similar-card__image-container">
        <img
          src={photoPath}
          className="metric-similar-card__image"
          alt="metric"
          draggable={false}
        />
        <div className="metric-similar-card__colors">
          {
            relatedColors.map((color) => (
              <span
                className="metric-similar-card__color"
                key={String(color.blue + color.red + color.green + photoId)}
                data-cy="color"
                style={{
                  backgroundColor: `rgb(${color.red},${color.green},${color.blue})`,
                }}
              />
            ))
          }
        </div>
      </div>
      <div className="metric-similar-card__features-box">
        <p className="metric-similar-card__subtitle">Related features</p>
        <div className="metric-similar-card__tags">
          {relatedFeatures.map((feature) => (
            <span
              key={feature + String(photoId)}
              data-cy="tag"
              className="metric-similar-card__tag"
            >
              {feature}
            </span>
          ))}
        </div>

      </div>

    </li>
  );
}

export default MetricsSimilarCard;
