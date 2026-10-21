import { HTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = 'default', size = 'md', children, ...props }, ref) => {
    const variants = {
      default: 'bg-neutral-100 text-text-secondary',
      primary: 'bg-primary-100 text-primary-700',
      secondary: 'bg-secondary-100 text-secondary-700',
      success: 'bg-green-100 text-green-700',
      warning: 'bg-amber-100 text-amber-700',
      error: 'bg-red-100 text-red-700',
      outline: 'bg-transparent border border-border-medium text-text-secondary',
    };

    const sizes = {
      sm: 'px-2 py-0.5 text-xs',
      md: 'px-2.5 py-1 text-sm',
      lg: 'px-3 py-1.5 text-base',
    };

    return (
      <span
        ref={ref}
        className={cn(
          'inline-flex items-center font-medium rounded-full',
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        {children}
      </span>
    );
  }
);
Badge.displayName = 'Badge';

export interface AvatarProps extends HTMLAttributes<HTMLDivElement> {
  src?: string;
  alt?: string;
  name?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  shape?: 'circle' | 'square';
}

export const Avatar = forwardRef<HTMLDivElement, AvatarProps>(
  ({ className, src, alt, name, size = 'md', shape = 'circle', ...props }, ref) => {
    const sizes = {
      xs: 'w-6 h-6 text-xs',
      sm: 'w-8 h-8 text-sm',
      md: 'w-10 h-10 text-base',
      lg: 'w-12 h-12 text-lg',
      xl: 'w-16 h-16 text-xl',
      '2xl': 'w-24 h-24 text-2xl',
    };

    const shapes = {
      circle: 'rounded-full',
      square: 'rounded-xl',
    };

    const getInitials = (name: string) => {
      return name
        .split(' ')
        .map((part) => part[0])
        .join('')
        .toUpperCase()
        .slice(0, 2);
    };

    const getColor = (name: string) => {
      const colors = [
        'bg-primary-100 text-primary-700',
        'bg-secondary-100 text-secondary-700',
        'bg-green-100 text-green-700',
        'bg-amber-100 text-amber-700',
        'bg-red-100 text-red-700',
        'bg-blue-100 text-blue-700',
        'bg-purple-100 text-purple-700',
        'bg-pink-100 text-pink-700',
      ];
      const index = name.charCodeAt(0) % colors.length;
      return colors[index];
    };

    return (
      <div
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center font-medium overflow-hidden',
          sizes[size],
          shapes[shape],
          className
        )}
        {...props}
      >
        {src ? (
          <img src={src} alt={alt || name || 'Avatar'} className="w-full h-full object-cover" />
        ) : name ? (
          <span className={getColor(name)}>{getInitials(name)}</span>
        ) : (
          <svg
            className="w-full h-full text-neutral-400"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        )}
      </div>
    );
  }
);
Avatar.displayName = 'Avatar';

export interface DividerProps extends HTMLAttributes<HTMLHRElement> {
  orientation?: 'horizontal' | 'vertical';
  variant?: 'solid' | 'dashed' | 'dotted';
}

export const Divider = forwardRef<HTMLHRElement, DividerProps>(
  ({ className, orientation = 'horizontal', variant = 'solid', ...props }, ref) => {
    const orientations = {
      horizontal: 'w-full h-px',
      vertical: 'h-full w-px',
    };

    const variants = {
      solid: 'bg-border-light',
      dashed: 'bg-border-light border-t-[1px] border-dashed',
      dotted: 'bg-border-light border-t-[1px] border-dotted',
    };

    return (
      <hr
        ref={ref}
        className={cn(orientations[orientation], variants[variant], className)}
        {...props}
      />
    );
  }
);
Divider.displayName = 'Divider';