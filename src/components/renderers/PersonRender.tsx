import React from "react";
import Moment from "react-moment";
import { ListGroup, ListGroupItem } from "reactstrap";
import { IPerson } from "../../interfaces/IPerson";

export function PersonRender(props: IPerson) {
  const { firstName, lastName, eyeColor, birthday } = props;
  return (
    <div className="col-12 p-3">
      <div className="card">
        <div className="card-body">
          <h3>
            👤&nbsp;{firstName} {lastName}
          </h3>
          <ListGroup>
            <ListGroupItem>
              Has <b>{eyeColor}</b> eyes
            </ListGroupItem>
            <ListGroupItem>
              🎂&nbsp;&nbsp;Birthday:{" "}
              <b>
                <Moment date={birthday} format="MMMM/D/YYYY" />
              </b>
            </ListGroupItem>
          </ListGroup>
        </div>
      </div>
    </div>
  );
}
