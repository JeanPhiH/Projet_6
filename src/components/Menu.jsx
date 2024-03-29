import { NavLink } from "react-router-dom";

export default function Menu() {
  return (
    <div className="menu">
      <ul>
        <li>
          <NavLink
            to="/"
          >
            Accueil
          </NavLink>
        </li>
				<li>
					<NavLink
						to="/a-propos"
					>
						À propos
					</NavLink>
				</li>
			</ul>
		</div>
	);
}
