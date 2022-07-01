import styled from 'styled-components';

export const MainCustomBannerContainer = styled.section`
  width: 100%;
  height: 450px;
`;

interface IMainCustomBannerCaption {
  banner: string;
}
export const MainCustomBannerCaption = styled.section<IMainCustomBannerCaption>`
  width: 100%;
  height: 450px;
  position: absolute;
  left: 0px;
  background-image: ${(props) => `url(${props.banner})`};
  background-size: cover;
  background-position: center center;
  mix-blend-mode: multiply;
  &::before {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
    left: 0px;
    background: #000000;
    opacity: 0.8;
    z-index: -100 !important;
  }
`;
