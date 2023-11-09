import React, {useState} from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {

	const [userTodo, setUserTodo] = useState([]);
  const [userInput, setUserInput] = useState('');

  return (
    <>
      <div className="App__Container">
        <h1>What to do today? </h1>
        <div className="UserTodoList__Container">
          <input
            type="text"
            onChange={(e) => setUserInput(e.target.value)}
            value={userInput}
            onKey={(e) => {
              if (e.key === 'Enter') {
                setUserTodo(userTodo.concat(userInput));
                setUserInput('');
              }
            }}
            placeholder="Hola vale que hay pa´hoy?"
          ></input>
          <button
            onClick={(e) => {
              setUserTodo(userTodo.concat(userInput));
              setUserInput('');
            }}
          >
            Add ToDo
          </button>
          {userTodo.map((TodoItem, index) => (
            <li>
              {TodoItem}{' '}
              <FontAwesomeIcon
                icon={faTrash}
                onClick={() =>
                  setUserTodo(
                    userTodo.filter(
                      (__, currentIndex) => index !== currentIndex
                    )
                  )
                }
              />
            </li>
          ))}
          <div className="HowMany">{userTodo.length} TodosToDo</div>
        </div>
      </div>
    </>
  );
};

export default Home;
