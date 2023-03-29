import Slide from './Slide'
import framework from './images/css.jpg'

const Slide9 = () => {
  return (
    <Slide className=" grid grid-cols-2 gap-x-10 gap-y-1 content-start p-12">
      <h2 className="col-span-2 title mb-12">Сучасні CSS бібліотеки</h2>
      <div>
        <p className="leading-10 indent-7">
          Bootstrap та Tailwind - це дві популярні CSS бібліотеки, які
          допомагають швидко створювати веб-інтерфейси [<a href="#source">2</a>;{' '}
          <a href="#source">4</a>; <a href="#source">9</a>].
        </p>
        <h6 className="subtitle-small">Переваги Tailwind</h6>
        <ul className="list-small">
          <li>менший розмір CSS-файлів</li>
          <li>має велику кількість можливостей налаштування</li>
        </ul>
        <h6 className="subtitle-small">Недоліки Tailwind</h6>
        <ul className="list-small">
          <li>немає готових компонентів</li>
        </ul>
        <h6 className="subtitle-small">Переваги Bootstrap</h6>
        <ul className="list-small">
          <li>має просту сітку дозволяє швидко створювати прості інтерфейси</li>
          <li>має готові компоненти</li>
        </ul>
        <h6 className="subtitle-small">Недоліки Bootstrap</h6>
        <ul className="list-small">
          <li>великий розмір CSS-файлів</li>
          <li>не має можливостей гнучкого налаштування</li>
        </ul>
      </div>
      <div>
        <img src={framework} alt="framework" />
        <p className="text-lg">
          Кількість завантажень найпопулярніших бібліотек за даними npm-stat.com
        </p>
      </div>
    </Slide>
  )
}

export default Slide9
