import logo from "./logo.png";
// import `css`and `ThemeProvider` from "@emotion/react" package
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
// import styled components, theming and animation from "./styles.js" file
import { CardWrapper } from './styles';
import { ImageWrapper } from "./styles";
import { TextWrapper } from "./styles";
import { TitleWrapper } from "./styles";
import { DescriptionWrapper } from "./styles";
import { ActionWrapper } from "./styles";
import { Button } from './styles';

const hotels = [
  {
    id: 1,
    src: "images/hotel-leisure.jpeg",
    alt: "",
    title: "Hotel Leisure",
    description: "Enjoy world-class shopping in the heart of the city.",
  },
  {
    id: 2,
    src: "images/hotel-paradise.jpeg",
    alt: "",
    title: "Hotel Paradise",
    description: "Enjoy open-air spaces, waterfront dining, and poolside fun.",
  },
  {
    id: 3,
    src: "images/hotel-holiday.jpeg",
    alt: "",
    title: "Hotel Holiday",
    description: "Discover your home away from home.",
  },
];

// Apply styling to code within the `App` component's `return` statement using styled components, theming, animation and the `css` prop
function App() {
  return (
    <main
      css={{
        color: "#03045e",
        background: "#caf0f8",
        height: "1200px",
        fontFamily: "helvetica",
      }}
    >
      <img
        src={logo}
        alt="logo"
        css={css`
          display: absolute;
          margin-top: 15px;
          margin-left: 15px;
          height: 100px;
          width: 100px;
        `}
      />
      <ActionWrapper
        css={css`
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 15px;
          padding: 20px;
          @media (max-width: 900px) {
            display: grid;
          }
        `}
      >
        {hotels.map((hotel) => {
          return (
          <CardWrapper key={hotel.id}>
              <ImageWrapper src={hotel.src} alt={hotel.alt} />
              <TextWrapper>
                <TitleWrapper>{hotel.title}</TitleWrapper>
                <DescriptionWrapper>{hotel.description}</DescriptionWrapper>
              </TextWrapper>
              <ActionWrapper>
                <Button>Details</Button>
                <Button>Book</Button>
              </ActionWrapper>
            </CardWrapper>
          );
        })}
      </ActionWrapper>
    </main>
  );
}

export default App;
