/* eslint-disable react/prop-types */
import styled from "styled-components";

import { COLORS } from "../constants";

import VisuallyHidden from "./VisuallyHidden";
import Icon from "./Icon";

const SearchInput = ({ label, ...delegated }) => {
  return (
    <Label>
      <VisuallyHidden>Search</VisuallyHidden>
      <Input {...delegated} placeholder="Search..." />
      <SearchIcon id="search" strokeWidth={1} size={16} />
    </Label>
  );
};

const Label = styled.label``;

const Input = styled.input``;

const SearchIcon = styled(Icon)``;

export default SearchInput;
