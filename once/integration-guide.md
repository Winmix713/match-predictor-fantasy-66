# Comprehensive Guide: Integrating Once UI with HeroUI in a Vite React Application

## Introduction

This guide provides detailed instructions for implementing the Once UI design system in a Vite-based React application using HeroUI components. By following these steps, you'll create a consistent design system that bridges the gap between your Figma designs and your development environment.

## Table of Contents

1. [Understanding Once UI Design System](#1-understanding-once-ui-design-system)
2. [Setting Up Your Vite Project](#2-setting-up-your-vite-project)
3. [Configuring HeroUI with Once UI Theme](#3-configuring-heroui-with-once-ui-theme)
4. [Creating Component Wrappers](#4-creating-component-wrappers)
5. [Building a Component Library](#5-building-a-component-library)
6. [Theme Management](#6-theme-management)
7. [Advanced Component Implementation](#7-advanced-component-implementation)
8. [Responsive Design](#8-responsive-design)
9. [Testing and Validation](#9-testing-and-validation)
10. [Documentation with Storybook](#10-documentation-with-storybook)

## 1. Understanding Once UI Design System

Before implementation, familiarize yourself with the Once UI design system:

- **Design Tokens**: Colors, typography, spacing, shadows, and other foundational elements
- **Component Patterns**: Structure, variants, states, and interactions
- **Design Principles**: Consistency, accessibility, and responsiveness

Review the Figma files thoroughly to understand:
- Color schemes and how they translate between light and dark modes
- Typography scales and font choices
- Component variants and states
- Spacing and layout systems

## 2. Setting Up Your Vite Project

Create a new Vite project with React and TypeScript:

```bash
# Create a new Vite project
npm create vite@latest my-once-ui-app --template react-ts

# Navigate to your project directory
cd my-once-ui-app

# Install HeroUI and other dependencies
npm install @heroui/react @heroui/use-theme @iconify/react framer-motion
```

Set up the basic project structure:

```
my-once-ui-app/
├── src/
│   ├── components/
│   │   └── once/
│   │       ├── once-button.tsx
│   │       ├── once-input.tsx
│   │       └── ...
│   ├── styles/
│   │   └── index.css
│   ├── App.tsx
│   └── main.tsx
├── tailwind.config.js
└── package.json
```

## 3. Configuring HeroUI with Once UI Theme

The key to implementing Once UI with HeroUI is proper theme configuration in `tailwind.config.js`:

```javascript
import { heroui } from "@heroui/react";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  darkMode: "class",
  plugins: [
    heroui({
      layout: {
        // Once UI layout specifications
        dividerWeight: "1px", 
        fontSize: {
          tiny: "0.75rem",   // 12px
          small: "0.875rem", // 14px
          medium: "1rem",    // 16px
          large: "1.125rem", // 18px
        },
        lineHeight: {
          tiny: "1rem",      // 16px
          small: "1.25rem",  // 20px
          medium: "1.5rem",  // 24px
          large: "1.75rem",  // 28px
        },
        radius: {
          small: "4px", 
          medium: "6px", 
          large: "8px", 
        },
        borderWidth: {
          small: "1px", 
          medium: "1px", 
          large: "1px", 
        },
      },
      themes: {
        light: {
          colors: {
            // Once UI light theme colors
            background: "#FFFFFF",
            foreground: "#2A1A45",
            focus: "#4285F4",
            // Content surfaces
            content1: {
              DEFAULT: "#FFFFFF",
              foreground: "#2A1A45"
            },
            content2: {
              DEFAULT: "#F8F9FA", 
              foreground: "#2A1A45"
            },
            // Semantic colors
            primary: {
              50: "#E8F0FE",
              100: "#D2E3FC",
              200: "#A5C8FF",
              300: "#7BAAF7",
              400: "#5E97F6",
              500: "#4285F4", // Once UI primary blue
              600: "#3B78E7",
              700: "#3367D6",
              800: "#2A56C6",
              900: "#1C3AA9",
              DEFAULT: "#4285F4",
              foreground: "#FFFFFF"
            },
            // Additional color scales...
          }
        },
        dark: {
          colors: {
            // Once UI dark theme colors
            background: "#202124",
            foreground: "#E8EAED",
            focus: "#8AB4F8",
            // Content surfaces
            content1: {
              DEFAULT: "#2A2A2D",
              foreground: "#E8EAED"
            },
            content2: {
              DEFAULT: "#35363A", 
              foreground: "#E8EAED"
            },
            // Semantic colors
            primary: {
              50: "#0D2249",
              100: "#174EA6",
              200: "#185ABC",
              300: "#1967D2",
              400: "#1A73E8",
              500: "#8AB4F8", // Once UI primary in dark mode
              600: "#AECBFA",
              700: "#D2E3FC",
              800: "#E8F0FE",
              900: "#F8FAFF",
              DEFAULT: "#8AB4F8",
              foreground: "#202124"
            },
            // Additional color scales...
          }
        }
      }
    })
  ]
}
```

Import the Inter font in your `src/index.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html {
    font-family: 'Inter', sans-serif;
  }
}
```

## 4. Creating Component Wrappers

Create wrapper components that apply Once UI styling to HeroUI components. This approach allows you to:

1. Maintain consistent styling across your application
2. Apply Once UI-specific defaults
3. Add custom functionality if needed

Example of a button wrapper:

```tsx
// src/components/once/once-button.tsx
import React from 'react';
import { Button, ButtonProps } from "@heroui/react";

export interface OnceButtonProps extends Omit<ButtonProps, 'disableRipple'> {
  // Once UI specific props could be added here
}

export const OnceButton: React.FC<OnceButtonProps> = (props) => {
  return (
    <Button
      {...props}
      // Apply Once UI specific defaults
      radius="sm"
      disableRipple
      className={`font-medium transition-colors duration-200 ${props.className || ''}`}
    />
  );
};
```

Example of an input wrapper:

```tsx
// src/components/once/once-input.tsx
import React from 'react';
import { Input, InputProps } from "@heroui/react";

export interface OnceInputProps extends InputProps {
  // Once UI specific props could be added here
}

export const OnceInput: React.FC<OnceInputProps> = (props) => {
  return (
    <Input
      {...props}
      // Apply Once UI specific defaults
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

## 5. Building a Component Library

Create wrapper components for all Once UI components you need. Here's a list of essential components to implement:

1. **Basic Components**
   - Button
   - Input
   - Checkbox
   - Radio
   - Select
   - Switch

2. **Layout Components**
   - Card
   - Divider
   - Grid/Container

3. **Feedback Components**
   - Alert
   - Badge
   - Progress
   - Tooltip

4. **Navigation Components**
   - Tabs
   - Breadcrumbs
   - Pagination

5. **Overlay Components**
   - Modal
   - Drawer
   - Popover

For each component:
1. Study the Once UI design in Figma
2. Identify the appropriate HeroUI component to wrap
3. Apply Once UI styling through props and classNames
4. Add any additional functionality needed

## 6. Theme Management

Implement theme switching using HeroUI's theme management:

```tsx
// src/components/theme-switcher.tsx
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

Set up your main application with theme support:

```tsx
// src/main.tsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import { HeroUIProvider, ToastProvider } from "@heroui/react"
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HeroUIProvider>
      <ToastProvider />
      <App />
    </HeroUIProvider>
  </React.StrictMode>,
)
```

## 7. Advanced Component Implementation

For more complex components, you may need to combine multiple HeroUI components or add custom logic.

Example of a card component with title, image, and actions:

```tsx
// src/components/once/once-card.tsx
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

## 8. Responsive Design

Implement responsive design using Tailwind's responsive utilities:

1. Use responsive class variants (`sm:`, `md:`, `lg:`, `xl:`) for different screen sizes
2. Create responsive layouts with Tailwind's grid and flex utilities
3. Use HeroUI's responsive props where available

Example of responsive component usage:

```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  <OnceCard title="Basic Card">
    <p>This is a basic card with just some text content.</p>
  </OnceCard>
  
  <OnceCard 
    title="Card with Actions" 
    actions={
      <div className="flex gap-2">
        <OnceButton size="sm" variant="flat">Cancel</OnceButton>
        <OnceButton size="sm" color="primary">Save</OnceButton>
      </div>
    }
  >
    <p>This card includes action buttons in the footer.</p>
  </OnceCard>
  
  <OnceCard 
    title="Card with Image" 
    image="https://img.heroui.chat/image/places?w=600&h=400&u=1"
  >
    <p>This card includes an image at the top.</p>
  </OnceCard>
</div>
```

## 9. Testing and Validation

Set up testing for your components to ensure they meet Once UI specifications:

1. Install testing libraries:

```bash
npm install --save-dev @testing-library/react @testing-library/jest-dom vitest
```

2. Create test files for your components:

```tsx
// src/components/once/once-button.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { OnceButton } from './once-button';

describe('OnceButton', () => {
  test('renders correctly with default props', () => {
    render(<OnceButton>Click me</OnceButton>);
    
    const button = screen.getByRole('button', { name: /click me/i });
    expect(button).toBeInTheDocument();
  });
  
  test('applies color and variant classes', () => {
    render(<OnceButton color="primary" variant="bordered">Click me</OnceButton>);
    
    const button = screen.getByRole('button', { name: /click me/i });
    // Check for appropriate classes based on your implementation
  });
  
  test('handles disabled state', () => {
    render(<OnceButton isDisabled>Click me</OnceButton>);
    
    const button = screen.getByRole('button', { name: /click me/i });
    expect(button).toBeDisabled();
  });
  
  test('calls onPress handler when clicked', () => {
    const handlePress = vi.fn();
    render(<OnceButton onPress={handlePress}>Click me</OnceButton>);
    
    const button = screen.getByRole('button', { name: /click me/i });
    fireEvent.click(button);
    
    expect(handlePress).toHaveBeenCalledTimes(1);
  });
});
```

## 10. Documentation with Storybook

Create comprehensive documentation for your Once UI implementation using Storybook:

1. Install Storybook:

```bash
npx storybook init
```

2. Create stories for your components:

```tsx
// src/components/once/once-button.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { OnceButton } from './once-button';

const meta: Meta<typeof OnceButton> = {
  title: 'Once UI/Button',
  component: OnceButton,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['solid', 'bordered', 'light', 'flat', 'faded', 'shadow', 'ghost'],
    },
    color: {
      control: { type: 'select' },
      options: ['default', 'primary', 'secondary', 'success', 'warning', 'danger'],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    isDisabled: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof OnceButton>;

export const Primary: Story = {
  args: {
    children: 'Button',
    color: 'primary',
    variant: 'solid',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Button',
    color: 'primary',
    variant: 'bordered',
  },
};

export const Tertiary: Story = {
  args: {
    children: 'Button',
    color: 'primary',
    variant: 'light',
  },
};

export const Small: Story = {
  args: {
    children: 'Button',
    color: 'primary',
    size: 'sm',
  },
};

export const Large: Story = {
  args: {
    children: 'Button',
    color: 'primary',
    size: 'lg',
  },
};

export const Disabled: Story = {
  args: {
    children: 'Button',
    color: 'primary',
    isDisabled: true,
  },
};
```

## Conclusion

By following this guide, you've successfully integrated the Once UI design system into your Vite-based React application using HeroUI components. This approach gives you:

1. **Design Consistency**: A unified look and feel that matches the Once UI design system
2. **Development Efficiency**: Leveraging HeroUI's component library while maintaining Once UI's design language
3. **Maintainability**: A structured approach to component development with proper theming
4. **Scalability**: A foundation that can grow with your application's needs

Remember to:
- Keep your theme configuration synchronized with Once UI design updates
- Document component usage and variations
- Test components against design specifications
- Maintain accessibility standards

This integration creates a seamless bridge between design and development, making it easier to build and maintain applications with the Once UI design system.
