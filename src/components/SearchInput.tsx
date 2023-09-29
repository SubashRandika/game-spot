import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";

import { BsSearch } from "react-icons/bs";

const SearchInput = () => {
  return (
    <InputGroup size="lg" marginX={{ base: 0, md: "10px", lg: "20px" }}>
      <InputLeftElement children={<BsSearch />} />
      <Input
        type="text"
        placeholder="Search games..."
        variant="filled"
        borderRadius={20}
      />
    </InputGroup>
  );
};

export default SearchInput;
