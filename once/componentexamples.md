# Once UI Component Examples

This document provides examples of how to use the Once UI component wrappers in your application.

## Basic Components

### Button

```tsx
import { OnceButton } from './components/once/once-button';
import { Icon } from '@iconify/react';

// Standard buttons
<OnceButton variant="solid" color="primary">Primary</OnceButton>
<OnceButton variant="bordered" color="primary">Secondary</OnceButton>
<OnceButton variant="light" color="primary">Tertiary</OnceButton>
<OnceButton variant="solid" color="danger">Danger</OnceButton>
<OnceButton variant="solid" isDisabled>Disabled</OnceButton>

// Button sizes
<OnceButton size="sm" variant="solid" color="primary">Small</OnceButton>
<OnceButton size="md" variant="solid" color="primary">Medium</OnceButton>
<OnceButton size="lg" variant="solid" color="primary">Large</OnceButton>

// Icon buttons
<OnceButton 
  variant="solid" 
  color="primary" 
  startContent={<Icon icon="lucide:plus" />}
>
  Add Item
</OnceButton>

<OnceButton 
  variant="bordered" 
  color="primary" 
  endContent={<Icon icon="lucide:arrow-right" />}
>
  Next
</OnceButton>

<OnceButton 
  isIconOnly 
  variant="solid" 
  color="primary" 
  aria-label="Like"
>
  <Icon icon="lucide:heart" />
</OnceButton>
```

### Input

```tsx
import { OnceInput } from './components/once/once-input';
import { Icon } from '@iconify/react';

// Standard input
<OnceInput label="Default Input" placeholder="Enter text" />

// Input with icon
<OnceInput 
  label="With Icon" 
  placeholder="Search..." 
  startContent={<Icon icon="lucide:search" className="text-default-400" />} 
/>

// Required input
<OnceInput 
  label="Required Field" 
  placeholder="Enter email" 
  isRequired 
/>

// Disabled input
<OnceInput 
  label="Disabled Input" 
  placeholder="Cannot edit" 
  isDisabled 
/>

// Input with error
<OnceInput 
  label="With Error" 
  placeholder="Enter text" 
  isInvalid 
  errorMessage="This field is required" 
/>

// Input with helper text
<OnceInput 
  label="With Helper Text" 
  placeholder="Enter password" 
  type="password" 
  description="Password must be at least 8 characters" 
/>
```

### Select

```tsx
import { OnceSelect } from './components/once/once-select';
import { SelectItem } from '@heroui/react';

// Standard select
<OnceSelect 
  label="Default Select" 
  placeholder="Choose an option"
>
  <SelectItem key="option1" value="option1">Option 1</SelectItem>
  <SelectItem key="option2" value="option2">Option 2</SelectItem>
  <SelectItem key="option3" value="option3">Option 3</SelectItem>
</OnceSelect>

// Disabled select
<OnceSelect 
  label="Disabled Select" 
  placeholder="Cannot select" 
  isDisabled
>
  <SelectItem key="option1" value="option1">Option 1</SelectItem>
  <SelectItem key="option2" value="option2">Option 2</SelectItem>
</OnceSelect>
```

### Checkbox

```tsx
import { OnceCheckbox } from './components/once/once-checkbox';

<OnceCheckbox defaultSelected>Default Checkbox</OnceCheckbox>
<OnceCheckbox>Unchecked Checkbox</OnceCheckbox>
<OnceCheckbox isDisabled>Disabled Checkbox</OnceCheckbox>
<OnceCheckbox isIndeterminate>Indeterminate Checkbox</OnceCheckbox>
```

### Radio

```tsx
import { OnceRadio, OnceRadioGroup } from './components/once/once-radio';

<OnceRadioGroup label="Select an option" defaultValue="option1">
  <OnceRadio value="option1">Option 1</OnceRadio>
  <OnceRadio value="option2">Option 2</OnceRadio>
  <OnceRadio value="option3" isDisabled>Option 3 (Disabled)</OnceRadio>
</OnceRadioGroup>
```

## Layout Components

### Card

```tsx
import { OnceCard } from './components/once/once-card';
import { OnceButton } from './components/once/once-button';

// Basic card
<OnceCard title="Basic Card">
  <p>This is a basic card with just some text content.</p>
</OnceCard>

// Card with actions
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

// Card with image
<OnceCard 
  title="Card with Image" 
  image="https://img.heroui.chat/image/places?w=600&h=400&u=1"
>
  <p>This card includes an image at the top.</p>
</OnceCard>
```

## Feedback Components

### Tooltip

```tsx
import { OnceTooltip } from './components/once/once-tooltip';
import { OnceButton } from './components/once/once-button';

<OnceTooltip content="Default tooltip">
  <OnceButton variant="bordered">Hover me</OnceButton>
</OnceTooltip>

<OnceTooltip content="Primary tooltip" color="primary">
  <OnceButton variant="bordered" color="primary">Primary</OnceButton>
</OnceTooltip>

<OnceTooltip content="Success tooltip" color="success">
  <OnceButton variant="bordered" color="success">Success</OnceButton>
</OnceTooltip>
```

### Badge

```tsx
import { OnceBadge } from './components/once/once-badge';
import { OnceButton } from './components/once/once-button';

// Badge with content
<OnceBadge content="New">
  <OnceButton variant="bordered">Notifications</OnceButton>
</OnceBadge>

<OnceBadge content="5" color="primary">
  <OnceButton variant="bordered">Messages</OnceButton>
</OnceBadge>

<OnceBadge content="99+" color="danger">
  <OnceButton variant="bordered">Alerts</OnceButton>
</OnceBadge>

// Standalone badges
<OnceBadge content="Default" variant="flat" />
<OnceBadge content="Primary" color="primary" variant="flat" />
<OnceBadge content="Success" color="success" variant="flat" />
<OnceBadge content="Warning" color="warning" variant="flat" />
<OnceBadge content="Danger" color="danger" variant="flat" />
```

