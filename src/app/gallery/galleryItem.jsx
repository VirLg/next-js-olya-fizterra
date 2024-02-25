'use client';
import React from 'react';
import Link from 'next/link';
import { arr } from './galleryData';
const GalleryItem = ({ idx }) => {
  // const [deleteCar, result] = useDeleteCarMutation();

  // const dispatch = useDispatch();
  const handleFavorite = el => {
    //   dispatch(favorite(el));
  };
  const handleLearnMore = el => {
    //   dispatch(modalShow(true));
    //   handleModal(el);
  };
  return (
    <>
      {arr.map((el, idx) => {
        return (
          <li key={idx}>
            <Link href={`/gallery/${idx}`}>
              <div className="relative">
                <div>
                  <img src={el.img.src} alt="" />
                </div>

                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginBottom: '8px',
                  }}
                >
                  <div style={{ display: 'flex', gap: '4px' }}>
                    <div className="titleFont">{el.title}</div>
                  </div>
                </div>
              </div>
            </Link>
          </li>
        );
      })}
    </>
  );
};

export default GalleryItem;
