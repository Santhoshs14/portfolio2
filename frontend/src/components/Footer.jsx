import React from "react";

export default function Footer() {
  return (
    <footer className="w-full py-4 bg-primary dark:bg-dark flex flex-col items-center border-t border-accent mt-8">
      <div className="flex space-x-6">
        {/* Email */}
        <a
          href="mailto:santhoshs.sivakumar@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent hover:text-dark dark:hover:text-white transition hover:scale-125 transition"
          aria-label="Email"
        >
          <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24">
            <path d="M2 4v16h20V4H2zm2 2h16v2l-8 5-8-5V6zm16 12H4V8.236l8 5 8-5V18z" />
          </svg>
        </a>
        {/* LinkedIn */}
        <a
          href="https://linkedin.com/in/santhoshs14"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent hover:text-dark dark:hover:text-white transition hover:scale-125 transition"
          aria-label="LinkedIn"
        >
          <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24">
            <path d="M21 21H17.5V15.5C17.5 14.1 17.5 12.3 15.7 12.3C13.9 12.3 13.7 13.8 13.7 15.4V21H10.2V9H13.5V10.4H13.6C14 9.7 15 9 16.3 9C20 9 21 11.2 21 14.2V21ZM5.4 7.6C4.1 7.6 3 6.5 3 5.2C3 3.9 4.1 2.8 5.4 2.8C6.7 2.8 7.8 3.9 7.8 5.2C7.8 6.5 6.7 7.6 5.4 7.6ZM7.1 21H3.7V9H7.1V21Z" />
          </svg>
        </a>
        {/* GitHub */}
        <a
          href="https://github.com/Santhoshs14"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent hover:text-dark dark:hover:text-white transition hover:scale-125 transition"
          aria-label="GitHub"
        >
          <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.427 2.865 8.179 6.839 9.504.5.092.682-.217.682-.482 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.155-1.109-1.463-1.109-1.463-.908-.621.069-.609.069-.609 1.003.07 1.531 1.031 1.531 1.031.892 1.528 2.341 1.088 2.91.832.092-.646.349-1.088.636-1.339-2.221-.253-4.555-1.112-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.104-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.563 9.563 0 0112 6.844c.85.004 1.705.115 2.504.338 1.909-1.296 2.747-1.026 2.747-1.026.546 1.378.204 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.337 4.695-4.566 4.944.359.309.678.921.678 1.857 0 1.34-.012 2.422-.012 2.751 0 .267.18.578.688.48C19.138 20.197 22 16.447 22 12.021 22 6.484 17.523 2 12 2z" />
          </svg>
        </a>
      </div>
      <p className="mt-3 text-xs text-dark dark:text-primary text-center">
        &copy; {new Date().getFullYear()} Santhosh S. All rights reserved.
      </p>
    </footer>
  );
}
