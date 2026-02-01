export interface GalleryItem {
  image: string;
  description: string;
}

export interface Subcategory {
  name: string;
  items: GalleryItem[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  coverImage: string | null;
  subcategories?: Subcategory[];
  items?: GalleryItem[];
}
