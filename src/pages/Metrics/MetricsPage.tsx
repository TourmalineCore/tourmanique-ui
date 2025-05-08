/* eslint-disable no-nested-ternary */
import { useMemo } from 'react';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
// import MetricSimilarList from './components/MetricsSimilarList/MetricsSimilarList';

import { MetricsContainer } from './sections/metrics/MetricsContainer';
import { useParams } from 'react-router-dom';
import { MetricsStateContext } from './sections/metrics/state/MetricsStateContext';
import { MetricsState } from './sections/metrics/state/MetricsState';
import { PhotoStateContext } from './sections/photo/state/PhotoStateContext';
import { PhotoContainer } from './sections/photo/PhotoContainer';
import { PhotoState } from './sections/photo/state/PhotoState';

function MetricsPage() {
  const {
    galleryId,
    id
  } = useParams();

  const photoState = useMemo(
    () => new PhotoState(),
    [],
  )

  const metricsState = useMemo(
    () => new MetricsState(),
    [],
  )

  return (
    <div className="metrics-page">
      <Breadcrumbs />
      <div className="metrics-page__wrapper">

        <PhotoStateContext.Provider value={photoState}>
          <PhotoContainer
            galleryId={Number(galleryId)}
            photoId={Number(id)}
          />
        </PhotoStateContext.Provider>

        <MetricsStateContext.Provider value={metricsState}>
          <MetricsContainer
            galleryId={Number(galleryId)}
            photoId={Number(id)}
          />
        </MetricsStateContext.Provider>

        {/* <MetricSimilarList
          isLoading={isLoading}
          similarPhotosArray={similarPhotosArray}
        /> */}
      </div>
    </div>
  );
}

export default MetricsPage;
