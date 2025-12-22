export interface Testimonial {
  id: number;
  author: string;
  text: string | { key: string; value?: string };
  position: string;
}