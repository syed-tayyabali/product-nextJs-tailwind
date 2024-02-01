export default function Footer() {
  return (
    <footer className="bg-blue-500 text-white p-4">
      <div className="container mx-auto flex flex-col items-center lg:flex-row lg:items-center justify-between">
        <p className="text-center mb-4">Products</p>
        <div className="flex space-x-4">
          <a href="#" className="hover:text-blue-500">
            Link 1
          </a>
          <a href="#" className="hover:text-blue-500">
            Link 2
          </a>
          <a href="#" className="hover:text-blue-500">
            Link 3
          </a>
        </div>
      </div>
    </footer>
  );
}
