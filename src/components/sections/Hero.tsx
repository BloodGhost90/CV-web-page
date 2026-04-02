export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center px-3 py-20 w-full">
      <img
        src="src/assets/MeSticker.png"
        alt="Profile Picture"
        className="w-32 h-32 rounded-full mb-4"
      />
      <h1 className="text-5xl font-bold mb-4">Welcome to My Portfolio</h1>
      <p className="text-lg text-gray-600 mb-6">
        I'm a passionate developer specializing in web development and design.
        Explore my projects and skills below!
      </p>
      <span></span>
      <p className="text-lg text-center text-gray-600 mb-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </section>
  );
}
