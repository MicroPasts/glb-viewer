export default function ThemeToggle({ theme, onToggleTheme }) {
    const isDark = theme === 'dark';

    return (
        <button
            type="button"
            onClick={onToggleTheme}
            aria-label={isDark ? 'Switch viewer UI to light mode' : 'Switch viewer UI to dark mode'}
            title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            className="flex items-center justify-center p-2 text-xs font-medium rounded-xl border backdrop-blur-md transition-all shadow-xl bg-white/90 text-slate-700 border-slate-200/90 hover:bg-slate-100 dark:bg-slate-900/85 dark:text-slate-200 dark:border-slate-800/80 dark:hover:bg-slate-800"
        >
            {isDark ? (
                <svg aria-hidden="true" className="w-4 h-4 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                </svg>
            ) : (
                <svg aria-hidden="true" className="w-4 h-4 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                    />
                </svg>
            )}
        </button>
    );
}