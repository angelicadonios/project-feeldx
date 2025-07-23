import React from 'react'

const Services = () => {

  const callouts = [
  {
    name: 'Visualisation',
    description: 'Our work blends strategy, storytelling, and creative technology across diverse sectors and projects.',
    imageSrc: 'https://images.pexels.com/photos/8837715/pexels-photo-8837715.jpeg',
    imageAlt: '',
    href: '#',
  },
  {
    name: 'Project Control',
    description: "We employ a thorough approach to project control, conducting regular control and status updates to ensure your project's smooth and efficient delivery.",
    imageSrc: 'https://images.pexels.com/photos/7693229/pexels-photo-7693229.jpeg',
    imageAlt: '',
    href: '#',
  },
  {
    name: 'Education',
    description: 'We collaborate closely with registered training organisations (RTOs) and education providers to produce multimedia content that supports holistic student learning.',
    imageSrc: 'https://images.pexels.com/photos/8867475/pexels-photo-8867475.jpeg',
    imageAlt: '',
    href: '#',
  },
]

  return (
  <div className="bg-page">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
          {/* our services */}
          <div className="mb-16 mx-auto max-w-2xl lg:mx-0">
            <h2 id='services' className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">OUR SERVICES</h2>
            <p className="mt-2 text-lg/8 text-gray-600">FeelDX specialises in crafting immersive visual experiences through cutting-edge 3D visualisation and creative technologies.</p>
          </div>

          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:space-y-0 lg:gap-x-6">
            {callouts.map((callout) => (
              <div key={callout.name} className="group relative">
                <img
                  alt={callout.imageAlt}
                  src={callout.imageSrc}
                  className="w-full rounded-lg bg-white object-cover group-hover:opacity-75 max-sm:h-80 sm:aspect-2/1 lg:aspect-square"
                />
                <h3 className="mt-6 text-xl font-semibold text-gray-900">
                  <a href={callout.href}>
                    <span className="absolute inset-0" />
                    {callout.name}
                  </a>
                </h3>
                <p className="text-base text-gray-500">{callout.description}</p>
                <a href="#" className="text-sm/6 font-semibold text-highlight">
                  Read more <span aria-hidden="true">→</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services