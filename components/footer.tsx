export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-12">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6">
        <h2 className="text-lg font-semibold mb-4 md:mb-0">
          Join the ADAM Community 🚀
        </h2>
        <div className="flex space-x-6">
          <a
            href="https://www.reddit.com/r/ADAMProject/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 hover:text-orange-500 transition"
          >
            Go Reddit
          </a>

          <a
            href="https://github.com/yasniy97/ADAMProject"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 hover:text-gray-400 transition"
          >
            Check GitHub
          </a>

          <a
            href="https://discord.gg/g6CZyEaX"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 hover:text-indigo-400 transition"
          >
            Visit Discord
          </a>
        </div>
      </div>
      
    </footer>
  );
}

