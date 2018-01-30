export interface Game {
  Order: number;
  Name: string;
  Slug: string;
  SupportsAddons: boolean;
  SupportsVoice: boolean;
  GameFiles: [{
    FileName: string;
  }];
  CategorySections: [{
    Name: string;
  }];
  ID: number;
}
