import Slide from './Slide'
import framework from './images/framework.png'

const Slide4 = () => {
  return (
    <Slide className="grid grid-cols-2 gap-10 grid-rows-6 overflow-y-hidden">
      <h2 className="col-span-1 title mb-12 pt-12">Базові поняття</h2>
      <img
        src={framework}
        className="row-span-6 h-full w-full"
        alt="framework"
      />
      <div className="leading-10 pl-12 flex flex-col gap-8">
        <p className="indent-7">
          Frontend - це частина веб-розробки, що відповідає за розробку
          користувацького інтерфейсу (UI) веб-сайтів та додатків, доступних для
          взаємодії з користувачем у веб-браузері [<a href="#source">4</a>].
        </p>
        <p className="indent-7">
          Фреймворк - це набір засобів для розробки програмного забезпечення,
          які дозволяють розробникам писати код на високому рівні абстракції,
          зменшуючи кількість повторюваного коду та полегшуючи розробку складних
          додатків [<a href="#source">4</a>].
        </p>
        <p className="indent-7">
          Бібліотека - це набір готових функцій, методів і класів, які можна
          використовувати в програмному забезпеченні для вирішення певних задач,
          зменшуючи кількість власного коду та полегшуючи розробку додатків [
          <a href="#source">4</a>].
        </p>
      </div>
    </Slide>
  )
}
export default Slide4
