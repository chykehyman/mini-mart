export type ProductModel = {
  id: string;
  displayName?: string;
  name?: string;
  metadata: {
    blockPricingStrategy: {
      credits: number;
      direction: string;
      name: string;
      unit: string;
    };
    blockThumbnailUrl?: string;
  };
};
