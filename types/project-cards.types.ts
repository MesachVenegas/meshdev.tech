export interface CardProps {
  symbol?: string;
  title: string;
  start?: number;
  end: number;
  duration: number;
  text?: string;
  types: 'frameworks' | 'projects' | 'experience' | 'coding';
}

export interface CardProjectProps {
  title: string;
  description: string;
  techs: string[];
  imgUrl: string;
  links: { name: string, url: string }[];
}
