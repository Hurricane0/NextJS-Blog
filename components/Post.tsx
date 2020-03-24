import React from "react";
import Link from "next/link";
import styled from "styled-components";

type Props = { title: string; body: string; id: string | number };

const Wrapper = styled.div`
  cursor: pointer;
  transition: 0.2s;
  &: hover {
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
  }
`;
export default ({ title, body, id }: Props) => {
  return (
    <Link href="/posts/[id]" as={`posts/${id}`}>
      <div className="col mb-4">
        <Wrapper className="card h-100">
          <img
            src="https://cdn.logojoy.com/wp-content/uploads/2018/05/30164225/572.png"
            className="card-img-top"
            alt="Blog post"
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text text-secondary">{body}</p>
          </div>
        </Wrapper>
      </div>
    </Link>
  );
};
