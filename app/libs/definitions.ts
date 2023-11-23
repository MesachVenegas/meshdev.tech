export type MotionProps = {
  children: React.ReactNode;
  direction?: string;
  styles?: string;
  duration: number | 0;
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

export type CardProjectProps = {
  title: string;
  description: string;
  techs : string[];
  imgUrl: string;
  links: { name: string, url: string }[];
}