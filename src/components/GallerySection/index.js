import React, { useEffect } from 'react';
import HoverVideoPlayer from 'react-hover-video-player';

import Cart from '../../videos/cart.mkv';
import Ratings from '../../videos/ratings.mkv';
import Carousel from '../../videos/carousel.mkv';
import Pagination from '../../videos/pagination.mkv';
import Search from '../../videos/search.mkv';
import Orders from '../../videos/orders.mkv';
import Product from '../../videos/product.mkv';
import Users from '../../videos/users.mkv';
import AOrder from '../../videos/orders_admin.mkv';
import Delivered from '../../videos/delivered.mkv';
import Checkout from '../../videos/checkout.mkv';

import {
  GalleryGrid,
  GalleryContainer,
  GalleryH1,
  GalleryP,
  GalleryVideo,
  GalleryText,
} from './GalleryElements';

const GallerySection = () => {
  return (
    <GalleryContainer id='gallery'>
      <GalleryH1>Gallery</GalleryH1>
      <GalleryP>
        Here are some of the features I can provide, the layout and style are
        all fully customisable!
      </GalleryP>
      <GalleryGrid>
        <HoverVideoPlayer
          videoSrc={Cart}
          pausedOverlay={
            <GalleryVideo>
              <GalleryText>
                <h1>Full featured shopping cart</h1>
              </GalleryText>
            </GalleryVideo>
          }
          overlayTransitionDuration={1000}
          videoStyle={{ border: '1px solid gray', borderRadius: '0.5rem' }}
          controls
        />
        <HoverVideoPlayer
          videoSrc={Ratings}
          pausedOverlay={
            <GalleryVideo>
              <GalleryText>
                <h1>Product Reviews and Ratings</h1>
              </GalleryText>
            </GalleryVideo>
          }
          overlayTransitionDuration={1000}
          videoStyle={{ borderRadius: '0.5rem' }}
          controls
        />
        <HoverVideoPlayer
          videoSrc={Carousel}
          pausedOverlay={
            <GalleryVideo>
              <GalleryText>
                <h1>Top products carousel</h1>
              </GalleryText>
            </GalleryVideo>
          }
          overlayTransitionDuration={1000}
          videoStyle={{ borderRadius: '0.5rem' }}
          controls
        />
        <HoverVideoPlayer
          videoSrc={Pagination}
          pausedOverlay={
            <GalleryVideo>
              <GalleryText>
                <h1>Product pagination</h1>
              </GalleryText>
            </GalleryVideo>
          }
          overlayTransitionDuration={1000}
          videoStyle={{ borderRadius: '0.5rem' }}
          controls
        />
        <HoverVideoPlayer
          videoSrc={Search}
          pausedOverlay={
            <GalleryVideo>
              <GalleryText>
                <h1>Product search feature</h1>
              </GalleryText>
            </GalleryVideo>
          }
          overlayTransitionDuration={1000}
          videoStyle={{ borderRadius: '0.5rem' }}
          controls
        />
        <HoverVideoPlayer
          videoSrc={Orders}
          pausedOverlay={
            <GalleryVideo>
              <GalleryText>
                <h1>User profile with orders</h1>
              </GalleryText>
            </GalleryVideo>
          }
          overlayTransitionDuration={1000}
          videoStyle={{ borderRadius: '0.5rem' }}
          controls
        />
        <HoverVideoPlayer
          videoSrc={Product}
          pausedOverlay={
            <GalleryVideo>
              <GalleryText>
                <h1>Admin Product managment</h1>
              </GalleryText>
            </GalleryVideo>
          }
          overlayTransitionDuration={1000}
          videoStyle={{ borderRadius: '0.5rem' }}
          controls
        />
        <HoverVideoPlayer
          videoSrc={Users}
          pausedOverlay={
            <GalleryVideo>
              <GalleryText>
                <h1>Admin user managment</h1>
              </GalleryText>
            </GalleryVideo>
          }
          overlayTransitionDuration={1000}
          videoStyle={{ borderRadius: '0.5rem' }}
          controls
        />
        <HoverVideoPlayer
          videoSrc={AOrder}
          pausedOverlay={
            <GalleryVideo>
              <GalleryText>
                <h1>Admin Order details page</h1>
              </GalleryText>
            </GalleryVideo>
          }
          overlayTransitionDuration={1000}
          videoStyle={{ borderRadius: '0.5rem' }}
          controls
        />
        <HoverVideoPlayer
          videoSrc={Delivered}
          pausedOverlay={
            <GalleryVideo>
              <GalleryText>
                <h1>Mark orders as delivered option</h1>
              </GalleryText>
            </GalleryVideo>
          }
          overlayTransitionDuration={1000}
          videoStyle={{ borderRadius: '0.5rem' }}
          controls
        />
        <HoverVideoPlayer
          videoSrc={Checkout}
          pausedOverlay={
            <GalleryVideo>
              <GalleryText>
                <h1>Checkout process (shipping, paymemt method etc.)</h1>
              </GalleryText>
            </GalleryVideo>
          }
          overlayTransitionDuration={1000}
          videoStyle={{ borderRadius: '0.5rem' }}
          controls
        />
      </GalleryGrid>
    </GalleryContainer>
  );
};

export default GallerySection;
