export class Movie {
  constructor(name: string, description: string, imageUrl: string) {
    this.name = name;
    this.description = description;
    this.imageUrl = imageUrl;
  }

  id!: number;
  name: string;
  description!: string;
  imageUrl!: string;
}
