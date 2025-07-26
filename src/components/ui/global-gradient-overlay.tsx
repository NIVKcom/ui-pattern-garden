export function GlobalGradientOverlay() {
  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden" style={{ height: '100%' }}>
      {/* Subtle orange-purple gradient blob */}
      <div 
        className="absolute w-[1600px] h-[1400px] rounded-full opacity-[0.12]"
        style={{
          background: 'radial-gradient(circle, #FFD4C4 0%, #F4A460 30%, #DDA0DD 60%, transparent 80%)',
          top: '5%',
          left: '-10%',
          filter: 'blur(400px)',
          animation: 'float 20s ease-in-out infinite',
        }}
      />
      
      {/* Soft purple-orange gradient blob */}
      <div 
        className="absolute w-[1400px] h-[1100px] rounded-full opacity-[0.10]"
        style={{
          background: 'radial-gradient(circle, #E6E6FA 0%, #FFE4E1 40%, #F0E68C 70%, transparent 85%)',
          bottom: '-50%',
          right: '-5%',
          filter: 'blur(450px)',
          animation: 'float 25s ease-in-out infinite reverse',
        }}
      />
      
      {/* Ultra-subtle center glow */}
      <div 
        className="absolute w-[1200px] h-[1000px] rounded-full opacity-[0.08]"
        style={{
          background: 'radial-gradient(circle, #FFEFD5 0%, #DDA0DD 50%, transparent 75%)',
          top: '30%',
          left: '25%',
          filter: 'blur(500px)',
          animation: 'float 30s ease-in-out infinite',
        }}
      />
    </div>
  );
}