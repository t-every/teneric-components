import React from 'react';
import Link from 'next/link';

export function Footer({ noBadge }: { noBadge?: boolean }) {
  return (
    <footer className="container relative justify-center my-8 flex flex-col items-center space-y-4">
      <div className="flex space-x-4">
        <a
          className="underline"
          href="https://github.com/T-Every/teneric-components"
        >
          GitHub
        </a>
        <Link href="/docs">
          <a className="underline">Docs</a>
        </Link>
      </div>
      <div className="text-gradient-600">
        <span>© {new Date().getFullYear()}</span>
        {' · '}
        <span>
          <a className="underline" href="https://www.t-every.com">
            T-Every
          </a>
        </span>
      </div>
    </footer>
  );
}
