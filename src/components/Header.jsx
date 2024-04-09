import Logo from "./Logo";
import Menu from "./Menu";

export default function Header () {
	return (
		<header className="header">
			<h1 className="logo">
				<Logo />
			</h1>
			<Menu />
		</header>
	);
}