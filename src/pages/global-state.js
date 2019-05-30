import React, { useState, createContext, useContext } from "react"

const ChildComponent = () => {
	const [fruit, setFruit] = useContext(FruitContext);
	return (
		<div>
			<h5>Child Component Demo</h5>
			<button onClick={() => setFruit('Orange')}>Change Fruit</button>
			{fruit === 'Orange' && <p>{fruit}</p> }
		</div>
	);
};

const UpperChildComponent = () => <ChildComponent />;

const FruitContext = createContext();

const GloablState = () => {
	const [fruit, setFruit] = useState('Apple');
	
  return (
    <FruitContext.Provider value={[fruit, setFruit]}>
      <h4>Gloabl State Demo [Hooks]</h4>
      <p>Todays Fruit is {fruit}</p>
      <UpperChildComponent />
    </FruitContext.Provider>
  )
};

export default GloablState;
