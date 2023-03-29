import Slide from './Slide'
import cat from './images/cat.jpg'

const Slide7 = () => {
  return (
    <Slide className=" grid grid-cols-2 gap-10 content-start p-12 items-center">
      <h2 className="col-span-2 title mb-12">Container-queries</h2>
      <div>
        <p className="indent-7">
          Container-queries - це можливість застосування CSS-стилів на основі
          розміру контейнера, в якому розташовані елементи, замість застосування
          стилів на основі розміру вікна браузера [<a href="#source">1</a>;{' '}
          <a href="#source">7</a>].
          {/* Це дає можливість створювати
          більш адаптивні макети і компоненти, оскільки елементи можуть
          реагувати на розмір свого власного контейнера, а не на розмір вікна
          браузера. Container-queries є альтернативою медіа-запитам, які
          використовуються для застосування CSS-стилів на основі розміру вікна
          браузера. За даними сайту caniuse.com підтримка цієї можливості
          браузерами на початок 2023 року становить 80.25%, що не достатньо для
          використання цієї можливості в усіх проектах. */}
        </p>
        <h6 className="subtitle">Переваги</h6>
        <ul className="list">
          <li>можливість створювати більш адаптивні макети і компоненти</li>
          <li>спрощує роботу зі створення адаптивної версії</li>
        </ul>
        <h6 className="subtitle">Недоліки</h6>
        <ul className="list">
          <li>Не достатній рівень підтримки 80.25%</li>
        </ul>
      </div>

      <div className="resize-x overflow-auto min-w-[260px]">
        <div className="@container flex flex-wrap-reverse">
          <p className="text-lg leading-[1.4rem] @xs:text-xl @[700px]:bg-red-300 @[700px]:text-3xl @[550px]:bg-orange-400 bg-green-500 @xs:bg-blue-500 @[550px]:basis-1/2 p-2 basis-full">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto
            placeat magnam tempora unde iure quasi, qui dignissimos rerum hic
            quo? Ipsam aspernatur beatae excepturi cupiditate at inventore a
            illum minima!
          </p>
          <img
            className="block @[550px]:basis-1/2 @[550px]:w-1/2 @xs:bg-blue-500 @md:bg-orange-400 @lg:bg-red-300 basis-full w-full"
            src={cat}
            alt="cat"
          />
        </div>
      </div>

      {/* <ResizableBox>iodasiojoij</ResizableBox> */}
    </Slide>
  )
}

export default Slide7
