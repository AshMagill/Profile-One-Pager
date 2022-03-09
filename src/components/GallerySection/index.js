import React from 'react';
import HoverVideoPlayer from 'react-hover-video-player';

import Cart from './../../videos/cart.mkv';
import Ratings from './../../videos/ratings.mkv';
import Carousel from './../../videos/carousel.mkv';
import Pagination from './../../videos/pagination.mkv';
import Search from './../../videos/search.mkv';
import Orders from './../../videos/orders.mkv';
import Product from './../../videos/product.mkv';
import AOrder from './../../videos/orders_admin.mkv';
import Delivered from './../../videos/delivered.mkv';
import Checkout from './../../videos/checkout.mkv';

import {
  GalleryGrid,
  GalleryContainer,
  GalleryH1,
  GalleryP,
  GalleryP2,
  GalleryVideo,
  GalleryText,
  NavBtnLink,
} from './GalleryElements';

const GallerySection = () => {
  return (
    <GalleryContainer id='gallery'>
      <GalleryH1>Gallery</GalleryH1>
      <GalleryP>
        Here are just some of the features I can provide, the layout and style
        are all fully customisable!
      </GalleryP>
      <GalleryGrid>
        <NavBtnLink to='/video' state={{ mp4: Cart }}>
          <HoverVideoPlayer
            autoPlay
            muted
            videoSrc={Cart}
            pausedOverlay={
              <GalleryVideo>
                <GalleryText>
                  <GalleryP2>Shopping Cart</GalleryP2>
                </GalleryText>
              </GalleryVideo>
            }
            overlayTransitionDuration={500}
            style={{ padding: '0.1rem' }}
          />
        </NavBtnLink>
        <NavBtnLink to='/video' state={{ mp4: Ratings }}>
          <HoverVideoPlayer
            videoSrc={Ratings}
            none
            pausedOverlay={
              <GalleryVideo>
                <GalleryText>
                  <GalleryP2>Reviews and Ratings</GalleryP2>
                </GalleryText>
              </GalleryVideo>
            }
            overlayTransitionDuration={500}
            style={{ padding: '0.1rem' }}
          />
        </NavBtnLink>
        <NavBtnLink to='/video' state={{ mp4: Carousel }}>
          <HoverVideoPlayer
            videoSrc={Carousel}
            none
            autoPaused='true'
            pausedOverlay={
              <GalleryVideo>
                <GalleryText>
                  <GalleryP2>Products Carousel</GalleryP2>
                </GalleryText>
              </GalleryVideo>
            }
            overlayTransitionDuration={500}
            style={{ padding: '0.1rem' }}
          />
        </NavBtnLink>
        <NavBtnLink to='/video' state={{ mp4: Pagination }}>
          <HoverVideoPlayer
            videoSrc={Pagination}
            none
            pausedOverlay={
              <GalleryVideo>
                <GalleryText>
                  <GalleryP2>Product Pagination</GalleryP2>
                </GalleryText>
              </GalleryVideo>
            }
            overlayTransitionDuration={500}
            style={{ padding: '0.1rem' }}
          />
        </NavBtnLink>
        <NavBtnLink to='/video' state={{ mp4: Search }}>
          <HoverVideoPlayer
            videoSrc={Search}
            none
            pausedOverlay={
              <GalleryVideo>
                <GalleryText>
                  <GalleryP2>Search Feature</GalleryP2>
                </GalleryText>
              </GalleryVideo>
            }
            overlayTransitionDuration={500}
            style={{ padding: '0.1rem' }}
          />
        </NavBtnLink>
        <NavBtnLink to='/video' state={{ mp4: Orders }}>
          <HoverVideoPlayer
            videoSrc={Orders}
            none
            pausedOverlay={
              <GalleryVideo>
                <GalleryText>
                  <GalleryP2>Manage Orders</GalleryP2>
                </GalleryText>
              </GalleryVideo>
            }
            overlayTransitionDuration={500}
            style={{ padding: '0.1rem' }}
          />
        </NavBtnLink>
        <NavBtnLink to='/video' state={{ mp4: Product }}>
          <HoverVideoPlayer
            videoSrc={Product}
            none
            pausedOverlay={
              <GalleryVideo>
                <GalleryText>
                  <GalleryP2>Manage Products</GalleryP2>
                </GalleryText>
              </GalleryVideo>
            }
            overlayTransitionDuration={500}
            style={{ padding: '0.1rem' }}
          />
        </NavBtnLink>
        <NavBtnLink to='/video' state={{ mp4: AOrder }}>
          <HoverVideoPlayer
            videoSrc={AOrder}
            none
            pausedOverlay={
              <GalleryVideo>
                <GalleryText>
                  <GalleryP2>Manage Orders</GalleryP2>
                </GalleryText>
              </GalleryVideo>
            }
            overlayTransitionDuration={500}
            style={{ padding: '0.1rem' }}
          />
        </NavBtnLink>
        <NavBtnLink to='/video' state={{ mp4: Delivered }}>
          <HoverVideoPlayer
            videoSrc={Delivered}
            none
            pausedOverlay={
              <GalleryVideo>
                <GalleryText>
                  <GalleryP2>Mark Orders</GalleryP2>
                </GalleryText>
              </GalleryVideo>
            }
            overlayTransitionDuration={500}
            style={{ padding: '0.1rem' }}
          />
        </NavBtnLink>
        <NavBtnLink to='/video' state={{ mp4: Checkout }}>
          <HoverVideoPlayer
            videoSrc={Checkout}
            none
            pausedOverlay={
              <GalleryVideo>
                <GalleryText>
                  <GalleryP2>Checkout Process</GalleryP2>
                </GalleryText>
              </GalleryVideo>
            }
            overlayTransitionDuration={500}
            style={{ padding: '0.1rem' }}
          />
        </NavBtnLink>
      </GalleryGrid>
    </GalleryContainer>
  );
};

export default GallerySection;
