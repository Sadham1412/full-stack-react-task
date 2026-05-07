// Layout.jsx

import Header from "./Header";
import Footer from "./Footer";

function Layout({ children }) {

  return (
    <div>

      <Header title="My React Website" />

      <main>
        {children}
      </main>

      <Footer text="© 2026 My Website" />

    </div>
  );
}

export default Layout;