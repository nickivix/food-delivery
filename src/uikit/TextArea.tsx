import React from 'react'
import styled from 'styled-components/native'

const TextArea = styled.TextInput`
  padding: 13px 5px 13px 5px;
  border: 1px solid rgba(85, 85, 85, 0.2);
  height: 90px;
  font-size: ${({ theme }) => theme.typeScale.paragraph};
  line-height: ${({ theme }) => theme.lineHeight.paragraph};
`
export default TextArea
