import styled from 'styled-components';

export const ItemCarouselAdjust = styled.section`
  width: 100%;
  height: 500px;
  &::before {
    display: block;
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    background: #000000;
    opacity: 0.9;
    mix-blend-mode: multiply;
  }
  .carousel-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .carousel-image-poster {
    width: 100%;
    max-width: 200px;
    border-radius: 10px;
  }
  .col-caption {
    @media (max-width: 800px) {
      text-align: center;
    }
  }
  .carousel-caption {
    bottom: 50%;
    transform: translateY(50%);
    text-align: left;
  }
`;