### Alert

```tsx
import { OnceAlert } from './components/once/once-alert';

<OnceAlert 
  title="Success" 
  description="Your changes have been saved successfully." 
  color="success"
/>

<OnceAlert 
  title="Warning" 
  description="Please review your information before continuing." 
  color="warning"
/>

<OnceAlert 
  title="Error" 
  description="There was a problem processing your request." 
  color="danger"
/>
```

## Advanced Components

### Accordion

```tsx
import { OnceAccordion, OnceAccordionItem } from './components/once/once-accordion';

<OnceAccordion>
  <OnceAccordionItem key="1" title="Section 1">
    <p>Content for section 1</p>
  </OnceAccordionItem>
  <OnceAccordionItem key="2" title="Section 2">
    <p>Content for section 2</p>
  </OnceAccordionItem>
  <OnceAccordionItem key="3" title="Section 3">
    <p>Content for section 3</p>
  </OnceAccordionItem>
</OnceAccordion>
```

### Progress

```tsx
import { OnceProgress } from './components/once/once-progress';

<OnceProgress value={30} />
<OnceProgress value={50} color="primary" />
<OnceProgress value={75} color="success" />
<OnceProgress value={100} color="danger" />
```

## Form Layout Example

```tsx
import { OnceInput } from './components/once/once-input';
import { OnceSelect } from './components/once/once-select';
import { OnceCheckbox } from './components/once/once-checkbox';
import { OnceButton } from './components/once/once-button';
import { SelectItem } from '@heroui/react';

<form className="space-y-6 max-w-md">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <OnceInput 
      label="First Name" 
      placeholder="Enter first name" 
      isRequired 
    />
    <OnceInput 
      label="Last Name" 
      placeholder="Enter last name" 
      isRequired 
    />
  </div>
  
  <OnceInput 
    label="Email" 
    placeholder="Enter email address" 
    type="email"
    isRequired 
  />
  
  <OnceSelect 
    label="Country" 
    placeholder="Select your country"
  >
    <SelectItem key="us" value="us">United States</SelectItem>
    <SelectItem key="ca" value="ca">Canada</SelectItem>
    <SelectItem key="uk" value="uk">United Kingdom</SelectItem>
    <SelectItem key="au" value="au">Australia</SelectItem>
  </OnceSelect>
  
  <OnceCheckbox>I agree to the terms and conditions</OnceCheckbox>
  
  <div className="flex justify-end gap-2">
    <OnceButton variant="flat">Cancel</OnceButton>
    <OnceButton color="primary">Submit</OnceButton>
  </div>
</form>
```

## Dashboard Layout Example

```tsx
import { OnceCard } from './components/once/once-card';
import { OnceButton } from './components/once/once-button';
import { OnceInput } from './components/once/once-input';
import { OnceProgress } from './components/once/once-progress';
import { Icon } from '@iconify/react';

<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
  <OnceCard title="Total Users">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-3xl font-bold">1,234</p>
        <p className="text-default-500">+12% from last month</p>
      </div>
      <div className="p-3 bg-primary-100 rounded-full">
        <Icon icon="lucide:users" className="text-primary text-xl" />
      </div>
    </div>
  </OnceCard>
  
  <OnceCard title="Revenue">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-3xl font-bold">$12,345</p>
        <p className="text-default-500">+8% from last month</p>
      </div>
      <div className="p-3 bg-success-100 rounded-full">
        <Icon icon="lucide:dollar-sign" className="text-success text-xl" />
      </div>
    </div>
  </OnceCard>
  
  <OnceCard title="Active Projects">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-3xl font-bold">42</p>
        <p className="text-default-500">+3 new this week</p>
      </div>
      <div className="p-3 bg-warning-100 rounded-full">
        <Icon icon="lucide:briefcase" className="text-warning text-xl" />
      </div>
    </div>
  </OnceCard>
  
  <OnceCard title="Project Status" className="md:col-span-2">
    <div className="space-y-4">
      <div>
        <div className="flex justify-between mb-1">
          <span>Website Redesign</span>
          <span>75%</span>
        </div>
        <OnceProgress value={75} color="primary" />
      </div>
      <div>
        <div className="flex justify-between mb-1">
          <span>Mobile App</span>
          <span>45%</span>
        </div>
        <OnceProgress value={45} color="warning" />
      </div>
      <div>
        <div className="flex justify-between mb-1">
          <span>Database Migration</span>
          <span>90%</span>
        </div>
        <OnceProgress value={90} color="success" />
      </div>
    </div>
  </OnceCard>
  
  <OnceCard title="Quick Actions">
    <div className="flex flex-col gap-2">
      <OnceButton 
        color="primary" 
        startContent={<Icon icon="lucide:plus" />}
      >
        New Project
      </OnceButton>
      <OnceButton 
        variant="bordered" 
        color="primary" 
        startContent={<Icon icon="lucide:users" />}
      >
        Invite Team
      </OnceButton>
      <OnceButton 
        variant="light" 
        color="primary" 
        startContent={<Icon icon="lucide:settings" />}
      >
        Settings
      </OnceButton>
    </div>
  </OnceCard>
</div>
```

These examples demonstrate how to use the Once UI component wrappers in various scenarios. You can customize them further to match your specific requirements.
