import {
  memo,
  useContext, useRef, useState,
} from "react";
import clsx from "clsx";
import { ReactComponent as DropArrow } from '../../../../assets/icons/icon-arrow-down.svg';
import { ReactComponent as DoneIcon } from '../../../../assets/icons/icon-done.svg';
import { ReactComponent as SortArrowsIcon } from '../../../../assets/icons/icon-sort-arrows.svg';
import { useOnClickOutside } from "../../../../common/hooks/useOnClickOutside";
import PhotosPageStateContext from "../../state/PhotosPageStateContext";

const sortList: string[] = [`uniqueness metric`, `date of upload`];

function Sort() {
  const [isVisiblePopup, setIsVisiblePopup] = useState(false);

  const photosPageState = useContext(PhotosPageStateContext);

  const sortRef = useRef<HTMLDivElement>(null);

  useOnClickOutside(sortRef, () => setIsVisiblePopup(false));

  return (
    <div
      ref={sortRef}
      className="sort"
      data-cy="sort"
    >
      <div
        className="sort__label"
        data-cy="sort-label"
      >
        <span className="sort__title">Sort by</span>
        <button
          type="button"
          onClick={() => setIsVisiblePopup(!isVisiblePopup)}
          data-cy="sort-button"
          className="button sort__btn-action"
        >
          <span
            className="sort__variable"
            data-cy="sort-variable"
          >
            {photosPageState.sort}
          </span>
          <DropArrow className="sort__arrow-icon" />
        </button>
      </div>

      <button
        type="button"
        className="button sort__select-popup-btn"
        onClick={() => setIsVisiblePopup(!isVisiblePopup)}
      >
        <SortArrowsIcon />
      </button>
      {
        isVisiblePopup && (
          <div
            className="sort__popup"
            data-cy="sort-popup"
          >
            <ul className="sort__popup-list">
              {
                sortList.map((sort) => (
                  <li
                    key={sort}
                    data-cy="sort-popup-item"
                    className={clsx(`sort__popup-item`, {
                      'sort__popup-item--active': photosPageState.sort === sort,
                    })}
                  >
                    <button
                      type="button"
                      className="button"
                      onClick={() => changeSort(sort)}
                      data-cy="sort-popup-item-button"
                      disabled={photosPageState.sort === sort}
                    >
                      <DoneIcon />
                      <span
                        className="sort__variable"
                        data-cy="sort-name"
                      >
                        {sort}
                      </span>
                    </button>
                  </li>
                ))
              }
            </ul>
          </div>
        )
      }
    </div>
  );

  function changeSort(name: string) {
    photosPageState.sort = name;
    setIsVisiblePopup(false);
  }
}

export default memo(Sort);
