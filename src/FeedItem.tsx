import { Box, Typography } from "@mui/material";

const FeedItemComponent = ({ item }: any) => (
  <Box
    key={item.guid}
    width="100%"
    sx={{
      padding: "5px",
      border: "1px solid black",
      marginBottom: "10px",
      cursor: "pointer",
      ":hover": {
        opacity: 0.3,
      },
    }}
  >
    <Typography textAlign="left">
      {item.title} - {item.pubDate}
    </Typography>
  </Box>
);

export default FeedItemComponent;
