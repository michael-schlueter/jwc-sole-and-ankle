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
            <SearchInput />
            <HelpLink href="/help">Help</HelpLink>
            <UnstyledButton>
                <Icon id="shopping-bag" strokeWidth={1} />
            </UnstyledButton>
        </Wrapper>
    )
}

const Wrapper = styled.div``;

const MarketingMessage = styled.span``;

const HelpLink = styled.a``;

export default SuperHeader;