# Migrating from CSS Modules to HeroUI with Once UI Styling

This guide helps you migrate from a traditional CSS Modules implementation of Once UI to a HeroUI-based implementation.

## Why Migrate to HeroUI?

HeroUI offers several advantages for implementing the Once UI design system:

1. **Pre-built Components**: HeroUI provides a comprehensive set of accessible, customizable components
2. **Theming System**: HeroUI's theme system integrates seamlessly with Tailwind CSS
3. **Accessibility**: HeroUI components are built with accessibility in mind
4. **Developer Experience**: Faster development with less boilerplate code
5. **Maintainability**: Easier to maintain and update as your application grows

## Migration Strategy

### Step 1: Audit Your Current Implementation

Before migrating, audit your current CSS Modules implementation:

1. Identify all custom components and their variants
2. Document design tokens (colors, typography, spacing, etc.)
3. List any custom functionality not provided by standard components

### Step 2: Set Up HeroUI with Once UI Theme

1. Install HeroUI and its dependencies:

```bash
npm install @heroui/react @heroui/use-theme @iconify/react framer-motion
```

2. Configure Tailwind CSS with the Once UI theme (see the Theme Configuration Guide)

### Step 3: Create Component Wrappers

For each component in your Once UI implementation, create a wrapper component that applies the appropriate styling to the corresponding HeroUI component.

#### Example: Button Migration

**Before (CSS Modules):**

```tsx
// Button.tsx
import React from 'react';
import styles from './Button.module.css';

export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'tertiary';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'medium',
  disabled = false,
  children,
  onClick,
  className = '',
}) => {
  return (
    <button
      className={`${styles.button} ${styles[variant]} ${styles[size]} ${disabled ? styles.disabled : ''} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
```

```css
/* Button.module.css */
.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  font-family: var(--font-family-primary);
  font-weight: var(--font-weight-medium);
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  border: none;
}

.primary {
  background-color: var(--color-brand-primary);
  color: white;
}

.secondary {
  background-color: transparent;
  border: 1px solid var(--color-brand-primary);
  color: var(--color-brand-primary);
}

.tertiary {
  background-color: transparent;
  color: var(--color-brand-primary);
}

/* Additional styles for sizes and states */
```

**After (HeroUI with Once UI styling):**

```tsx
// once-button.tsx
import React from 'react';
import { Button, ButtonProps } from "@heroui/react";

export interface OnceButtonProps extends Omit<ButtonProps, 'disableRipple'> {
  // Once UI specific props could be added here
}

export const OnceButton: React.FC<OnceButtonProps> = (props) => {
  // Map Once UI variants to HeroUI variants
  const getVariant = () => {
    if (props.variant === 'bordered') return 'bordered';
    if (props.variant === 'light') return 'light';
    return 'solid'; // default
  };

  return (
    <Button
      {...props}
      variant={getVariant()}
      radius="sm"
      disableRipple
      className={`font-medium transition-colors duration-200 ${props.className || ''}`}
    />
  );
};
```

### Step 4: Update Component Usage

Update your application to use the new HeroUI-based components:

**Before:**

```tsx
import { Button } from './components/Button';

<Button variant="primary" size="medium" onClick={handleClick}>
  Click Me
</Button>
```

**After:**

```tsx
import { OnceButton } from './components/once/once-button';

<OnceButton color="primary" size="md" onPress={handleClick}>
  Click Me
</OnceButton>
```

### Step 5: Migrate Form Components

Form components often require special attention during migration:

#### Example: Input Migration

**Before (CSS Modules):**

```tsx
// Input.tsx
import React from 'react';
import styles from './Input.module.css';

export interface InputProps {
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  required?: boolean;
  disabled?: boolean;
  type?: string;
}

export const Input: React.FC<InputProps> = ({
  label,
  placeholder,
  value,
  onChange,
  error,
  required = false,
  disabled = false,
  type = 'text',
}) => {
  return (
    <div className={styles.container}>
      {label && (
        <label className={styles.label}>
          {label}
          {required && <span className={styles.required}>*</span>}
        </label>
      )}
      <input
        type={type}
        className={`${styles.input} ${error ? styles.error : ''}`}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        required={required}
      />
      {error && <div className={styles.errorMessage}>{error}</div>}
    </div>
  );
};
```

**After (HeroUI with Once UI styling):**

```tsx
// once-input.tsx
import React from 'react';
import { Input, InputProps } from "@heroui/react";

