import clsx from 'clsx'
import Heading from '@theme/Heading'
import classNames from 'classnames'
import Translate from '@docusaurus/Translate'

type FeatureItem = {
  title: JSX.Element
  imgSrc: string
  description: JSX.Element
}

/**
 *
 */
const FeatureList: FeatureItem[] = [
  {
    title: (
      <Translate id="feature.simpleAndUnderstandable" description="简单易懂">
        简单易懂
      </Translate>
    ),
    imgSrc: require('@site/static/img/edt.png').default,
    description: (
      <Translate id="feature.jsFunctionalProgramming" description="JS函数式编程">
        JS函数式编程
      </Translate>
    )
  },
  {
    title: (
      <Translate id="feature.simplifiedInterface" description="接口简洁">
        接口简洁
      </Translate>
    ),
    imgSrc: require('@site/static/img/api.png').default,
    description: (
      <Translate id="feature.3DDataDeclaration" description="立体的数据声明">
        立体的数据声明
      </Translate>
    )
  },
  {
    title: (
      <Translate id="feature.developerFriendly" description="开发友好">
        开发友好
      </Translate>
    ),
    imgSrc: require('@site/static/img/post.png').default,
    description: (
      <Translate id="feature.modernDevEcosystem" description="现代化开发生态">
        现代化开发生态
      </Translate>
    )
  }
]

const features = [
  {
    title: (
      <Translate id="feature.fullSupport" description="完全支持">
        完全支持
      </Translate>
    ),
    description: (
      <Translate
        id="feature.tsSupport"
        description="对 TypeScript 的完全支持，提升开发效率与安全性。"
      >
        对 TypeScript 的完全支持，提升开发效率与安全性。
      </Translate>
    )
  },
  {
    title: (
      <Translate id="feature.ecosystemSupport" description="生态支持">
        生态支持
      </Translate>
    ),
    description: (
      <Translate
        id="feature.frontendEcosystem"
        description="可借助 React、SCSS、Tailwind CSS 等前端生态描绘图片。"
      >
        可借助 React、SCSS、Tailwind CSS 等前端生态描绘图片。
      </Translate>
    )
  },
  {
    title: (
      <Translate id="feature.quickStart" description="快速上手">
        快速上手
      </Translate>
    ),
    description: (
      <Translate id="feature.developerMode" description="一整套约定的机器人开发模式，快速上手。">
        一整套约定的机器人开发模式，快速上手。
      </Translate>
    )
  },
  {
    title: (
      <Translate id="feature.extremeSpeed" description="极致速度">
        极致速度
      </Translate>
    ),
    description: (
      <Translate id="feature.startupSpeed" description="极致的启动速度和执行效率，提升用户体验。">
        极致的启动速度和执行效率，提升用户体验。
      </Translate>
    )
  },
  {
    title: (
      <Translate id="feature.builtInOptimization" description="内置优化">
        内置优化
      </Translate>
    ),
    description: (
      <Translate
        id="feature.esBuildRollup"
        description="基于esBuild和Rollup,可打包、压缩、混淆等。"
      >
        基于esBuild和Rollup,可打包、压缩、混淆等。
      </Translate>
    )
  },
  {
    title: (
      <Translate id="feature.completeToolchain" description="完整工具链">
        完整工具链
      </Translate>
    ),
    description: (
      <Translate
        id="feature.robotDevEcosystem"
        description="拥有完整的机器人开发生态和工具链，助力开发者。"
      >
        拥有完整的机器人开发生态和工具链，助力开发者。
      </Translate>
    )
  },
  {
    title: (
      <Translate id="feature.extensibility" description="可扩展性">
        可扩展性
      </Translate>
    ),
    description: (
      <Translate
        id="feature.customIntegration"
        description="可扩展、可自定义的对接各类平台，灵活适应需求。"
      >
        可扩展、可自定义的对接各类平台，灵活适应需求。
      </Translate>
    )
  },
  {
    title: (
      <Translate id="feature.middleware" description="中间件">
        中间件
      </Translate>
    ),
    description: (
      <Translate id="feature.globalControl" description="控制全局传入调用。可适配可兼容。">
        控制全局传入调用。可适配可兼容。
      </Translate>
    )
  },
  {
    title: (
      <Translate id="feature.noPlatform" description="无平台">
        无平台
      </Translate>
    ),
    description: (
      <Translate
        id="feature.debugWithoutLogin"
        description="不需要登录任何平台即可调试和体验工程。"
      >
        不需要登录任何平台即可调试和体验工程。
      </Translate>
    )
  }
]

function Feature({ title, imgSrc, description }: FeatureItem): JSX.Element {
  return (
    <div className={classNames(clsx('col col--4 '), 'my-2')}>
      <div className="text--center flex ">
        <img src={imgSrc} className=" h-28 md:h-32 m-auto" alt={title.props.id} />
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
            <Feature key={props.title.props.id} {...props} />
          ))}
        </div>
        <div className="container mx-auto py-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg p-6 transition-transform transform hover:scale-105"
              >
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-700">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
