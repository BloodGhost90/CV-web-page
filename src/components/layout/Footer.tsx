export default function Footer() {
  return (
    <footer className="w-full py-4 text-center ">
      <span>
        &copy; {new Date().getFullYear()} Your Name. All rights reserved. |{" "}
        <a
          href="mailto:your.email@example.com"
          className="ml-2 text-blue-600 hover:underline"
        >
          Contact
        </a>
      </span>
    </footer>
  );
}
