import React from "react";
import Link from "next/link";

const Error = () => {
  return (
    <div>
      <h1>Something seems to went wrong...</h1>
      <Link href="/">
        <a>To Home</a>
      </Link>
    </div>
  );
};

export default Error;
