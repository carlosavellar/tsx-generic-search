import moment from 'moment';
import Moment from 'react-moment';

import { IPeople } from './../../interfaces/people';

export const PeopleRenderer = (props: IPeople) => {
  const { firstName, lastName, eyeColor, birthday } = props;
  return (
    <div className="col-12 p-3">
      <div className="card">
        <div className="card-body">
          <div className="card-title">{firstName}</div>
          <div className="card-text">{lastName}</div>
        </div>
        <div className="card-footer text-muted text-right">
          eye color in: &nbsp;&nbsp;
          <Moment fromNow date={eyeColor} />
          birthday: &nbsp;&nbsp;
          <Moment fromNow date={birthday} />
        </div>
      </div>
    </div>
  );
};
