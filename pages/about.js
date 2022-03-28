import { useState } from 'react';
import styled from 'styled-components';

const Page = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
const about = () => {
  const [info, setInfo] = useState('stuff ss');
  return <Page>{info}</Page>;
};

export default about;
