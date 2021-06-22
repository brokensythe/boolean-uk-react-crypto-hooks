// Instructions
// - Use this sandbox as template => https://codesandbox.io/s/crypto-tracker-w-custom-hooks-template-moqn8?file=/src/App.jsx
// - Remember to check the existing code before starting
// - In the App component, extract the fetch in the useEffect and corresponding state into a custom hook
// - In the NewsFeed component, extract the fetch in the useEffect and corresponding state into a custom hook
// import { useEffect, useState } from "react";


import MainDetail from "./components/MainDetail";
import NewsFeed from "./components/NewsFeed";
import SideList from "./components/SideList";
import { useState } from 'react'
import useCryptoList from "./hooks/useCryptoList";

//////////////////////////////////////////////////
//                                              //
//  Don't forget to check all the code again!!  //
//                                              //
//////////////////////////////////////////////////

function App() {
  const { cryptoList, findCripto, updateCryptoData } = useCryptoList()
  const [selectedCrypto, setSelectedCripto] = useState(null);

  // You can turn this into a custom hook////////////////////

  ///////////////////////////////////////////////////////////

  function selectCrypto(selectedId) {
    setSelectedCripto(selectedId);
  }

  function isSelectedCrypto(id) {
    return selectedCrypto === id;
  }

  return (
    /* These (<> </>) are called React Fragments, and allow us to return more than one top element */
    <>
      <aside className="side-list">
        {/* No need to worry about SideList and it's children, you can safey ignore it! */}
        <SideList
          cryptoList={cryptoList}
          isSelectedCrypto={isSelectedCrypto}
          selectCrypto={selectCrypto}
        />
      </aside>
      <main className="main-detail">
        {selectedCrypto ? (
          // Let's have a look at MainDetail
          <MainDetail
            selectedCrypto={findCripto(selectedCrypto)}
            updateCryptoData={updateCryptoData}
          />
        ) : (
          "Select a coin bro!"
        )}
        <NewsFeed />
      </main>
    </>
  );
}

export default App;
