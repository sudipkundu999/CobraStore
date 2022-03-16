import "./component-css/themeToggleButton.css";

export const ThemeToggleButton = () => {
  return (
    <button className="btn btn-floating dark-mode-toggle" id="dark-mode-toggle">
      <i className="fas fa-adjust fa-3x"></i>
    </button>
  );
};
