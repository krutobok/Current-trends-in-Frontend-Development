import Slide from './Slide'

const Slide1 = () => {
  return (
    <Slide className="flex items-center justify-center flex-col p-6">
      <h1 className="text-7xl mb-32 mt-auto">
        Сучасні тенденції у Frontend розробці
      </h1>
      <h2>Розробив студент групи КС-21, СумДУ, Ткаченко Олександр</h2>
      <div className="text-lg mt-auto flex gap-2">
        <a
          target="_blank"
          rel="license"
          href="http://creativecommons.org/licenses/by-nc-nd/4.0/"
        >
          <img
            alt="Ліцензія Creative Commons"
            style={{ borderWidth: 0 }}
            src="https://i.creativecommons.org/l/by-nc-nd/4.0/88x31.png"
          />
        </a>
        Цей твір ліцензовано на умовах{' '}
        <a
          target="_blank"
          rel="license"
          href="http://creativecommons.org/licenses/by-nc-nd/4.0/"
        >
          Ліцензії Creative Commons Із Зазначенням Авторства — Некомерційна —
          Без Похідних 4.0 Міжнародна
        </a>
        .
      </div>
    </Slide>
  )
}

export default Slide1
