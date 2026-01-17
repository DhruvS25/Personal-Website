export default function NeonSideEffects() {
  return (
    <>
      {/* Left Side Cyan Neon Effect - Multiple layers for depth */}
      <div 
        className="fixed left-0 top-0 bottom-0 w-40 pointer-events-none z-0"
        style={{
          background: 'linear-gradient(to right, rgba(6, 182, 212, 0.5), rgba(6, 182, 212, 0.15), transparent)',
          filter: 'blur(50px)',
          transform: 'translateX(-50%)',
        }}
      />
      <div 
        className="fixed left-0 top-0 bottom-0 w-28 pointer-events-none z-0"
        style={{
          background: 'linear-gradient(to right, rgba(6, 182, 212, 0.7), rgba(6, 182, 212, 0.25), transparent)',
          filter: 'blur(35px)',
          transform: 'translateX(-35%)',
        }}
      />
      <div 
        className="fixed left-0 top-0 bottom-0 w-12 pointer-events-none z-0"
        style={{
          background: 'linear-gradient(to right, rgba(34, 211, 238, 0.9), rgba(6, 182, 212, 0.5), transparent)',
          filter: 'blur(25px)',
          transform: 'translateX(-25%)',
        }}
      />
      {/* Brightest inner core */}
      <div 
        className="fixed left-0 top-0 bottom-0 w-4 pointer-events-none z-0"
        style={{
          background: 'linear-gradient(to right, rgba(34, 211, 238, 1), rgba(6, 182, 212, 0.6), transparent)',
          filter: 'blur(15px)',
          transform: 'translateX(-15%)',
        }}
      />

      {/* Right Side Cyan Neon Effect - Multiple layers for depth */}
      <div 
        className="fixed right-0 top-0 bottom-0 w-40 pointer-events-none z-0"
        style={{
          background: 'linear-gradient(to left, rgba(6, 182, 212, 0.5), rgba(6, 182, 212, 0.15), transparent)',
          filter: 'blur(50px)',
          transform: 'translateX(50%)',
        }}
      />
      <div 
        className="fixed right-0 top-0 bottom-0 w-28 pointer-events-none z-0"
        style={{
          background: 'linear-gradient(to left, rgba(6, 182, 212, 0.7), rgba(6, 182, 212, 0.25), transparent)',
          filter: 'blur(35px)',
          transform: 'translateX(35%)',
        }}
      />
      <div 
        className="fixed right-0 top-0 bottom-0 w-12 pointer-events-none z-0"
        style={{
          background: 'linear-gradient(to left, rgba(34, 211, 238, 0.9), rgba(6, 182, 212, 0.5), transparent)',
          filter: 'blur(25px)',
          transform: 'translateX(25%)',
        }}
      />
      {/* Brightest inner core */}
      <div 
        className="fixed right-0 top-0 bottom-0 w-4 pointer-events-none z-0"
        style={{
          background: 'linear-gradient(to left, rgba(34, 211, 238, 1), rgba(6, 182, 212, 0.6), transparent)',
          filter: 'blur(15px)',
          transform: 'translateX(15%)',
        }}
      />
    </>
  )
}
