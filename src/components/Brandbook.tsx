
import React from "react";
import { OnceButton } from "@/components/ui/once-button";
import { Button } from "@/components/ui/button";
import { useOnceTheme } from "@/components/once-theme-provider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Moon, Sun } from "lucide-react";

const ButtonShowcase = () => {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-medium mb-4">Original Button Component</h3>
        <div className="flex flex-wrap gap-4">
          <Button variant="default">Default</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
        </div>
      </div>
      
      <div>
        <h3 className="text-lg font-medium mb-4">Once UI Button Variants</h3>
        <div className="flex flex-wrap gap-4">
          <OnceButton variant="primary">Primary</OnceButton>
          <OnceButton variant="secondary">Secondary</OnceButton>
          <OnceButton variant="tertiary">Tertiary</OnceButton>
          <OnceButton variant="ghost">Ghost</OnceButton>
          <OnceButton variant="link">Link</OnceButton>
        </div>
      </div>
      
      <div>
        <h3 className="text-lg font-medium mb-4">Once UI Button Sizes</h3>
        <div className="flex flex-wrap gap-4 items-center">
          <OnceButton size="sm">Small</OnceButton>
          <OnceButton size="md">Medium</OnceButton>
          <OnceButton size="lg">Large</OnceButton>
          <OnceButton size="xl">Extra Large</OnceButton>
        </div>
      </div>
    </div>
  );
};

const ColorShowcase = () => {
  return (
    <div className="space-y-6">
      <h3 className="text-lg font-medium mb-4">Primary Brand Colors</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="flex flex-col">
          <div className="h-20 bg-brand-primary rounded-md"></div>
          <p className="mt-2 text-sm">Brand Primary</p>
          <code className="text-xs text-muted-foreground">var(--color-brand-primary)</code>
        </div>
        <div className="flex flex-col">
          <div className="h-20 rounded-md" style={{backgroundColor: "var(--color-brand-primary-light)"}}></div>
          <p className="mt-2 text-sm">Brand Primary Light</p>
          <code className="text-xs text-muted-foreground">var(--color-brand-primary-light)</code>
        </div>
        <div className="flex flex-col">
          <div className="h-20 rounded-md" style={{backgroundColor: "var(--color-brand-primary-dark)"}}></div>
          <p className="mt-2 text-sm">Brand Primary Dark</p>
          <code className="text-xs text-muted-foreground">var(--color-brand-primary-dark)</code>
        </div>
      </div>

      <h3 className="text-lg font-medium mb-4 mt-8">Neutral Colors</h3>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {[100, 200, 300, 400, 500, 600, 700, 800, 900].map((weight) => (
          <div className="flex flex-col" key={weight}>
            <div 
              className={`h-20 rounded-md`} 
              style={{backgroundColor: `var(--color-neutral-${weight})`}}
            ></div>
            <p className="mt-2 text-sm">Neutral {weight}</p>
            <code className="text-xs text-muted-foreground">var(--color-neutral-{weight})</code>
          </div>
        ))}
      </div>
    </div>
  );
};

const TypographyShowcase = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-4xl font-bold">Heading 1</h1>
        <code className="text-xs text-muted-foreground">var(--font-size-3xl)</code>
      </div>
      <div>
        <h2 className="text-3xl font-bold">Heading 2</h2>
        <code className="text-xs text-muted-foreground">var(--font-size-2xl)</code>
      </div>
      <div>
        <h3 className="text-2xl font-bold">Heading 3</h3>
        <code className="text-xs text-muted-foreground">var(--font-size-xl)</code>
      </div>
      <div>
        <h4 className="text-xl font-semibold">Heading 4</h4>
        <code className="text-xs text-muted-foreground">var(--font-size-lg)</code>
      </div>
      <div>
        <h5 className="text-lg font-semibold">Heading 5</h5>
        <code className="text-xs text-muted-foreground">var(--font-size-md)</code>
      </div>
      <div>
        <h6 className="text-base font-semibold">Heading 6</h6>
        <code className="text-xs text-muted-foreground">var(--font-size-sm)</code>
      </div>
      <div className="mt-8">
        <p className="text-base">
          This is a paragraph with <strong>bold text</strong> and <em>italic text</em> and a{" "}
          <a href="#" className="text-brand-primary hover:underline">
            link
          </a>
          . The font family is Inter, a modern sans-serif typeface.
        </p>
        <code className="text-xs text-muted-foreground">var(--font-size-md), var(--font-family-primary)</code>
      </div>
    </div>
  );
};

