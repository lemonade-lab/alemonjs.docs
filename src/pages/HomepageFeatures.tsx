import clsx from 'clsx'
import Heading from '@theme/Heading'
import classNames from 'classnames'

type FeatureItem = {
  title: string
  imgSrc: string
  description: JSX.Element
}

/**
 *
 */
const FeatureList: FeatureItem[] = [
  {
    title: '简单易懂',
    imgSrc: require('@site/static/img/edt.png').default,
    description: <> JS函数式编程 </>
  },
  {
    title: '接口简洁',
    imgSrc: require('@site/static/img/api.png').default,
    description: <>优雅的编程风格</>
  },
  {
    title: '敏捷开发',
    imgSrc: require('@site/static/img/post.png').default,
    description: <>现代化开发生态</>
  }
]

function Feature({ title, imgSrc, description }: FeatureItem): JSX.Element {
  return (
    <div className={classNames(clsx('col col--4'), 'my-2')}>
      <div className="text--center flex">
        <img src={imgSrc} className=" h-28 md:h-32 m-auto" alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3"> {title} </Heading>
        <div className="whitespace-nowrap">{description}</div>
      </div>
    </div>
  )
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className="flex justify-around mt-8 py-8">
      <div className="container">
        <div className="row">
          {FeatureList.map(props => (
            <Feature key={props.title} {...props} />
          ))}
        </div>
      </div>
    </section>
  )
}
