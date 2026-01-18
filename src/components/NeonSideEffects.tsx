import { useTheme } from '../contexts/ThemeContext';

export default function NeonSideEffects() {
  const { theme } = useTheme();

  // Define colors for light and dark themes
  const colors = theme === 'dark' 
    ? {
        // Dark mode: Cyan/Blue neon
        primary: 'rgba(243, 20, 20, 0.5)',
        secondary: 'rgba(243, 20, 20, 0.15)',
        tertiary: 'rgba(253, 152, 0, 0.9)',
        bright: 'rgba(253, 152, 0, 1)',
        dark: 'rgba(248, 168, 20, 0.6)',
      }
    : {
        // Light mode: Red/Orange neon (from dark theme colors)
        primary: 'rgba(6, 182, 212, 0.5)',
        secondary: 'rgba(6, 182, 212, 0.15)',
        tertiary: 'rgba(34, 211, 238, 0.9)',
        bright: 'rgba(34, 211, 238, 1)',
        dark: 'rgba(6, 182, 212, 0.6)',
      };

  return (
    <>
      {/* Left Side Neon Effect - Multiple layers for depth */}
      <div 
        className="fixed left-0 top-0 bottom-0 w-40 pointer-events-none z-0"
        style={{
          background: `linear-gradient(to right, ${colors.primary}, ${colors.secondary}, transparent)`,
          filter: 'blur(50px)',
          transform: 'translateX(-50%)',
        }}
      />
      <div 
        className="fixed left-0 top-0 bottom-0 w-28 pointer-events-none z-0"
        style={{
          background: `linear-gradient(to right, ${colors.primary.replace('0.5', '0.7')}, ${colors.secondary.replace('0.15', '0.25')}, transparent)`,
          filter: 'blur(35px)',
          transform: 'translateX(-35%)',
        }}
      />
      <div 
        className="fixed left-0 top-0 bottom-0 w-12 pointer-events-none z-0"
        style={{
          background: `linear-gradient(to right, ${colors.tertiary}, ${colors.dark}, transparent)`,
          filter: 'blur(25px)',
          transform: 'translateX(-25%)',
        }}
      />
      {/* Brightest inner core */}
      <div 
        className="fixed left-0 top-0 bottom-0 w-4 pointer-events-none z-0"
        style={{
          background: `linear-gradient(to right, ${colors.bright}, ${colors.dark}, transparent)`,
          filter: 'blur(15px)',
          transform: 'translateX(-15%)',
        }}
      />

      {/* Right Side Neon Effect - Multiple layers for depth */}
      <div 
        className="fixed right-0 top-0 bottom-0 w-40 pointer-events-none z-0"
        style={{
          background: `linear-gradient(to left, ${colors.primary}, ${colors.secondary}, transparent)`,
          filter: 'blur(50px)',
          transform: 'translateX(50%)',
        }}
      />
      <div 
        className="fixed right-0 top-0 bottom-0 w-28 pointer-events-none z-0"
        style={{
          background: `linear-gradient(to left, ${colors.primary.replace('0.5', '0.7')}, ${colors.secondary.replace('0.15', '0.25')}, transparent)`,
          filter: 'blur(35px)',
          transform: 'translateX(35%)',
        }}
      />
      <div 
        className="fixed right-0 top-0 bottom-0 w-12 pointer-events-none z-0"
        style={{
          background: `linear-gradient(to left, ${colors.tertiary}, ${colors.dark}, transparent)`,
          filter: 'blur(25px)',
          transform: 'translateX(25%)',
        }}
      />
      {/* Brightest inner core */}
      <div 
        className="fixed right-0 top-0 bottom-0 w-4 pointer-events-none z-0"
        style={{
          background: `linear-gradient(to left, ${colors.bright}, ${colors.dark}, transparent)`,
          filter: 'blur(15px)',
          transform: 'translateX(15%)',
        }}
      />
    </>
  )
}
