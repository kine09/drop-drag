export function HeaderItemChild(props) {
  return (
    <div className="nav__item__child">
      <p className="item__child__header">{props.itemChildHeader}</p>
      <div className="item__child__content">
        <p>Các Không gian làm việc của bạn</p>
        <div>trello không gian làm việc</div>
      </div>
    </div>
  );
}
