import Slide from './Slide'
import source from '../data/source'

const Slide11 = () => {
  return (
    <Slide className="p-12" id="source">
      <h2 className="title mb-12">Висновки</h2>
      <h6 className="mb-5">
        Отже, за останні 3 роки тенденції у Frontend суттєво змінилися:
      </h6>
      <ul className="list-disc flex flex-col justify-between gap-8 pl-12">
        <li>Css-grid став частиною Css стандарту</li>
        <li>Tailwind набрав серйозну популярність серед розробників</li>
        <li>
          React, Angular та Vue з кожним роком використовуються все більше
        </li>
        <li>CSS-фільтри та Canvas-анімації використовуються все частіше</li>
      </ul>
    </Slide>
  )
}

export default Slide11
