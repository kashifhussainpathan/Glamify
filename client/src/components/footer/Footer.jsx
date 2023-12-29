import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 p-6">
      <div className="container mx-auto flex flex-wrap justify-around">
        <div>
          <h2 className="text-2xl font-bold mb-4">Glamify</h2>
          <p className="text-gray-400 w-[200px] max-md:text-sm max-md:w-[150px]">
            Your destination for trendy and glamorous fashion.
          </p>
        </div>

        <div className="">
          <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
          <ul className="max-md:text-sm">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/shop">Shop</a>
            </li>
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>

        <div className="max-md:mt-4">
          <h3 className="text-xl font-semibold mb-3">Contact Us</h3>
          <p className="max-md:text-sm">Email: info@glamify.com</p>
          <p className="max-md:text-sm">Phone: +1 (123) 456-7890</p>
        </div>

        <div className="max-md:mt-4">
          <h3 className="text-xl font-semibold mb-3">Follow Us</h3>
          <div className="flex space-x-4 max-md:text-sm">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="text-2xl" />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-2xl" />
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="text-2xl" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
