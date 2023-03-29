import Slide from './Slide'

const Slide6 = () => {
  return (
    <Slide className=" grid grid-cols-2 gap-10 content-start p-12">
      <h2 className="col-span-2 title mb-12">CSS Grid</h2>
      <p className="leading-10 indent-7">
        CSS Grid - це один із модулів CSS, який дозволяє створювати багатошарові
        макети веб-сторінок з використанням різноманітних методів розташування
        елементів на сторінці. З його допомогою можна створювати складні
        структури, які раніше було досить важко або навіть неможливо реалізувати
        за допомогою інших CSS-модулів. Grid є одним з найбільш потужних
        інструментів CSS для розміщення елементів на веб-сторінці [
        <a href="#source">4</a>]. За даними сайту caniuse.com підтримка CSS-Grid
        браузерами на початок 2023 року становить 96.25% [
        <a href="#source">1</a>].
      </p>
      <div className="border-4 border-slate-700 grid grid-cols-5 text-center h-[600px] parent">
        <div className="bg-red-400 col-span-3">1</div>
        <div className="bg-green-400">2</div>
        <div className="bg-blue-400 row-span-2">3</div>
        <div className="bg-yellow-600 row-span-3">4</div>
        <div className="bg-red-700 col-span-3">5</div>
        <div className="bg-blue-700 col-span-2">6</div>
        <div className="bg-lime-800 col-span-2">7</div>
        <div className="bg-pink-700">8</div>
        <div className="bg-violet-700 col-span-3">9</div>
      </div>
    </Slide>
  )
}

export default Slide6
