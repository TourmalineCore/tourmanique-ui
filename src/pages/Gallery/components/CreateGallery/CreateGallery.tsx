import image1 from "../../../../assets/images/create-gallery-1-image.png";
import image2 from "../../../../assets/images/create-gallery-2-image.png";
import image3 from "../../../../assets/images/create-gallery-3-image.png";
import image4 from "../../../../assets/images/create-gallery-4-image.png";
import image5 from "../../../../assets/images/create-gallery-5-image.png";

function CreateGallery() {
  const imageArray = [
    {
      id: 1,
      alt: `image1`,
      src: image1,
    },
    {
      id: 2,
      alt: `image2`,
      src: image2,
    },
    {
      id: 3,
      alt: `image3`,
      src: image3,
    },
    {
      id: 4,
      alt: `image4`,
      src: image4,
    },
    {
      id: 5,
      alt: `image5`,
      src: image5,
    },
  ];
  return (
    <div className="create-gallery">
      <div className="create-gallery__image-row">
        {
          imageArray.map((image) => (
            <img
              key={image.id}
              src={image.src}
              alt={image.alt}
              draggable={false}
              className="create-gallery__image"
            />
          ))
        }
      </div>
      <div className="create-gallery__text">
        <h1 className="create-gallery__title">Create a gallery to get started</h1>
        <p className="create-gallery__description">
          With galleries you can group photos by category or event
        </p>
      </div>

      <button
        type="button"
        className="button button--bright create-gallery__position-btn"
      >
        Create a gallery
      </button>

    </div>
  );
}
export default CreateGallery;
