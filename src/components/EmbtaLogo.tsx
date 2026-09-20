import { forwardRef, SVGProps } from 'react';

interface EmbtaLogoProps extends SVGProps<SVGSVGElement> {
  size?: number;
  className?: string;
  variant?: 'default' | 'white' | 'green';
}

export const EmbtaLogo = forwardRef<SVGSVGElement, EmbtaLogoProps>(
  ({ size = 48, className = '', variant = 'default', ...props }, ref) => {
    const colors = {
      default: {
        navy: '#0A1628',
        blue: '#1A2F5C',
        green: '#00C853',
        white: '#FFFFFF',
      },
      white: {
        navy: '#FFFFFF',
        blue: '#FFFFFF',
        green: '#00E676',
        white: '#FFFFFF',
      },
      green: {
        navy: '#00C853',
        blue: '#00E676',
        green: '#00E676',
        white: '#00E676',
      },
    };

    const c = colors[variant];

    return (
      <svg
        ref={ref}
        width={size}
        height={size}
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-hidden="true"
        {...props}
      >
        <defs>
          <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={c.blue} />
            <stop offset="50%" stopColor={c.green} />
            <stop offset="100%" stopColor={c.green} />
          </linearGradient>
          <filter id="logoGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <circle
          cx="60"
          cy="60"
          r="56"
          fill="url(#logoGradient)"
          opacity="0.15"
          filter="url(#logoGlow)"
        />

        <circle cx="60" cy="60" r="52" stroke={c.green} strokeWidth="2" strokeOpacity="0.3" />

        <g transform="translate(60, 60)">
          <path
            d="M-25 -15 L-25 15 L25 15 L25 -15 Z"
            fill="none"
            stroke={c.green}
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.8"
          />
          
          <path
            d="M-20 -10 L20 -10"
            stroke={c.white}
            strokeWidth="2"
            strokeLinecap="round"
            opacity="0.9"
          />
          
          <path
            d="M-15 -3 L15 -3"
            stroke={c.white}
            strokeWidth="2"
            strokeLinecap="round"
            opacity="0.7"
          />
          
          <path
            d="M-18 4 L18 4"
            stroke={c.green}
            strokeWidth="2.5"
            strokeLinecap="round"
            opacity="0.9"
          />

          <circle
            cx="0"
            cy="0"
            r="8"
            fill="none"
            stroke={c.green}
            strokeWidth="1.5"
            strokeOpacity="0.5"
            strokeDasharray="4 4"
          />

          <path
            d="M-8 0 L8 0 M0 -8 L0 8"
            stroke={c.green}
            strokeWidth="1.5"
            strokeLinecap="round"
            opacity="0.6"
          />

          <ellipse
            cx="0"
            cy="25"
            rx="30"
            ry="3"
            fill={c.green}
            fillOpacity="0.2"
          />
        </g>

        <text
          x="60"
          y="108"
          textAnchor="middle"
          fontFamily="Space Grotesk, sans-serif"
          fontSize="11"
          fontWeight="700"
          fill={c.green}
          letterSpacing="3"
          opacity="0.8"
        >
          EMBTA
        </text>
      </svg>
    );
  }
);

EmbtaLogo.displayName = 'EmbtaLogo';