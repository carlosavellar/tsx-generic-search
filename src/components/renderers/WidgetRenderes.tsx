export const WidgetRenderer = ({}) => {
  return (
    <div className="col-12 p-3">
      <div className={isSpecialCard ? 'card specialCrd' : 'card'}>
        <div className="card-body">
          <div className="card-title"></div>
          <div className="card-text"></div>
          <div className="card-text"></div>
        </div>
        <div className="card-footer text-muted text-right">
          <span className="float-left"># {id}</span>
        </div>
      </div>
    </div>
  );
};
