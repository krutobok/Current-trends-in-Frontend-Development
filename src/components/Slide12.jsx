import Slide from './Slide'
import source from '../data/source'

const Slide12 = () => {
  return (
    <Slide className="p-12" id="source">
      <h2 className="title mb-12">Список використаної літератури</h2>
      <ol className="list-decimal flex flex-col justify-between gap-4">
        {source.map((el, i) => (
          <li key={i + 1} dangerouslySetInnerHTML={{ __html: el }} />
        ))}
      </ol>
    </Slide>
  )
}

export default Slide12
