const { default: styled } = require("styled-components");

const Flex = styled.div`
  display: flex;
  align-items: ${props => props.alignItems};
  justify-content: ${props => props.justifyContent};
`;

export const Column = styled(Flex)`
  flex-direction: column;
`;

export const Row = styled(Flex)``;
