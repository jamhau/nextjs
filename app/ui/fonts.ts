import { Inter, Lusitana } from 'next/font/google';
 
export const inter = Inter({
    subsets: ['latin']

  });
  
  // Specify a single weight for Lusitana font
  export const lusitana = Lusitana({
    weight: ['400','700'],
    subsets: ['latin'] // Single weight as a string
  });