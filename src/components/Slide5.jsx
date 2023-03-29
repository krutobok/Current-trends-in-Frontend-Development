import Slide from './Slide'
import cat from './images/cat.jpg'

import 'prismjs'
import 'prismjs/themes/prism-tomorrow.css'
import 'prismjs/components/prism-css'
import { useState } from 'react'

const initialState = {
  ['blur(5px)']: false,
  ['brightness(180%)']: false,
  ['contrast(120%)']: false,
  ['grayscale(70%)']: false,
  ['hue-rotate(90deg)']: false,
  ['invert(75%)']: false,
  ['opacity(30%)']: false,
  ['sepia(20%)']: false,
  ['saturate(20%)']: false,
}

const Slide5 = () => {
  const [filter, setFilter] = useState(initialState)
  let filterString = ''
  const checkboxNode = []
  let num = 0
  for (const key in filter) {
    if (Object.hasOwnProperty.call(filter, key)) {
      checkboxNode.push(
        <label className="text-2xl" htmlFor={[key]} key={[key]}>
          <input
            id={[key]}
            type="checkbox"
            checked={filter[key]}
            onChange={() =>
              setFilter((prevState) => {
                return { ...prevState, [key]: !prevState[key] }
              })
            }
          />
          {[key]}
        </label>
      )
      if (filter[key]) {
        num++
        if (num > 6) {
          filterString = filterString + ' \n  ' + key
          num = 0
        } else {
          filterString = filterString + ' ' + key
        }
      }
    }
  }

  return (
    <Slide className="grid grid-cols-12 gap-2 p-6 ">
      <h2 className="col-span-12 title">CSS-фільтри</h2>
      <p className="col-span-7 indent-7">
        Css-фільтри це потужний інструмент для обробки зображення засобами css,
        тобто прямо в браузері. Наглядна демонстрація роботи цієї
        css-властивості наведено на слайді. За даними сайту caniuse.com
        підтримка CSS-фільтрів браузерами на початок 2023 року становить 97.25%
        [<a href="#source">1</a>].
      </p>
      <div className="col-span-5 row-span-2">
        <img style={{ filter: `${filterString.trim() || 'none'}` }} src={cat} />
      </div>

      <form className=" col-span-7 flex flex-col">
        <h6>Фільтри: </h6>
        {checkboxNode}
      </form>
      <pre className="language-css col-span-12">
        <code>{`.cat {
  filter:${filterString.length > 0 ? filterString : ' none'};
}`}</code>
      </pre>
    </Slide>
  )
}

export default Slide5
