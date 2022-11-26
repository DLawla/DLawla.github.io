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

const gender = 1

const inputStyle = "w-100 my-8 bg-gray-50 border border-green-300 text-green-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-green-700 dark:border-green-600 dark:placeholder-green-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"

const App = (props) => {
  const [showMatrix, setShowMatrix] = React.useState(false);
  const [flashMatrix, setFlashMatrix] = React.useState(false);
  const [appState, setAppState] = React.useState(0);

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
      }, 200)
    }
  }, [flashMatrix])

  const onAdvance = () => {
    if (appState == 3 || appState == 6 || appState == 7 || appState == 8) {
      setFlashMatrix(true)
    }
    setAppState(appState + 1)
  }

  const onMaleNameEntry = (e) => {
    confirm("Is that even a human name?")
    onAdvance();
  }

  if (stateNames[appState] === "splash") {
    return (
      <div className="text-center text-green-500">
        <h1 className={"text-2xl pb-8"}>Welcome to the human gender calculator!</h1>

        <p className={"pb-8"}>Within thousands of milliseconds, you can know your fresh human gender!</p>

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
      <GenderCalculation onAdvance={onAdvance} showMatrix={() => setShowMatrix(true)} hideMatrix={() => {setShowMatrix(false)}}/>
    );
  }
  else if (stateNames[appState] === "reveal") {
    return (
      <Reveal/>
    );
  } else {
    return (
      <h1 className={"text-xl pb-8"}>Break in the matrix</h1>
    )
  }

};

function useInterval(callback, delay) {
  const savedCallback = React.useRef();

  // Remember the latest callback.
  React.useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  React.useEffect(() => {
    let id = setInterval(() => {
      savedCallback.current();
    }, delay);
    return () => clearInterval(id);
  }, [delay]);
}

const GenderCalculation = ({onAdvance, showMatrix, hideMatrix}) => {
  const randomColor = () => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    return("#" + randomColor);
  }

  let startingData = [
    { bgcolor: "green", title: "Penis size", progress: 80, units: "cm" },
    { bgcolor: randomColor(), title: "VO2 max", progress: 53 },
    { bgcolor: randomColor(), title: "Volume of crying", progress: 30, units: "dB" },
    { bgcolor: randomColor(), title: "Sleep per night", progress: 53, units: "minutes"  },
    { bgcolor: randomColor(), title: "Love of maple syrup", progress: 53 },
    { bgcolor: randomColor(), title: "Understanding of thermodynamics", progress: 53, units: "Q" },
    { bgcolor: randomColor(), title: "Number of green fingers", progress: 53, units: "digits" },
    { bgcolor: randomColor(), title: "Patience", progress: 53 },
    { bgcolor: randomColor(), title: "Teenage fringe length", progress: 53, units: "mm" },
    { bgcolor: randomColor(), title: "Age of first IF/ELSE statement", progress: 53, units: "months" },
    { bgcolor: randomColor(), title: "Foot ugliness", progress: 53 },
    { bgcolor: randomColor(), title: "Mouth breather rating", progress: 53 },
  ];

  const [overallProgress, setOverallProgress] = React.useState(0)
  const [data, setData] = React.useState(startingData);
  const [complete, setComplete] = React.useState(false);

  useInterval(() => {
    const newData = []

    if (!complete) {
      data.map((item, idx) => {

        item.progress = item.progress + Math.round((Math.random() * 40) - 20)

        if (item.progress > 100) {
          item.progress = 100
        }
        if (item.progress < 0) {
          item.progress = 0
        }

        newData[idx] = item
      })

      setData(newData);
    }
  }, 100);

  useInterval(() => {
    if (overallProgress < 100) {
      setOverallProgress(overallProgress + 1);
    }
    else {
      setComplete(true)
    }
  }, 200);

  useInterval(() => {
    if (overallProgress > 75 && overallProgress < 90) {
      showMatrix()
    } else {
      hideMatrix()
    }
  }, 1000);

  // Ending animation
  React.useEffect(() => {
    if (complete) {
      console.log("complete", gender, data[0].progress)
      if (gender == 0) {
        let clonedData = data.map(a => {return {...a}})
        clonedData[0].progress = 0.0
        clonedData[0].extraClass = "animate-ping"
        console.log(clonedData)
        setData(clonedData)
      } else if (gender == 1) {
        let clonedData = data.map(a => {return {...a}})
        clonedData[0].progress = 100.0
        clonedData[0].extraClass = "animate-ping"
        console.log(clonedData)
        setData(clonedData)
      }

      setTimeout(onAdvance, 4000)
    }
  }, [complete])

  return (
    <div className="text-center text-green-500">
      <h1 className={"text-xl pb-2 animate-pulse"}>... calculating {overallProgress}%</h1>

      { data.map((item, idx) => (
        <div key={idx} className={"my-0 sm:my-3"}>
          <span className={"text-xs sm:text-xs"}>{item.title}</span>
          <ProgressBar bgcolor={item.bgcolor} progress={item.progress} units={item.units} extraClass={item.extraClass} />
        </div>
      )) }
    </div>
  );
}

const Reveal = () => {
  const [reveal1, setReveal1] = React.useState(false)
  const [reveal2, setReveal2] = React.useState(false)
  const [reveal3, setReveal3] = React.useState(false)

  React.useEffect(() => {
    setTimeout(() => {setReveal1(true)}, 2000)
    setTimeout(() => {setReveal2(true)}, 4000)
    setTimeout(() => {setReveal3(true)}, 6000)
  }, [])

  return (
    <div className="text-center text-green-500">
      <h1 className={"text-xl pb-8"}>It's a...</h1>
      { reveal1 &&
        <div>
          <h1 className={"text-3xl pb-8"}>
            {gender}!
          </h1>

        </div>
      }

      {reveal2 &&
        <h1 className={"text-3xl pb-8"}>
          ({gender == 0 ? "GIRL" : "BOY"})
        </h1>
      }

      {reveal3 &&
        <h1 className={"text-3xl pb-8 animate-ping"}>
          GONGRATS!
        </h1>
      }
    </div>
  );
}

const ProgressBar = (props) => {
  const { bgcolor, progress, units, extraClass } = props;

  const containerStyles = {
    height: 10,
    backgroundColor: "#e0e0de",
    borderRadius: 50,
  }

  const fillerStyles = {
    height: '100%',
    width: `${progress}%`,
    backgroundColor: bgcolor,
    borderRadius: 'inherit',
    textAlign: 'right',
    alignItems: 'center',
    transition: 'width 1s ease-in-out',
    paddingVertical: 2,
  }

  const labelStyles = {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 8,
    paddingRight: 5,
  }

  return (
    <div style={containerStyles} className={extraClass ? extraClass : ""}>
      <div style={fillerStyles}>
        <div style={labelStyles}>{`${progress}${units ? ` ${units}` : "%"}`}</div>
      </div>
    </div>
  );
};


const container = document.getElementById("app-id");
const root = ReactDOM.createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App />);