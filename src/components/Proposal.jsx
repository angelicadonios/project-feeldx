import React from 'react'
import { UserGroupIcon, Cog6ToothIcon, LightBulbIcon, CursorArrowRaysIcon } from '@heroicons/react/24/outline'

const Proposal = () => {

  const features = [
  {
    name: 'Our Capabilities',
    description:
      'We skillfully uncover the underlying purpose of each project and translate it into compelling visual content that resonates personally with each audience.',
    icon: LightBulbIcon,
  },
  {
    name: 'Our Work',
    description:
      'We are committed to enhancing user experiences, exploring innovative audience engagement methods, and maximising production efficiency by adopting cutting-edge creative technologies.',
    icon: UserGroupIcon,
  },
  {
    name: 'Our Technology',
    description:
      'We use cutting-edge technology to produce comprehensive, realistic visualisations of projects from initiation to completion.',
    icon: CursorArrowRaysIcon,
  },
  {
    name: 'Our Services',
    description:
      'Tailoring specialised services to diverse sectors, our niche teams elevate project success by aligning with unique client needs.',
    icon: Cog6ToothIcon,
  },
]

  return (
    <>
      <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          
          <p id='proposal' className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance">
            Why Choose <span className='text-highlight'>FEELDX</span>
          </p>
          <p className="mt-6 text-lg/8 text-gray-700">
            At FeelDX we provide end to end services from inception to completion of any construction project.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base/7 font-semibold text-gray-900">
                  <div className="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg icon-btn">
                    <feature.icon aria-hidden="true" className="size-6 text-white" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base/7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
    </>
  )
}

export default Proposal