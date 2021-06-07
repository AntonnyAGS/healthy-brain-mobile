import React from 'react';

import styled from 'styled-components/native';

const FlexSpacer = styled.View`
  flex: 1;
`;

export default function Spacer(): JSX.Element {
  return <FlexSpacer />;
}
