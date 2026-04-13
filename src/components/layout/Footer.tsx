export default function Footer() {
  return (
    <footer className="w-full py-8 text-center text-white/30 text-sm border-t border-white/10 bg-dark">
      <span>
        &copy; {new Date().getFullYear()} Damian Nolberczyk. All rights reserved
        {/* <a
          href="mailto:dnol.code@gmail.com"
          className="ml-2 font-syne text-accent hover:underline"
        >
          Contact
        </a> */}
      </span>
    </footer>
  );
}
