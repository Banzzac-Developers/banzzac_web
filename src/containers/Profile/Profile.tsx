import { Badge } from "@components/Badge/Badge";
import styled from "@emotion/styled";
import { Pet, Profile } from "@models/profile";
import Carousel from "@components/Carousel";
import { useState } from "react";
import Seperator from "@components/Seperator";
import Text from "@components/Text";
import { FontStyle } from "@utils/StyleUtil";

import mangu from "@assets/images/mangu.jpg";
import pet2 from "@assets/images/pet2.jpeg";

type Props = {
  profile: Profile;
  pets: Pet[];
};

function MyProfile({ profile, pets }: Props) {
  const [carouselIdx, setCarouselIdx] = useState(0);

  const {
    statusMessage,
    img,
    age,
    nickname,
    walkingStyle: walkingStyles,
  } = { ...profile, img: mangu };

  const images = [img].concat(...pets.map((_) => pet2));

  return (
    <Container>
      <div>
        <Carousel.Indicator
          currentIdx={carouselIdx}
          handleClick={setCarouselIdx}
          srcs={images}
        />
        <Seperator height={30} />
        <Carousel.Carousel
          currentIdx={carouselIdx}
          handleClick={setCarouselIdx}
          srcs={images}
        />
      </div>
      <Seperator height={30} />
      <Text {...FontStyle(24, 700, 24, "#000")}>
        {carouselIdx === 0 ? nickname : pets[carouselIdx - 1].name}
      </Text>
      <Seperator height={18} />
      <Text
        {...FontStyle(16, 700, 20, "#000")}
      >{`${nickname} | ${carouselIdx === 0 ? age : pets[carouselIdx - 1].age}`}</Text>
      <Seperator height={20} />
      <BadgeContainer oneSentence={false}>
        <li>
          <Badge
            bold={true}
            txt={carouselIdx === 0 ? "MBTI" : pets[carouselIdx - 1].size}
          />
        </li>
        <li>
          <Badge
            bold={true}
            txt={carouselIdx === 0 ? "20대 중반" : pets[carouselIdx - 1].kind}
          />
        </li>
        {carouselIdx === 0 ? (
          <>
            {walkingStyles.map((walkingStyle) => (
              <li key={walkingStyle}>
                <Badge bold txt={walkingStyle} />
              </li>
            ))}
          </>
        ) : (
          <>
            {pets[carouselIdx - 1].personalityArr.map((personality) => (
              <li key={personality}>
                <Badge bold txt={personality} />
              </li>
            ))}
          </>
        )}
      </BadgeContainer>
      <Seperator height={7} />
      <Text {...FontStyle(16, 700, 24, "#757575")}>{statusMessage}</Text>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BadgeContainer = styled.ul<{ oneSentence: boolean }>`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`;

export default MyProfile;
