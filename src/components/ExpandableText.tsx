import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  children: string;
}

const ExpandableText = ({ children }: Props) => {
  const [expanded, setExpanded] = useState(false);
  const limit: number = 300;

  if (children.length <= limit) {
    return <Text>{children}</Text>;
  }

  const summary = expanded
    ? children
    : children.substring(0, limit).concat("...");

  return (
    <Text>
      {summary}
      <Button
        size="xs"
        marginLeft={1}
        onClick={() => setExpanded(!expanded)}
        colorScheme="yellow"
      >
        {expanded ? "Show less" : "Read more"}
      </Button>
    </Text>
  );
};

export default ExpandableText;
