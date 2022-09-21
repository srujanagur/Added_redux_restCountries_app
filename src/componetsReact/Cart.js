import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Table from "react-bootstrap/Table";

import { deleteFromCartList } from "../redux/actions";

export default function Cart() {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state);

  return (
    <div>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>country name</th>
            <th>update</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((country) => (
            <tr>
              <td>
                <Link to={`/detail/${country.name.common}`}>
                  {country.name.common}
                </Link>
              </td>
              <td>
                <Button onClick={() => dispatch(deleteFromCartList(country))}>
                  Detete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Button className="btn" variant="info">
        <Link to="/">Back to Home</Link>
      </Button>{" "}
    </div>
  );
}
