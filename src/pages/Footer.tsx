import classNames from 'classnames'
import { useInView } from 'react-intersection-observer'
import { useEffect, useState } from 'react'
import Translate from '@docusaurus/Translate'

/**
 *
 * @returns
 */
export default function Footer() {
  const [ref, isView1] = useInView({
    triggerOnce: false,
    threshold: 0.5
  })
  const [show, setShow] = useState(false)
  useEffect(() => {
    if (isView1 == false) setShow(false)
  }, [isView1])
  return (
    <footer id="footer" ref={ref} className="bg-[#303846] mt-20">
      <section className="pt-16 xl:py-16 relative">
        <div className="container ">
          <div className="flex flex-wrap">
            {
              //
            }
            <div className="w-full  lg:w-1/2 xl:w-4/12">
              <div className="mx-3 mb-8">
                <div className="footer-logo mb-3">
                  <img
                    className={classNames('h-32 animate__animated ', {
                      'animate__fadeInUp opacity-100': isView1,
                      'animate__fadeOut opacity-0': !isView1
                    })}
                    draggable="false"
                    src={require('@site/static/img/alemon.png').default}
                    alt="logo"
                  />
                </div>
                <div
                  className={classNames('animate__animated animate__duration_1-3 text-gray-300 ', {
                    'animate__fadeInUp opacity-100': isView1,
                    'animate__fadeOut opacity-0': !isView1
                  })}
                >
                  <Translate>基于 JavaScript 所构建的跨平台开发框架</Translate>
                </div>
              </div>
            </div>

            {
              //
            }

            <div className="w-full  lg:w-1/2 xl:w-6/12">
              <div
                className={classNames('mx-3 mb-8  animate__animated animate__duration_1-5', {
                  'animate__fadeInUp opacity-100': isView1,
                  'animate__fadeOut opacity-0': !isView1
                })}
              >
                <div className="font-bold text-xl text-white mb-5">
                  <Translate>教程</Translate>
                </div>
                <ul>
                  <div>
                    <span
                      className=" text-white cursor-pointer hover:text-blue-400"
                      onClick={() => (window.location.href = '/docs/intro')}
                    >
                      <Translate>简介</Translate>
                    </span>
                  </div>
                  <div>
                    <span
                      className=" text-white cursor-pointer hover:text-blue-400"
                      onClick={() => (window.location.href = '/docs/category/开发文档')}
                    >
                      <Translate>开发文档</Translate>
                    </span>
                  </div>
                </ul>
              </div>
            </div>

            <div className="w-full lg:w-1/2 xl:w-2/12 flex justify-start">
              <div
                className={classNames('mx-3 mb-8  animate__animated animate__duration_1-5', {
                  'animate__fadeInUp opacity-100': isView1,
                  'animate__fadeOut opacity-0': !isView1
                })}
              >
                <div className="font-bold text-xl text-white mb-5">
                  <Translate>更多</Translate>
                </div>
                <ul>
                  <div>
                    <span
                      className=" text-white cursor-pointer hover:text-blue-400"
                      onClick={() => {
                        window.open('https://github.com/lemonade-lab/alemonjs', '_blank')
                      }}
                    >
                      alemonjs
                    </span>
                  </div>
                  <div>
                    <span
                      className=" text-white cursor-pointer hover:text-blue-400"
                      onClick={() =>
                        window.open('https://github.com/lemonade-lab/chat-space', '_blank')
                      }
                    >
                      chat-space
                    </span>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="border-t-2 border-gray-700 border-dotted"></section>
      <section className="py-6 px-4">
        <div className="text-center text-[#e5e7eb]">
          Copyright © {new Date().getFullYear()} LEMONADE |
          <span
            className=" cursor-pointer text-blue-400"
            onClick={() => window.open('https://beian.miit.gov.cn/')}
          >
            津ICP备2023004480号
          </span>
        </div>
      </section>
    </footer>
  )
}
