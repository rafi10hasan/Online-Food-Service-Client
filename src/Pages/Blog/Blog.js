import React from "react";
import Accordion from "react-bootstrap/Accordion";
import useTitle from "../../Hooks/useTitle";
const Blog = () => {
  useTitle('Blog');
  return (
    <div className="container w-75 mt-5">
      <h1 className="text-center text-primary">Some Interview Questions</h1>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Difference between SQL and NoSQL?</Accordion.Header>
          <Accordion.Body>
            1.SQL databases are relational, NoSQL databases are non-relational.
            <br />
            2.SQL databases use structured query language and have a predefined schema. NoSQL
            databases have dynamic schemas for unstructured data. <br />
            3.SQL databases are vertically scalable, while NoSQL databases are horizontally
            scalable. <br />
            4.SQL databases are table-based, while NoSQL databases are document, key-value, graph,
            or wide-column stores. <br />
            5.SQL databases are better for multi-row transactions, while NoSQL is better for
            unstructured data like documents or JSON.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>What is JWT, and how does it work?</Accordion.Header>
          <Accordion.Body>
            The purpose of using JWT is not to hide data but to ensure the authenticity of the data.
            JWT is signed and encoded, not encrypted. JWT is a token based stateless authentication
            mechanism. Since it is a client-side based stateless session, server doesn't have to
            completely rely on a datastore(database) to save session information.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header>What is the difference between javascript and NodeJS?</Accordion.Header>
          <Accordion.Body>
          JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="3">
          <Accordion.Header>How does NodeJS handle multiple requests at the same time?</Accordion.Header>
          <Accordion.Body>
          How NodeJS handle multiple client requests? NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default Blog;
