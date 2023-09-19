import { useEffect, useRef, useState } from "react"
import { Product, onChangeArgs } from "../interfaces/interfaces"

interface PropsStateCaount {
  product:Product;
  onChange?: ( args : onChangeArgs )=> void;
  value?: number;
}

export const useProduct = ({onChange, product, value = 0} : PropsStateCaount) => {

    const [count, setCount] = useState(value);
    const isControled = useRef(  !!onChange );

    const increasBy = (value: number) => {

      const newValue = Math.max(count + value, 0)

        if (isControled.current && onChange) {
          return onChange({count: value, product})
        }
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
