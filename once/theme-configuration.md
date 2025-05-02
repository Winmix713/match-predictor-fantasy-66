# Once UI Theme Configuration Guide

This guide explains how to configure the Once UI theme in your HeroUI-based application.

## Understanding Theme Structure

HeroUI's theme system is based on Tailwind CSS and can be customized through the `tailwind.config.js` file. The theme configuration consists of:

1. **Layout Properties**: Controls spacing, sizing, and other layout-related aspects
2. **Color Schemes**: Defines the color palette for both light and dark modes
3. **Typography**: Sets font families, sizes, weights, and line heights
4. **Component-Specific Styling**: Applied through component wrappers

## Base Configuration

Here's the base configuration for implementing Once UI's theme:

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
      // Theme configuration goes here
    })
  ]
}
```

## Layout Configuration

The layout section controls the fundamental aspects of your UI:

```javascript
layout: {
  dividerWeight: "1px", 
  disabledOpacity: 0.5, 
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
```

## Color Scheme Configuration

The color scheme defines the palette for your application. Once UI uses specific colors that need to be mapped to HeroUI's theme structure:

### Light Theme

```javascript
light: {
  colors: {
    // Base colors
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
    content3: {
      DEFAULT: "#F1F3F4", 
      foreground: "#2A1A45"
    },
    content4: {
      DEFAULT: "#E8EAED", 
      foreground: "#2A1A45"
    },
    
    // Neutral colors
    default: {
      50: "#F8F9FA",
      100: "#F1F3F4",
      200: "#E8EAED",
      300: "#DEE1E6",
      400: "#BDC1C6",
      500: "#9AA0A6",
      600: "#80868B",
      700: "#5F6368",
      800: "#3C4043",
      900: "#202124",
      DEFAULT: "#5F6368",
      foreground: "#FFFFFF"
    },
    
    // Primary colors
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
    
    // Secondary colors
    secondary: {
      50: "#F3EEFA",
      100: "#E8DEF8",
      200: "#D0BFF0",
      300: "#B69DF8",
      400: "#9D7BF4",
      500: "#7B1FA2", // Once UI secondary
      600: "#6200EA",
      700: "#5600E8",
      800: "#4A00E0",
      900: "#3700B3",
      DEFAULT: "#7B1FA2",
      foreground: "#FFFFFF"
    },
    
    // Success colors
    success: {
      50: "#E6F4EA",
      100: "#CEEAD6",
      200: "#A8DAB5",
      300: "#81C995",
      400: "#5BB974",
      500: "#34A853", // Once UI success
      600: "#1E8E3E",
      700: "#188038",
      800: "#137333",
      900: "#0D652D",
      DEFAULT: "#34A853",
      foreground: "#FFFFFF"
    },
    
    // Warning colors
    warning: {
      50: "#FEF7E0",
      100: "#FEEFC3",
      200: "#FDE293",
      300: "#FDD663",
      400: "#FCC934",
      500: "#FBBC04", // Once UI warning
      600: "#F9AB00",
      700: "#F29900",
      800: "#EA8600",
      900: "#E37400",
      DEFAULT: "#FBBC04",
      foreground: "#2A1A45"
    },
    
    // Danger colors
    danger: {
      50: "#FCE8E6",
      100: "#FADAD9",
      200: "#F6AEAB",
      300: "#F28B82",
      400: "#EA4335", // Once UI danger
      500: "#D93025",
      600: "#C5221F",
      700: "#B31412",
      800: "#A50E0E",
      900: "#8C1D18",
      DEFAULT: "#EA4335",
      foreground: "#FFFFFF"
    }
  }
},
```

### Dark Theme

```javascript
dark: {
  colors: {
    // Base colors
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
    content3: {
      DEFAULT: "#3C4043", 
      foreground: "#E8EAED"
    },
    content4: {
      DEFAULT: "#5F6368", 
      foreground: "#E8EAED"
    },
    
    // Neutral colors
    default: {
      50: "#202124",
      100: "#3C4043",
      200: "#5F6368",
      300: "#80868B",
      400: "#9AA0A6",
      500: "#BDC1C6",
      600: "#DEE1E6",
      700: "#E8EAED",
      800: "#F1F3F4",
      900: "#F8F9FA",
      DEFAULT: "#BDC1C6",
      foreground: "#202124"
    },
    
    // Primary colors
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
    
    // Secondary colors
    secondary: {
      50: "#2A1A45",
      100: "#3700B3",
      200: "#4A00E0",
      300: "#5600E8",
      400: "#6200EA",
      500: "#B69DF8", // Once UI secondary in dark mode
      600: "#D0BFF0",
      700: "#E8DEF8",
      800: "#F3EEFA",
      900: "#F9F5FF",
      DEFAULT: "#B69DF8",
      foreground: "#202124"
    },
    
    // Success colors
    success: {
      50: "#0D652D",
      100: "#137333",
      200: "#188038",
      300: "#1E8E3E",
      400: "#34A853",
      500: "#81C995", // Once UI success in dark mode
      600: "#A8DAB5",
      700: "#CEEAD6",
      800: "#E6F4EA",
      900: "#F4FBF6",
      DEFAULT: "#81C995",
      foreground: "#202124"
    },
    
    // Warning colors
    warning: {
      50: "#E37400",
      100: "#EA8600",
      200: "#F29900",
      300: "#F9AB00",
      400: "#FBBC04",
      500: "#FDE293", // Once UI warning in dark mode
      600: "#FEEFC3",
      700: "#FEF7E0",
      800: "#FFFBF0",
      900: "#FFFDF5",
      DEFAULT: "#FDE293",
      foreground: "#202124"
    },
    
    // Danger colors
    danger: {
      50: "#8C1D18",
      100: "#A50E0E",
      200: "#B31412",
      300: "#C5221F",
      400: "#D93025",
      500: "#F28B82", // Once UI danger in dark mode
      600: "#F6AEAB",
      700: "#FADAD9",
      800: "#FCE8E6",
      900: "#FEF3F2",
      DEFAULT: "#F28B82",
      foreground: "#202124"
    }
  }
},
```

## Color Usage Guidelines

Once UI uses specific colors for different purposes:

1. **Primary Color**: Used for primary actions, links, and highlighting important elements
   - Light mode: #4285F4
   - Dark mode: #8AB4F8

2. **Secondary Color**: Used for secondary actions and complementary elements
   - Light mode: #7B1FA2
   - Dark mode: #B69DF8

3. **Success Color**: Used for success messages and positive actions
   - Light mode: #34A853
   - Dark mode: #81C995

4. **Warning Color**: Used for warnings and cautionary messages
   - Light mode: #FBBC04
   - Dark mode: #FDE293

5. **Danger Color**: Used for errors and destructive actions
   - Light mode: #EA4335
   - Dark mode: #F28B82

6. **Neutral Colors**: Used for text, backgrounds, and borders
   - Light mode: Various shades from #F8F9FA to #202124
   - Dark mode: Various shades from #202124 to #F8F9FA

## Typography Configuration

Once UI uses the Inter font family. Add it to your project by:

1. Importing it in your CSS:

```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
```

2. Setting it as the default font in Tailwind:

```javascript
theme: {
  extend: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },
  },
},
```

## Component-Specific Theming

For component-specific styling, use the `classNames` prop in your component wrappers:

```tsx
// Example for OnceInput
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
```

## Theme Switching

To implement theme switching, use HeroUI's theme management:

```tsx
import { useTheme } from "@heroui/use-theme";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";
  
  const handleToggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <Switch 
      isSelected={isDark}
      onValueChange={handleToggleTheme}
    />
  );
};
```

## Best Practices

1. **Consistency**: Use the defined color palette consistently throughout your application
2. **Accessibility**: Ensure sufficient contrast between text and background colors
3. **Semantic Usage**: Use colors according to their semantic meaning (e.g., danger for destructive actions)
4. **Dark Mode Consideration**: Test your components in both light and dark modes
5. **Component Defaults**: Set appropriate defaults in your component wrappers to maintain consistency

By following these guidelines, you'll create a cohesive UI that aligns with the Once UI design system while leveraging the power of HeroUI components.
