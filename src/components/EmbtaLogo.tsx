import { forwardRef, ImgHTMLAttributes } from 'react';

interface EmbtaLogoProps extends ImgHTMLAttributes<HTMLImageElement> {
  size?: number;
  className?: string;
  variant?: 'default' | 'white' | 'green';
}

export const EmbtaLogo = forwardRef<HTMLImageElement, EmbtaLogoProps>(
  ({ size = 48, className = '', variant = 'default', ...props }, ref) => {
    return (
      <img
        ref={ref}
        src="/EMBTA_web/logo.png"
        alt="EMBTA Logo"
        width={size}
        height={size}
        className={className}
        style={{
          width: size,
          height: size,
          objectFit: 'contain',
        }}
        {...props}
      />
    );
  }
);

EmbtaLogo.displayName = 'EmbtaLogo';