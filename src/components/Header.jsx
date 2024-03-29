import Logo from "./Logo";
import Menu from "./Menu";

export default function Header () {
	return (
		<div className="header">
			<Logo />
			<Menu />
		</div>
	);
}