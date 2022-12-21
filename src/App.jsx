import { isEven } from './util'

const App = () => {
  const insertNum = prompt("Upiši broj:");

  return (
    <div>
      {isEven(insertNum) && <p>Broj je paran.</p>}
      {!isEven(insertNum) && <p>Broj je neparan.</p>}
    </div>
  );
}

export default App;
