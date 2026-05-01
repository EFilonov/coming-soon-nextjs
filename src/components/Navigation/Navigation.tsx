import React from 'react'
import ThemeSwitch from '../ThemeSwitch/ThemeSwitch'

function Navigation() {
  return (
    <>
    <nav className="flex sm:justify-center space-x-4">
        {[
            // ['Home', '/'],
            ['Чи довго чекатати ?', '/version1'],
        ].map(([title, url]) => (
            <a
              key={title}
              href={url}
              className="
                rounded-lg px-3 py-2
                font-semibold
                text-slate-800 dark:text-slate-100
                bg-slate-100 dark:bg-slate-800 bg-opacity-70
                hover:bg-opacity-100 hover:bg-slate-200 dark:hover:bg-slate-700
                transition-colors duration-200
                shadow-sm
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500
              "
              >
              {title}
            </a>
        ))}
        <ThemeSwitch />
    </nav>
    </>
  )
}

export default Navigation