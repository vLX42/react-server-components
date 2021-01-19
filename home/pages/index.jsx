export default function Home() {
  return (
    <div>
      <div className="pb-5">
        <a
          href="/server-component"
          className="flex-shrink-0 bg-blue-600 text-white text-base font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-blue-200"
        >
          Server Components
        </a>
      </div>
      <div className="pb-5">
        <a
          href="/client-component"
          className="flex-shrink-0 bg-purple-600 text-white text-base font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200"
        >
          Client Components
        </a>
      </div>
    </div>
  );
}
