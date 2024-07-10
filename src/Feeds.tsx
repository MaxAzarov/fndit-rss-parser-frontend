import { ChangeEvent, useEffect, useState } from "react";
import axios from "axios";
import { Box, CircularProgress, Pagination } from "@mui/material";
import { Config } from "./config";
import FeedItemComponent from "./FeedItem";
import { FeedItem } from "./interfaces/FeedItem";

const limit = 10;

const FeedList = () => {
  const [data, setData] = useState<FeedItem[]>([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(`${Config.API_BASE_URL}/feed-item`, {
          params: { page, limit },
        });

        const { data, total } = response.data;
        setData(data);
        setTotal(total);
        setPage(page);
      } catch (error) {
        setError((error as any).message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [page]);

  const handlePageChange = (event: ChangeEvent<unknown>, value: any) => {
    setPage(value);
  };

  if (error || isLoading) {
    return (
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        padding="20px"
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      padding="20px"
    >
      {data.map((item) => (
        <FeedItemComponent key={item.guid} item={item} />
      ))}
      <Pagination
        count={Math.ceil(total / limit)}
        page={page}
        onChange={handlePageChange}
        color="primary"
      />
    </Box>
  );
};

export default FeedList;
