export interface BlogPost {
  title: string;
  sections: BlogSection[];
}

export interface BlogSection {
  heading?: string;
  content: string[];
}

export interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
  affiliateLink: string;
}

export interface GameState {
  isPlaying: boolean;
  score: number;
  gameOver: boolean;
}