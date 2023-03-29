import React from 'react'
import ParticleField from './ParticleField'
import Slide from './Slide'

const Slide10 = () => {
  return (
    <Slide className="grid grid-cols-2 gap-10 grid-rows-6 ">
      <h2 className="col-span-1 title mb-12 pt-12">Canvas-Анімації</h2>
      <ParticleField />
      <div className="pl-12">
        <p className="leading-10 indent-7">
          Canvas - це HTML-елемент, що дає можливість рисувати графіку з
          використанням JavaScript. Завдяки Canvas можна створювати анімації,
          ігри, графіки, візуалізації даних та багато іншого. За допомогою
          Canvas можна рисувати геометричні фігури, лінії, текст, стилізовані
          форми та інші елементи, використовуючи методи та властивості контексту
          рендерингу 2D або 3D графіки [<a href="#source">3</a>].
        </p>
        <h6 className="subtitle-small">Переваги</h6>
        <ul className="list-small">
          <li>невеликий розмір</li>
          <li>велика гнучкість</li>
        </ul>
        <h6 className="subtitle-small">Недоліки</h6>
        <ul className="list-small">
          <li>складні анімації вимагають великої потужності комп'ютера</li>
        </ul>
      </div>
    </Slide>
  )
}

export default Slide10