export interface OnceInputProps extends InputProps {
  // Once UI specific props could be added here
}

export const OnceInput: React.FC<OnceInputProps> = (props) => {
  return (
    <Input
      {...props}
      radius="sm"
      variant="bordered"
      classNames={{
        base: "max-w-full",
        inputWrapper: "border-default-300 data-[hover=true]:border-primary transition-colors duration-200",
        label: "font-medium text-default-700",
        input: "text-default-800",
        ...props.classNames
      }}
    />
  );
};
```

### Step 6: Handle Custom Components

For custom components that don't have direct HeroUI equivalents:

1. Identify the closest HeroUI component
2. Extend it with additional functionality
3. Apply Once UI styling

#### Example: Custom Card with Image and Actions

```tsx
// once-card.tsx
import React from 'react';
import { Card, CardHeader, CardBody, CardFooter, CardProps, Image } from "@heroui/react";

export interface OnceCardProps extends Omit<CardProps, 'disableRipple'> {
  title?: React.ReactNode;
  image?: string;
  actions?: React.ReactNode;
}

export const OnceCard: React.FC<OnceCardProps> = ({ 
  title, 
  image, 
  actions, 
  children, 
  ...props 
}) => {
  return (
    <Card
      {...props}
      radius="sm"
      shadow="sm"
      className={`border border-default-200 ${props.className || ''}`}
      disableRipple
    >
      {image && (
        <Image
          removeWrapper
          alt="Card image"
          className="z-0 w-full h-48 object-cover"
          src={image}
        />
      )}
      
      {title && (
        <CardHeader className="font-medium text-lg">
          {title}
        </CardHeader>
      )}
      
      <CardBody>
        {children}
      </CardBody>
      
      {actions && (
        <CardFooter className="flex justify-end gap-2">
          {actions}
        </CardFooter>
      )}
    </Card>
  );
};
```

### Step 7: Update Theme Management

Replace your custom theme management with HeroUI's theme system:

**Before:**

```tsx
// ThemeProvider.tsx
import React, { createContext, useContext, useState, useEffect } from 'react';

type ThemeMode = 'light' | 'dark';

interface ThemeContextType {
  theme: ThemeMode;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<ThemeMode>('light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
```

**After:**

```tsx
// theme-switcher.tsx
import React from 'react';
import { Icon } from '@iconify/react';
import { Switch } from '@heroui/react';
import { useTheme } from "@heroui/use-theme";

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";
  
  const handleToggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <div className="flex items-center gap-2">
      <Icon icon={isDark ? "lucide:moon" : "lucide:sun"} className="text-default-500" />
      <Switch 
        size="sm" 
        color="primary" 
        isSelected={isDark}
        onValueChange={handleToggleTheme}
      />
    </div>
  );
};
```

### Step 8: Test and Refine

After migration:

1. Test all components in both light and dark modes
2. Verify that all interactions work as expected
3. Check for accessibility issues
4. Refine styling as needed to match the Once UI design system

## Common Challenges and Solutions

### Challenge: Event Handler Differences

HeroUI uses different event handler names than standard React components.

**Solution:**
- `onClick` → `onPress`
- `onChange` → `onValueChange` (for many form components)

### Challenge: Component Composition

HeroUI components often use a composition pattern that differs from traditional components.

**Solution:**
- Study the HeroUI documentation for each component
- Use the appropriate child components (e.g., Card with CardHeader, CardBody, CardFooter)

### Challenge: Styling Differences

HeroUI uses a different approach to styling than CSS Modules.

**Solution:**
- Use the `classNames` prop for component-specific styling
- Use Tailwind utility classes for additional styling
- Use the theme configuration for global styling

### Challenge: Form Validation

Form validation approaches may differ between your current implementation and HeroUI.

**Solution:**
- Use HeroUI's built-in validation props where possible
- For complex validation, create custom validation hooks

## Conclusion

Migrating from CSS Modules to HeroUI with Once UI styling offers significant benefits in terms of development speed, component quality, and maintainability. By following this guide, you can systematically convert your existing implementation while maintaining the Once UI design language.

Remember that migration can be done incrementally, allowing you to convert components one at a time while maintaining a functioning application.
