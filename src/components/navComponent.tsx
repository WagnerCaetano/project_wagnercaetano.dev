import "./../app/globals.css";
import Link from "next/link";

const NavComponent = ({ shadow }) => {
  return (
    <nav className={`h-28 w-auto bg-backgroundSecundary ${shadow ? "shadow-md" : ""} py-4`}>
      <div className="flex flex-row mx-auto max-w-6xl justify-between text-primary">
        <div className="text-3xl font-mulish font-black">
          <p>Wagner</p>
          <p>Caetano</p>
        </div>
        <div className="flex flex-row items-center gap-6 text-xl font-lora font-normal">
          <Link href={"/"}>
            <p>About</p>
          </Link>
          <Link href={"/"}>
            <p>Portfolio</p>
          </Link>
          <Link href={"/"}>
            <p>Skills</p>
          </Link>
          <Link href={"/"}>
            <p>Contact</p>
          </Link>
          <Link href={"/"}>
            <p className="rounded border border-primary p-2 text-center">Download Resume</p>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavComponent;
