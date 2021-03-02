import React from "react";
import Layout from "../layout/layout";

function Page404() {
  const style = {
    fontWeight: "bold",
    fontSize: "2rem",
    color: "red",
    textAlign: "center",
    height: "80vh",
  };
  return (
    <div>
      <Layout>
        <p style={style}>Unfortinately we can't find that page</p>
      </Layout>
    </div>
  );
}

export default Page404;
