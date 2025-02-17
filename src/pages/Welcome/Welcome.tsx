import React, { useState } from "react";
import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { TPost, TPostsResponse } from "@/shared/types";

const Welcome: React.FC = () => {
  const { t } = useTranslation();

  const [posts, setPosts] = useState<TPost[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchPosts = async () => {
    setIsLoading(true);
    try {
      const res = await fetch("/api/posts/");
      const data: TPostsResponse = await res.json();
      setPosts(data);
    } catch (error) {
      console.error(error);
      alert("Error fetching posts");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        width: "100%",
        gap: 2,
      }}
    >
      <Typography variant="h3" component="h1">
        {t("welcome.title")}
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={fetchPosts}
        disabled={isLoading}
      >
        {t("welcome.getPosts")}
      </Button>
      <Box
        sx={{ display: "flex", flexDirection: "row", gap: 1, flexWrap: "wrap" }}
      >
        {posts.map((post) => (
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <Typography variant="h5" component="div">
                {post.title}
              </Typography>
              <Typography variant="body2">{post.content}</Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default Welcome;
