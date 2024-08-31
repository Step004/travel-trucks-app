import css from "./AppBar.module.css";
import Navigation from "../Navigation/Navigation.jsx";
import Logo from "../Logo/Logo.jsx";

export default function AppBar() {
  return (
    <header className={css.header}>
      <Logo />
      <Navigation />
    </header>
  );
}
