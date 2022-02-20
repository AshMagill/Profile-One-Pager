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
  GalleryP2,
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
          muted
          unloadVideoOnPaused
          none
          pausedOverlay={
            <GalleryVideo>
              <GalleryText>
                <GalleryP2>Full featured shopping cart</GalleryP2>
              </GalleryText>
            </GalleryVideo>
          }
          overlayTransitionDuration={1000}
        />
        <HoverVideoPlayer
          videoSrc={Ratings}
          muted
          unloadVideoOnPaused
          none
          pausedOverlay={
            <GalleryVideo>
              <GalleryText>
                <GalleryP2>Product Reviews and Ratings</GalleryP2>
              </GalleryText>
            </GalleryVideo>
          }
          overlayTransitionDuration={1000}
          videoStyle={{ borderRadius: '0.5rem' }}
        />
        <HoverVideoPlayer
          videoSrc={Carousel}
          muted
          unloadVideoOnPaused
          none
          pausedOverlay={
            <GalleryVideo>
              <GalleryText>
                <GalleryP2>Top products carousel</GalleryP2>
              </GalleryText>
            </GalleryVideo>
          }
          overlayTransitionDuration={1000}
          videoStyle={{ borderRadius: '0.5rem' }}
        />
        <HoverVideoPlayer
          videoSrc={Pagination}
          muted
          unloadVideoOnPaused
          none
          pausedOverlay={
            <GalleryVideo>
              <GalleryText>
                <GalleryP2>Product pagination</GalleryP2>
              </GalleryText>
            </GalleryVideo>
          }
          overlayTransitionDuration={1000}
          videoStyle={{ borderRadius: '0.5rem' }}
        />
        <HoverVideoPlayer
          videoSrc={Search}
          muted
          unloadVideoOnPaused
          none
          pausedOverlay={
            <GalleryVideo>
              <GalleryText>
                <GalleryP2>Product search feature</GalleryP2>
              </GalleryText>
            </GalleryVideo>
          }
          overlayTransitionDuration={1000}
          videoStyle={{ borderRadius: '0.5rem' }}
        />
        <HoverVideoPlayer
          videoSrc={Orders}
          muted
          unloadVideoOnPaused
          none
          pausedOverlay={
            <GalleryVideo>
              <GalleryText>
                <GalleryP2>User profile with orders</GalleryP2>
              </GalleryText>
            </GalleryVideo>
          }
          overlayTransitionDuration={1000}
          videoStyle={{ borderRadius: '0.5rem' }}
        />
        <HoverVideoPlayer
          videoSrc={Product}
          muted
          unloadVideoOnPaused
          none
          pausedOverlay={
            <GalleryVideo>
              <GalleryText>
                <GalleryP2>Admin Product managment</GalleryP2>
              </GalleryText>
            </GalleryVideo>
          }
          overlayTransitionDuration={1000}
          videoStyle={{ borderRadius: '0.5rem' }}
        />
        <HoverVideoPlayer
          videoSrc={Users}
          muted
          unloadVideoOnPaused
          none
          pausedOverlay={
            <GalleryVideo>
              <GalleryText>
                <GalleryP2>Admin user managment</GalleryP2>
              </GalleryText>
            </GalleryVideo>
          }
          overlayTransitionDuration={1000}
          videoStyle={{ borderRadius: '0.5rem' }}
        />
        <HoverVideoPlayer
          videoSrc={AOrder}
          muted
          unloadVideoOnPaused
          none
          pausedOverlay={
            <GalleryVideo>
              <GalleryText>
                <GalleryP2>Admin Order details page</GalleryP2>
              </GalleryText>
            </GalleryVideo>
          }
          overlayTransitionDuration={1000}
          videoStyle={{ borderRadius: '0.5rem' }}
        />
        <HoverVideoPlayer
          videoSrc={Delivered}
          muted
          unloadVideoOnPaused
          none
          pausedOverlay={
            <GalleryVideo>
              <GalleryText>
                <GalleryP2>Mark orders as delivered option</GalleryP2>
              </GalleryText>
            </GalleryVideo>
          }
          overlayTransitionDuration={1000}
          videoStyle={{ borderRadius: '0.5rem' }}
        />
        <HoverVideoPlayer
          videoSrc={Checkout}
          muted
          unloadVideoOnPaused
          none
          pausedOverlay={
            <GalleryVideo>
              <GalleryText>
                <GalleryP2>
                  Checkout process (shipping, paymemt method etc.)
                </GalleryP2>
              </GalleryText>
            </GalleryVideo>
          }
          overlayTransitionDuration={1000}
          videoStyle={{ borderRadius: '0.5rem' }}
        />
      </GalleryGrid>
    </GalleryContainer>
  );
};

export default GallerySection;