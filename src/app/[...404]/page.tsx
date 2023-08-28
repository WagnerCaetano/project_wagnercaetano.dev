export default function NotFound() {
  return (
    <div className="w-full flex flex-col items-center place-content-center h-screen gap-8">
      <h1 className="text-4xl font-bold text-primary">404 - Page Not Found</h1>
      <p className="text-4xl xl:text-6xl font-black text-text text-center">
        HEY ARE YOU TRYING TO FIND A BITCOIN LOST ?? <br /> nothing here :/
      </p>
      <a href="/" className="p-4 text-secondary bg-primary rounded px-3 py-3 transition-all duration-250 ease-in-out hover:shadow-[0_0px_50px_rgba(255,_168,_0,_0.7)]">
        <p>Go back to reality</p>
      </a>
    </div>
  );
}
