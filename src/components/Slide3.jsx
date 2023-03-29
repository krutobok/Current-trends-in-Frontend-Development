import Slide from './Slide'
import cat from './images/computer.jpg'

const Slide3 = () => {
  return (
    <Slide className="grid grid-cols-2 gap-10 grid-rows-6 overflow-y-hidden">
      <h2 className="col-span-1 title mb-12 pt-12">Мета</h2>
      <img src={cat} className="row-span-6 h-full" alt="cat-website" />
      <ul className="list pl-12">
        <li>Дослідити сучасні тенденції у Frontend розробці</li>
        <li>Висвітлити нові можливості CSS, HTML, Java Script</li>
        <li>
          Показати приклади застосування та можливостей, які надають ці
          технології.
        </li>
        <li>
          Розглянути тенденції та перспективи у розвитку Frontend розробки у
          майбутньому
        </li>
      </ul>
    </Slide>
  )
}
export default Slide3
