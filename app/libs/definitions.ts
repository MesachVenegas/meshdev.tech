export type DivMotionProps = {
  children: React.ReactNode;
  direction: string;
  styles?: string;
  duration: number;
}

export type CardProps = {
  symbol?: string;
  title: string;
  start?: number;
  end: number;
  duration: number;
  text? : string;
  types: 'frameworks' | 'projects' | 'experience' | 'coding' ;
}