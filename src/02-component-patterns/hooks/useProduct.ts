import { useEffect, useRef, useState } from "react"
import { Product, onChangeArgs } from "../interfaces/interfaces"

interface PropsStateCaount {
  product:Product;
  onChange?: ( args : onChangeArgs )=> void;
  value?: number;
}

export const useProduct = ({onChange, product, value = 0} : PropsStateCaount) => {

    const [count, setCount] = useState(value);


    const increasBy = (value: number) => {
      const newValue = Math.max(count + value, 0)

        setCount(newValue)
        
        onChange && onChange({ count: newValue , product});
    }

    useEffect(() => {
      setCount(value);
    }, [value])
    

  return {
    count,
    increasBy
  }
}
