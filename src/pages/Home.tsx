import SearchBar from "../components/SearchBar";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] px-4">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">
        <span className="text-blue-500">S</span>
        <span className="text-red-500">c</span>
        <span className="text-yellow-500">h</span>
        <span className="text-blue-500">u</span>
        <span className="text-green-500">l</span>
        <span className="text-red-500">t</span>
        <span className="text-blue-500">i</span>
        <span className="text-yellow-500">e</span>
        <span className="text-green-500">r</span>
        <span className="text-red-500">s</span>
        <span className="text-blue-500">u</span>
        <span className="text-yellow-500">c</span>
        <span className="text-green-500">h</span>
        <span className="text-red-500">e</span>
      </h1>
      <SearchBar autoFocus />
    </div>
  );
}
