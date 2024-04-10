import { NavLink } from "react-router-dom";

export default function Menu() {
  return (
    <div className="menu">
      <ul>
        <li>
          <NavLink
            to="/"
						className={({ isActive }) => (isActive ? "activelink" : undefined)}
          >
            Accueil
          </NavLink>
        </li>
				<li>
					<NavLink
						to="/about"
						className={({ isActive }) => (isActive ? "activelink" : undefined)}
					>
						À propos
					</NavLink>
				</li>
			</ul>
		</div>
	);
}
