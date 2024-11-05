const Footer = () => {
	return (

	<footer className=" bg-white text-black shadow-lg p-20">

		<div className="w-5/12 mx-auto text-center">
			<h3 className="text-3xl font-bold">Gadget Heaven</h3>
			<p className="font-semibold my-2">Leading the way in cutting-edge technology and innovation.</p>
		</div>

		<div className="border my-6"></div>
		<div className="flex justify-around w-8/12 mx-auto text-center">
			<nav className="font-semibold">
				<h6 className="footer-title">Services</h6>
				<h4><a className="link link-hover">Product Support</a></h4>
				<h4><a className="link link-hover">Order Tracking</a></h4>
				<h4><a className="link link-hover">Shipping & Delivery</a></h4>
				<h4><a className="link link-hover">Returns</a></h4>
			</nav>
			<nav className="font-semibold">
				<h6 className="footer-title">Company</h6>
				<h4><a className="link link-hover">About Us</a></h4>
				<h4><a className="link link-hover">Careers</a></h4>
				<h4><a className="link link-hover">Contact</a></h4>

			</nav>
			<nav className="font-semibold">
				<h6 className="footer-title">Legal</h6>
				<h4><a className="link link-hover">Terms of Service</a></h4>
				<h4><a className="link link-hover">Privacy Policy</a></h4>
				<h4><a className="link link-hover">Cookie Policy</a></h4>

			</nav>
		</div>
	</footer>
	);
  };
  
  export default Footer;
  