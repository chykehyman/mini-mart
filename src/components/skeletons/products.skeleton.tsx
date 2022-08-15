import { Box, Grid, Skeleton } from "@mui/material";
import { FC } from "react";

const ProductsSkeleton: FC = () => {
  return (
    <>
      {Array.from(new Array(8)).map((_, index) => (
        <Grid key={index} item lg={3} md={4} sm={6} xs={12}>
          <Skeleton variant="rounded" width={250} height={200} />
          <Box sx={{ pt: 0.5 }}>
            <Skeleton width={250} />
            <Skeleton width="50%" />
          </Box>
        </Grid>
      ))}
    </>
  );
};

export default ProductsSkeleton;