const SpacingShowcase = () => {
  return (
    <div className="space-y-6">
      <h3 className="text-lg font-medium mb-4">Spacing Scale</h3>
      <div className="space-y-4">
        {["xs", "sm", "md", "lg", "xl", "2xl", "3xl"].map((size) => (
          <div key={size} className="flex items-center">
            <div className="w-16">
              <code className="text-xs">{size}</code>
            </div>
            <div 
              className="h-4 bg-brand-primary"
              style={{ width: `var(--spacing-${size})` }}
            ></div>
            <code className="ml-4 text-xs text-muted-foreground">
              var(--spacing-{size})
            </code>
          </div>
        ))}
      </div>
    </div>
  );
};

const CardShowcase = () => {
  const { toggleTheme } = useOnceTheme();

  return (
    <div className="space-y-8">
      <h3 className="text-lg font-medium mb-4">Once UI Cards</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="once-card">
          <div className="once-card-header">
            <h3 className="once-card-title">Once UI Card</h3>
          </div>
          <p>This card uses Once UI utility classes for styling.</p>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>Shadcn Card</CardTitle>
            <CardDescription>Standard shadcn/ui card component</CardDescription>
          </CardHeader>
          <CardContent>
            <p>This is the content of the card using shadcn/ui.</p>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline">Cancel</Button>
            <Button>Submit</Button>
          </CardFooter>
        </Card>
        
        <div className="once-card">
          <div className="once-card-header">
            <h3 className="once-card-title">Theme Switcher</h3>
          </div>
          <div className="flex items-center justify-between mt-4">
            <p>Toggle between light and dark mode</p>
            <Button variant="outline" size="icon" onClick={toggleTheme}>
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </div>
        </div>
        
        <div className="once-card">
          <div className="once-card-header">
            <h3 className="once-card-title">Form Example</h3>
          </div>
          <div className="space-y-4 mt-4">
            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <Input id="username" placeholder="Enter your username" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" placeholder="Enter your password" />
            </div>
            <OnceButton className="w-full">Sign In</OnceButton>
          </div>
        </div>
      </div>
    </div>
  );
};

const Brandbook = () => {
  return (
    <div className="container mx-auto py-10">
      <div className="flex justify-between items-center mb-10">
        <div>
          <h1 className="text-3xl font-bold mb-2">Once UI Design System</h1>
          <p className="text-muted-foreground">
            Integration with shadcn/ui and Tailwind CSS
          </p>
        </div>
      </div>
      
      <Tabs defaultValue="buttons">
        <TabsList className="mb-6">
          <TabsTrigger value="buttons">Buttons</TabsTrigger>
          <TabsTrigger value="colors">Colors</TabsTrigger>
          <TabsTrigger value="typography">Typography</TabsTrigger>
          <TabsTrigger value="spacing">Spacing</TabsTrigger>
          <TabsTrigger value="cards">Cards</TabsTrigger>
        </TabsList>
        <TabsContent value="buttons">
          <ButtonShowcase />
        </TabsContent>
        <TabsContent value="colors">
          <ColorShowcase />
        </TabsContent>
        <TabsContent value="typography">
          <TypographyShowcase />
        </TabsContent>
        <TabsContent value="spacing">
          <SpacingShowcase />
        </TabsContent>
        <TabsContent value="cards">
          <CardShowcase />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Brandbook;
