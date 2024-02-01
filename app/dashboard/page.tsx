export default function Page() {
  return (
    <>
      <div className="rounded-3xl bg-gray-300 p-4 mb-4">
        <h1 className="text-3xl">Hello, Dashboard Page!</h1>
      </div>
      <div className="flex space-x-2">
        <div className="w-1/2 rounded-3xl bg-gray-300">
          <h1 className="text-2xl p-4">Content 1</h1>
        </div>
        <div className="w-1/2 rounded-3xl bg-gray-300">
          <h1 className="text-2xl p-4">Content 2</h1>
        </div>
      </div>
    </>
  );
}
