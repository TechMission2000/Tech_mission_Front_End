import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

function OurProcess() {
  return (
    <section className="py-16 px-4 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <p className="text-blue-600 font-medium text-sm md:text-base">\ Stockie Operation Across the world \</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                We have best team
                <br />
                and best process
              </h2>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-md">
                Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing.
                Indulgence way everything joy.
              </p>
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-base font-medium">
              Get Started
            </Button>
          </div>

          {/* Right Content - Process Flow */}
          <div className="relative ">
            <svg width="1010" height="447" viewBox="0 0 1010 447" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g filter="url(#filter0_d_684_9303)">
                <path d="M25 310.797C70.3168 345.797 175.867 411.797 235.534 395.797C310.118 375.797 328.528 272.797 443.708 248.797C558.888 224.797 643.385 308.297 732.602 187.797C821.82 67.2971 865.248 -11.7029 985.149 5.29715" stroke="#195296" stroke-opacity="0.95" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M25 310.797C70.3168 345.797 175.867 411.797 235.534 395.797C310.118 375.797 328.528 272.797 443.708 248.797C558.888 224.797 643.385 308.297 732.602 187.797C821.82 67.2971 865.248 -11.7029 985.149 5.29715" stroke="#1963B9" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
              </g>
              <defs>
                <filter id="filter0_d_684_9303" x="0.5" y="0.5" width="1009.15" height="446.256" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                  <feOffset dy="24" />
                  <feGaussianBlur stdDeviation="11" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0.215686 0 0 0 0 0.203922 0 0 0 0 0.662745 0 0 0 0.3 0" />
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_684_9303" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_684_9303" result="shape" />
                </filter>
              </defs>
            </svg>


            <div className="">
              {/* Card 1 - Bottom Left */}
              <div
                className="absolute w-64 md:w-72"
                // Positioned below the first dot (cy=580)
                style={{ top: 'calc(96.6% + 25px)', left: '4%' }}
              >
                <Card className="bg-white shadow-lg border-0">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-gray-900 mb-3 text-lg">Project Discovery Call</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Party we years to order allow asked of. We so opinion friends me message as delight.
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Card 2 - Middle */}
              <div
                className="absolute w-64 md:w-72"
                // Positioned below the second dot (cy=350)
                style={{ top: 'calc(58.3% + 25px)', left: '50%', transform: 'translateX(-50%)' }}
              >
                <Card className="bg-white shadow-lg border-0">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-gray-900 mb-3 text-lg">Strategic Planning</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      His defective nor convinced residence own. Connection has put impossible own apartments
                      boisterous.
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Card 3 - Top Right */}
              <div
                className="absolute w-64 md:w-72"
                // Positioned below the third dot (cy=100)
                style={{ top: 'calc(16.7% + 25px)', left: '96%', transform: 'translateX(-100%)' }}
              >
                <Card className="bg-white shadow-lg border-0">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-gray-900 mb-3 text-lg">Design & Development</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may
                      instantly.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurProcess

