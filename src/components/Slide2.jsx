import Slide from './Slide'
import cat from './images/cats-website.png'

const Slide2 = () => {
  return (
    <Slide className="grid grid-cols-2 gap-10 grid-rows-6 overflow-y-hidden">
      <h2 className="col-span-1 title mb-12 pt-12">Вступ</h2>
      <img src={cat} className="row-span-6" alt="cat-website" />
      <p className="leading-10 pl-12 indent-7">
        Frontend розробка - це один з найшвидше зростаючих секторів технологій у
        світі. За останні роки технології, які використовуються для створення
        frontend, значно змінилися та розвинулися. Із зростанням популярності
        мобільних пристроїв та IoT, вимоги до якості та швидкодії веб-додатків
        зросли на порядок. Тому, знання сучасних тенденцій та новітніх
        технологій у Frontend розробці є надзвичайно важливим для успішної
        роботи в цій галузі.
      </p>
    </Slide>
  )
}

export default Slide2
