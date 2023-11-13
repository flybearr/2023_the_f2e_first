import "../styles/navigator.scss";
// eslint-disable-next-line react/prop-types
export default function Navigator({ page = 1 }) {
  return (
    <div className="navigator">
      <span className="material-symbols-outlined">arrow_left</span>
      <span>{page}</span>
      <span className="material-symbols-outlined">arrow_right</span>
    </div>
  );
}
