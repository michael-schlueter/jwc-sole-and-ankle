/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import styled from "styled-components";

import { COLORS, WEIGHTS } from "../constants";
import { formatPrice, pluralize, isNewShoe } from "../utils";
import Spacer from "./Spacer";

const ShoeCard = ({
  slug,
  name,
  imageSrc,
  price,
  salePrice,
  releaseDate,
  numOfColors,
}) => {
  const variant =
    typeof salePrice === "number"
      ? "on-sale"
      : isNewShoe(releaseDate)
      ? "new-release"
      : "default";

  return (
    <Link href={`/shoe/${slug}`}>
      <Wrapper>
        <ImageWrapper>
          <Image alt="" src={imageSrc} />
        </ImageWrapper>
        <Spacer size={12} />
        <Row>
          <Name>{name}</Name>
          <Price>{formatPrice(price)}</Price>
        </Row>
        <Row>
          <ColorInfo>{pluralize("Color", numOfColors)}</ColorInfo>
        </Row>
      </Wrapper>
    </Link>
  );
};

const Link = styled.a`
    text-decoration: none;
    color: inherit;
`;

const Wrapper = styled.article``;

const ImageWrapper = styled.div`
    position: relative;
`;

const Image = styled.img``;

const Row = styled.div`
    font-size: 1rem;
`;

const Name = styled.h3`
    font-weight: ${WEIGHTS.medium};
    color: ${COLORS.gray[900]};
`;

const Price = styled.span``;

const ColorInfo = styled.p`
    color: ${COLORS.gray[700]};
`;

const SalePrice = styled.span`
    font-weight: ${WEIGHTS.medium};
    color: ${COLORS.primary};
`;

export default ShoeCard;
