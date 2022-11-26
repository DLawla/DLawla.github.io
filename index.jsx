const stateNames =
  [
    "splash",
    "question1", // parent names
    "question2", // date of first date
    "question3", // date of conception
    "question4", // vehicle rego
    "question5", // favorite child names
    "question6", // favorite music
    "question7", // parenting priorities
    "question8", // sex preference
    "question9", // moon question
    "calculationsPrep", // click to advance
    "calculations", // click to advance
    "reveal"
  ]

const inputStyle = "my-8 bg-gray-50 border border-green-300 text-green-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-green-700 dark:border-green-600 dark:placeholder-green-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"

const App = (props) => {
  const [showMatrix, setShowMatrix] = React.useState(false);
  const [flashMatrix, setFlashMatrix] = React.useState(false);
  const [appState, setAppState] = React.useState(11);

  React.useEffect(() => {
    const matrixMask = document.getElementById("mask");

    if (showMatrix) {
      matrixMask.classList.toggle("bg-white", false)
      matrixMask.classList.toggle("bg-white/70", true)
    } else {
      matrixMask.classList.toggle("bg-white", true)
      matrixMask.classList.toggle("bg-white/70", false)
    }
  }, [showMatrix])

  React.useEffect(() => {
    if (flashMatrix) {
      setShowMatrix(true)

      setTimeout(() => {
        setShowMatrix(false)
        setFlashMatrix(false)
      }, 100)
    }
  }, [flashMatrix])



  const onAdvance = () => {
    setFlashMatrix(true)
    setAppState(appState + 1)
  }

  const onMaleNameEntry = (e) => {
    confirm("Is that even a human name?")
    onAdvance();
  }

  if (stateNames[appState] === "splash") {
    return (
      <div className="text-center text-green-500">
        <h1 className={"text-2xl pb-8"}>Welcome to the fresh human gender calculator!</h1>

        <p className={"pb-8"}>Within thousands of milliseconds, you can know your new human gender!</p>

        <div>
          <button onClick={onAdvance}>Get started</button>
        </div>
      </div>
    );
  }
  else if (stateNames[appState] === "question1") {
    return (
      <div className="text-center text-green-500">
        <h1 className={"text-xl pb-8"}>Question 1</h1>
        <p className={"mb-4"}>What is the human female parent name?</p>
        <input for={stateNames[appState]} id={stateNames[appState]} className={inputStyle}></input>
        <div>
          <button onClick={onAdvance}>Next</button>
        </div>
      </div>
    );
  }
  else if (stateNames[appState] === "question2") {
    return (
      <div className="text-center text-green-500">
        <h1 className={"text-xl pb-8"}>Question 10</h1>
        <p className={"mb-4"}>What is the human male parent name?</p>
        {/*// Wrapped div to clear input*/}
        <div>
          <input for={stateNames[appState]} id={stateNames[appState]} className={inputStyle}></input>
        </div>
        <div>
          <button onClick={onMaleNameEntry}>Next</button>
        </div>
      </div>
    );
  }
  else if (stateNames[appState] === "question3") {
    return (
      <div className="text-center text-green-500">
        <h1 className={"text-xl pb-8"}>Question 11</h1>
        <p className={"mb-4"}>When was the human parents' first date?</p>
        <input type="date" className={inputStyle}/>
        <div>
          <button onClick={onAdvance}>Next</button>
        </div>
      </div>
    );
  }
  else if (stateNames[appState] === "question4") {
    return (
      <div className="text-center text-green-500">
        <h1 className={"text-xl pb-8"}>Question 100</h1>
        <p className={"mb-4"}>What is the approximate conception date of aforementioned non-gendered fresh human?</p>
        <div className={"pb-8"}>[Tolerance +/- 0.5 earth days]</div>
        <div className={"text-xs"}>Leave blank if same as first date</div>
        <input type="date" className={inputStyle}/>
        <div>
          <button onClick={onAdvance}>Next</button>
        </div>
      </div>
    );
  }
  else if (stateNames[appState] === "question5") {
    const names = ["Doug", "Sharon", "Phil", "Karen"]

    return (
      <div className="text-center text-green-500">
        <h1 className={"text-xl pb-8"}>Question 101</h1>
        <p className={"mb-4"}>What are your favorite small human names?</p>
        <div>
          {
            names.map((name, index) => {
              return (
                <div key={name} className={"pb-4"}>
                  <input type="checkbox" className={"mr-4"} id={name} name={name} value={name}/>
                  <label htmlFor={name}>{name}</label>
                </div>
              )
            })
          }
        </div>

        <div>
          <button onClick={onAdvance}>Next</button>
        </div>
      </div>
    );
  }
  else if (stateNames[appState] === "question6") {
    const names = ["Fiddy cent", "Ukrainian rave", "Talkback radio", "Angsty rock", "Nickelback"]

    return (
      <div className="text-center text-green-500">
        <h1 className={"text-xl pb-8"}>Question 110</h1>
        <p className={"mb-4"}>What are your favorite types of human music?</p>

        <div>
          {
            names.map((name, index) => {
              return (
                <div key={name} className={"pb-4"}>
                  { name == "Nickelback" &&
                    <input type="checkbox" disabled={true} className={"mr-4"} id={name} name={name} value={name}/>
                  }
                  { name != "Nickelback" &&
                    <input type="checkbox" className={"mr-4"} id={name} name={name} value={name}/>
                  }
                  <label htmlFor={name}>{name}</label>
                </div>
              )
            })
          }
        </div>
        <div>
          <button onClick={onAdvance}>Next</button>
        </div>
      </div>
    );
  }
  else if (stateNames[appState] === "question7") {
    const names = ["Bathing your child", "First table reservations"]

    return (
      <div className="text-center text-green-500">
        <h1 className={"text-xl pb-8"}>Question 111</h1>
        <p className={"mb-4"}>As future successful breeders, what will be your highest priority as a parent?</p>

        <div>
          {
            names.map((name, index) => {
              return (
                <div key={name} className={"pb-4"}>
                  <input type="radio" className={"mr-4"} id={name} name={stateNames[appState]} value={name}/>
                  <label htmlFor={name}>{name}</label>
                </div>
              )
            })
          }
        </div>

        <div>
          <button onClick={onAdvance}>Next</button>
        </div>
      </div>
    );
  }
  else if (stateNames[appState] === "question8") {
    const names = ["Male", "Female", "YOLO", "Who cares?", "Hilux"]

    return (
      <div className="text-center text-green-500">
        <h1 className={"text-xl pb-8"}>Question 1000</h1>
        <p className={"mb-4"}>What is your sex preference for your future baby?</p>

        <div>
          {
            names.map((name, index) => {
              return (
                <div key={name} className={"pb-4"}>
                  <input type="radio" className={"mr-4"} id={name} name={stateNames[appState]} value={name}/>
                  <label htmlFor={name}>{name}</label>
                </div>
              )
            })
          }
        </div>

        <div>
          <button onClick={onAdvance}>Next</button>
        </div>
      </div>
    );
  }
  else if (stateNames[appState] === "question9") {
    const names = ["384000km", "1 AU", "239000mi", "I don’t care"]

    return (
      <div className="text-center text-green-500">
        <h1 className={"text-xl pb-8"}>Question 1001</h1>
        <p className={"mb-4"}>Are you a robot? Distance from Earth to the moon:</p>

        {
          names.map((name, index) => {
            return (
              <div key={name} className={"pb-4"}>
                <input type="radio" className={"mr-4"} id={name} name={stateNames[appState]} value={name}/>
                <label htmlFor={name}>{name}</label>
              </div>
            )
          })
        }

        <div>
          <button onClick={onAdvance}>Next</button>
        </div>
      </div>
    );
  }

  else if (stateNames[appState] === "calculationsPrep") {
    return (
      <div className="text-center text-green-500">
        <h1 className={"text-xl pb-8"}>Thank you</h1>
        <p className={"mb-4"}>That is enough information for a statistically significant gender calculation.</p>
        <div>
          <button onClick={() => {setAppState(appState + 1)}}>Calculate gender</button>
        </div>
      </div>
    );
  }

  else if (stateNames[appState] === "calculations") {
    return (
      <GenderCalculation onAdvance={onAdvance}/>
    );
  }
  else if (stateNames[appState] === "reveal") {
    return (
      <div className="text-center text-green-500">
        <h1 className={"text-xl pb-8"}>Results are tallied</h1>
      </div>
    );
  } else {
    return (
      <h1 className={"text-xl pb-8"}>Break in the matrix</h1>
    )
  }

};


