import { BsSearch } from "react-icons/bs";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";

interface Props {
  onSearch: (searchText: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();

        if (ref.current) {
          onSearch(ref.current.value);
        }
      }}
    >
      <InputGroup size="lg">
        <InputLeftElement children={<BsSearch />} />
        <Input
          ref={ref}
          type="text"
          placeholder="Search games..."
          variant="filled"
          borderRadius={20}
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
