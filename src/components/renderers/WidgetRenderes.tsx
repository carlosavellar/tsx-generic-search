import moment from 'moment';
import Moment from 'react-moment';

import { IWidget } from './../../interfaces/widgets';
export const WidgetRenderer = (props: IWidget) => {
  const { title, description, rating, id, isSpecialCard, created, updated } = props;
  return (
    <div className="col-12 p-3">
      <div className={isSpecialCard ? 'card specialCard' : 'card'}>
        <div className="card-body">
          <div className="card-title">{title}</div>
          <div className="card-text">{description}</div>
          <div className="card-text">Rating {rating}</div>
        </div>
        <div className="card-footer text-muted text-right">
          <span className="float-left"># {id}</span>
          created in: &nbsp;&nbsp;
          <Moment fromNow date={created} />
          updated in: &nbsp;&nbsp;
          <Moment fromNow date={updated} />
        </div>
      </div>
    </div>
  );
};
