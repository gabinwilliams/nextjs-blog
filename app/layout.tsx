import "./globals.css";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const header = (
        <header>
            <div>
                <h1>Gabin&apos;s Blog</h1>
                <p>👨🏻‍💻 Welcome to my blog. 💫</p>
            </div>
        </header>
    );

    const footer = (
        <footer>
            <div>
                <br />
                <h3>Developed by Gabin</h3>
            </div>
        </footer>
    );

    return (
        <html lang="en">
            <head />
            <body>
                {header}
                {children}
                {footer}
            </body>
        </html>
    );
}
