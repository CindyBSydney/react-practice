// Import useContext and LevelContext as before
import { useContext } from 'react';
import { LevelContext } from './LevelContext';

// Update the SectionProps type to include isFancy
type SectionProps = {
  children: React.ReactNode;
  isFancy?: boolean; // Making isFancy optional
};

// Update the function signature to accept isFancy
export default function Section({ children, isFancy = false }: SectionProps) {
  const level = useContext(LevelContext);
  // Use isFancy to conditionally apply a class name
  const className = `section ${isFancy ? 'fancy' : ''}`;
  return (
    <section className={className}>
      <LevelContext.Provider value={level + 1}>
        {children}
      </LevelContext.Provider>
    </section>
  );
}