const GenderCalculation = ({onAdvance}) => {
  const [completed, setCompleted] = React.useState(0);

  React.useEffect(() => {
    setInterval(() => setCompleted(Math.floor(Math.random() * 100) + 1), 2000);
  }, []);

  const testData = [
    { bgcolor: "#6a1b9a", completed: 60 },
    { bgcolor: "#00695c", completed: 30 },
    { bgcolor: "#ef6c00", completed: 53 },
  ];

  return (
    <div className="text-center text-green-500">
      <h1 className={"text-xl pb-8"}>Calcs</h1>
      <ProgressBar key={"progress-bar"} bgcolor={"tomato"} completed={completed} />
      {testData.map((item, idx) => (
        <ProgressBar key={idx} bgcolor={item.bgcolor} completed={item.completed} />
      ))}

      <div>
        <button onClick={onAdvance}>Next</button>
      </div>
    </div>
  );
}


const ProgressBar = (props) => {
  const { bgcolor, completed } = props;

  const containerStyles = {
    height: 20,
    width: '100%',
    backgroundColor: "#e0e0de",
    borderRadius: 50,
    margin: 50
  }

  const fillerStyles = {
    height: '100%',
    width: `${completed}%`,
    backgroundColor: bgcolor,
    borderRadius: 'inherit',
    textAlign: 'right',
    transition: 'width 1s ease-in-out',
  }

  const labelStyles = {
    padding: 5,
    color: 'white',
    fontWeight: 'bold'
  }

  return (
    <div style={containerStyles}>
      <div style={fillerStyles}>
        <span style={labelStyles}>{`${completed}%`}</span>
      </div>
    </div>
  );
};


const container = document.getElementById("app-id");
const root = ReactDOM.createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App />);