import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  margin: 30px 0px;
`;

const Loader = () => (
  <Wrapper className="d-flex justify-content-center">
    <div className="spinner-border" role="status">
      <span className="sr-only">Loading...</span>
    </div>
  </Wrapper>
);

export default Loader;
