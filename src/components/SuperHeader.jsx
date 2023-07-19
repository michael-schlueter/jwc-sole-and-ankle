import styled from "styled-components";

import { COLORS } from "../constants";

import SearchInput from "./SearchInput";
import Icon from "./Icon";
import UnstyledButton from "./UnstyledButton";

const SuperHeader = () => {
  return (
    <Wrapper>
      <MarketingMessage>
        Free shipping on domenstic orders over $75!
      </MarketingMessage>
      <SearchInput label="Search" />
      <HelpLink href="/help">Help</HelpLink>
      <UnstyledButton>
        <Icon id="shopping-bag" strokeWidth={1} />
      </UnstyledButton>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  font-size: 0.875rem;
  color: ${COLORS.gray[300]};
  background-color: ${COLORS.gray[900]};
  height: 2.5rem;
  padding-left: 32px;
  padding-right: 32px;
  display: flex;
  align-items: center;
  gap: 24px;
`;

const MarketingMessage = styled.span`
  color: ${COLORS.white};
  margin-right: auto;
`;

const HelpLink = styled.a`
  color: inherit;
  text-decoration: none;
  outline-offset: 2px;

  &:not(:focus-visible) {
    outline: none;
  }
`;

export default SuperHeader;
