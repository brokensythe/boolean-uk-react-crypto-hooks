import { CRIPTO_LIST } from "../constants";
import { useState, useEffect } from 'react'

function useCryptoList() {
    const [cryptoList, setCryptoList] = useState([]);

    useEffect(() => {
        fetch(CRIPTO_LIST)
          .then((resp) => resp.json())
          .then(setCryptoList);
      }, [setCryptoList]);

      function findCripto(criptoId) {
        return cryptoList.find(({ id }) => id === criptoId);
      }

      function updateCryptoData(data, id) {
        setCryptoList((cryptoList) =>
          cryptoList.map((crypto) =>
            crypto.id === id ? { ...crypto, ...data } : crypto
          )
        );
      }

      return { cryptoList, findCripto, updateCryptoData }
}

export default useCryptoList