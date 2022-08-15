import axios from "axios";
import { ProductModel } from "./model";

export const getMartProducts = async (): Promise<ProductModel[]> => {
  const response = await axios.get("/marketplace/blocks", {
    headers: { "Content-Type": "application/json" },
  });

  let modifiedData: ProductModel[] = [];
  response.data.data.forEach(
    ({ id, displayName, name, metadata }: ProductModel) => {
      if (metadata.blockPricingStrategy.name === "simple") {
        modifiedData.push({
          id,
          metadata,
          displayName,
          name,
        });
      }
    }
  );

  return modifiedData;
};
