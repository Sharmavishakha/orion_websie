import 'bootstrap/dist/css/bootstrap.min.css'
import './globals.css' // ← this is important

export const metadata = {
  title: 'MyEvent',
  description: 'Event site built with Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">IEI</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link" href="/about">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/about">About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/events">Events</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/sponsors">Sponsors</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/contact">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <main className="p-4 max-w-5xl mx-auto">{children}</main>
      </body>
    </html>
  )
}
