function Nav() {
	return (
		<nav className="relative">
			<div className="flex px-10 space-x-10 overflow-x-scroll text-2xl sm:px-20 whitespace-nowrap sm:space-x-20 scrollbar-hide">
				<h2 className="transition duration-100 transform cursor-pointer hover:scale-125 hover:text-white active:text-red-500">
					Luna
				</h2>
				<h2 className="transition duration-100 transform cursor-pointer hover:scale-125 hover:text-white active:text-red-500">
					Sole
				</h2>
				<h2 className="transition duration-100 transform cursor-pointer hover:scale-125 hover:text-white active:text-red-500">
					Giove
				</h2>
				<h2 className="transition duration-100 transform cursor-pointer hover:scale-125 hover:text-white active:text-red-500">
					Marte
				</h2>
				<h2 className="transition duration-100 transform cursor-pointer hover:scale-125 hover:text-white active:text-red-500">
					Urano
				</h2>
				<h2 className="transition duration-100 transform cursor-pointer hover:scale-125 hover:text-white active:text-red-500">
					Mercurio
				</h2>
				<h2 className="transition duration-100 transform cursor-pointer hover:scale-125 hover:text-white active:text-red-500">
					Saturno
				</h2>
				<h2 className="transition duration-100 transform cursor-pointer hover:scale-125 hover:text-white active:text-red-500">
					Plutone
				</h2>
			</div>
			<div className="absolute top-0 right-0 bg-gradient-to-l from-[#0C0032] h-10 w-1/12" />
		</nav>
	);
}

export default Nav;
