export interface Project {
    id: number,
    title: string,
    description: string,
    img: string, 
    technologies: string[],
    gitUrl: string,
    openProjectUrl: string,
    techImgs?: string[];
}
