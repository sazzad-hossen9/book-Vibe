import Image from "next/image";
import logo from "@/assets/book.ico";
import Link from "next/link";
export default function NavBer() {
  const navLink = (
    <>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/books">Books</Link>
      </li>{" "}
      <li>
        <Link href="/listedbook">ListedBooks</Link>
      </li>
      <li>
        <Link href="/read-books">Read-Books</Link>
      </li>
    </>
  );
  return (
    <div className=" shadow-sm">
      <div className="navbar bg-base-100  container mx-auto">
        <div className="navbar-start ">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                aria-label="Menu"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {navLink}
            </ul>
          </div>
          <div className=" ">
            <a className="flex gap-2 items-center font-bold text-2xl">
              <Image src={logo} alt="Book logo" />
              Book Vibe
            </a>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLink}</ul>
        </div>
        <div className="navbar-end gap-2">
          <a className="btn btn-success">sign in </a>
          <a className="btn btn-error">sign up</a>
        </div>
      </div>
    </div>
  );
}
