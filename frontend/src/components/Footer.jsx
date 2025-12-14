function Footer() {
  return (
    <footer className="border-t border-gray-900 py-12 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-8">
          {/* Left Side - Brand */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">Novanex</h3>
            <p className="text-gray-500 text-sm">Building software that scales.</p>
          </div>

          {/* Right Side - Social Links */}
          <div className="flex gap-6">
            <a
              href="https://www.instagram.com/novanex_digital/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-purple-500 transition-colors duration-200 text-sm"
              aria-label="Instagram"
            >
              Instagram
            </a>
            <a
              href="https://www.linkedin.com/company/novanex-it/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-purple-500 transition-colors duration-200 text-sm"
              aria-label="LinkedIn"
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-900">
          <p className="text-gray-600 text-sm text-center md:text-left">
            © {new Date().getFullYear()} Novanex. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
