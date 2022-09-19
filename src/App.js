import { AiFillGithub, AiFillInstagram, AiOutlineTwitter, } from "react-icons/ai"

function App() {
  return (
    <div className="flex gap-2 items-center">
      <div className="h-12 w-12 rounded-full object-cover px-2 bg-red-500">img</div>
      <div className="px-2 bg-yellow-500">Name</div>
      <div className="px-2 bg-blue-500">
        <div className="flex-wrap flex-grow px-2 bg-green-500">
          <div>thing1</div>
          <div>thing2</div>
          <div>thing3</div>
        </div>
      </div>
      <div className="px-2 bg-orange-500">
          <ul className="flex items-center">
            <li>
              <a href="/">
                <AiFillGithub />
              </a>
            </li>
            <li>
              <a href="/">
                <AiFillInstagram />
              </a>
            </li>
            <li>
              <a href="/">
                <AiOutlineTwitter />
              </a>
            </li>
          </ul>
      </div>
      <div className="flex-grow px-2 bg-purple-500">
        <h3 className="flex justify-end">Date</h3>
      </div>
    </div>
  );
}

export default App;
