export type GalleryItem = {
  image: string;
  title: string;
  description: string;
};

export const galleryItems: GalleryItem[] = [
  {
    image: "/gallery/photo1.jpg",
    title: "Sobremesas delicadas",
    description: "Macarons, mini gems e doces finos finalizados com folhas douradas."
  },
  {
    image: "/gallery/photo2.jpg",
    title: "Torres de destaque",
    description: "Mesas de doces com torres, caixas e arranjos personalizados."
  },
  {
    image: "/gallery/photo3.jpg",
    title: "Kits e presentes",
    description: "Caixas transparentes e embalagens premium para padrinhos e clientes."
  }
];
