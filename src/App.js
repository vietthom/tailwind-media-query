function App() {
  return (
    <div className="flex gap-4 items-center">
      <div className="h-12 w-12 rounded-full object-cover px-2 bg-red-500">img</div>
      <div className="px-2 bg-yellow-500">Name</div>
      <div className="flex grow px-2 bg-blue-500">
        <div className="px-2 bg-green-500">Interests</div>
        <div className="px-2 bg-orange-500">Social Media links</div>
      </div>
      <div className="px-2 bg-purple-500">date</div>
    </div>
  );
}

export default App;
