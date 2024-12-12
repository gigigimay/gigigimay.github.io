import classNames from 'classnames'

interface WavesProps {
  fill?: string
  className?: string
}

export const Waves = ({ fill = '#ffffff', className }: WavesProps) => {
  return (
    <div className={classNames('absolute bottom-0 left-0 right-0', className)}>
      <svg
        className="waves"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 24 150 32"
        preserveAspectRatio="none"
        shapeRendering="auto"
      >
        <defs>
          <path
            id="gentle-wave"
            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
          />
        </defs>
        <g className="parallax">
          <use
            xlinkHref="#gentle-wave"
            x="48"
            y="0"
            fill={fill}
            fillOpacity={0.6}
            // stroke="white"
            // strokeWidth={0.03}
          />
          <use
            xlinkHref="#gentle-wave"
            x="48"
            y="3"
            fill={fill}
            fillOpacity={0.4}
            // stroke="white"
            // strokeWidth={0.05}
          />
          <use
            xlinkHref="#gentle-wave"
            x="48"
            y="5"
            fill={fill}
            fillOpacity={0.2}
            // stroke="white"
            // strokeWidth={0.07}
          />
          <use
            xlinkHref="#gentle-wave"
            x="48"
            y="7"
            fill={fill}
            // stroke="white"
            // strokeWidth={1.05}
          />
        </g>
      </svg>
    </div>
  )
}
