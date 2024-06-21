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
  url: string;
  image: string;
  title: string;
  description_es?: string;
  description_en?: string;
  techs: string[];
  links: { name: string, url: string }[];
}
