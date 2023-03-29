import Slide from './Slide'
import framework from './images/framework.jpg'

const Slide8 = () => {
  return (
    <Slide className=" grid grid-cols-2 gap-x-10 gap-y-1 content-start p-12">
      <h2 className="col-span-2 title mb-24">
        Сучасні Java Script фреймворки та бібліотеки
      </h2>
      <p className="leading-10 row-span-2 indent-7">
        React, Vue та Angular - це інструменти для розробки веб-додатків на
        стороні клієнта, що використовуються у Frontend розробці. Основні
        відмінності між ними полягають у підходах до роботи з компонентами, в
        засобах для стилізації та використання веб-компонентів. React та Vue
        мають менший поріг входження та відомі своєю простотою та гнучкістю,
        тоді як Angular пропонує широкі можливості та стандартизовану структуру
        проекту. Однак, всі ці інструменти мають спільну мету - допомогти
        розробникам створити високоякісні та ефективні веб-додатки [
        <a href="#source">4</a>].
      </p>
      <img src={framework} className="" alt="framework" />
      <p className="text-lg">
        Кількість завантажень найпопулярніших фреймворків та бібліотек за даними
        npm-stat.com
      </p>
    </Slide>
  )
}

export default Slide8
