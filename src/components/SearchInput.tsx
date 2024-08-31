import { BsSearch } from "react-icons/bs";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import useGameQueryStore from "../store";
import { useNavigate } from "react-router-dom";

const SearchInput = () => {
  const ref = useRef<HTMLInputElement>(null);
  const setSearchText = useGameQueryStore((s) => s.setSearchText);
  const navigate = useNavigate();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();

        if (ref.current) {
          setSearchText(ref.current.value);
          navigate("/");
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
