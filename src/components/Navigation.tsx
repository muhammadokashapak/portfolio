export function Navigation() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <a className="nav-logo" href="#hero">
          <span className="logo-initial">MH</span>
          <span>Huzaifa</span>
        </a>
        <ul className="nav-menu">
          <li>
            <button
              className="nav-link"
              onClick={() => scrollToSection('services')}
            >
              Services
            </button>
          </li>
          <li>
            <button
              className="nav-link"
              onClick={() => scrollToSection('process')}
            >
              Process
            </button>
          </li>
          <li>
            <button
              className="nav-link"
              onClick={() => scrollToSection('packages')}
            >
              Pricing
            </button>
          </li>
          <li>
            <button
              className="nav-link"
              onClick={() => scrollToSection('plans')}
            >
              Plans
            </button>
          </li>
          <li>
            <button
              className="nav-link"
              onClick={() => scrollToSection('portfolio')}
            >
              Portfolio
            </button>
          </li>
          <li>
            <button
              className="nav-link"
              onClick={() => scrollToSection('testimonials')}
            >
              Testimonials
            </button>
          </li>
          <li>
            <a className="button primary nav-button" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
