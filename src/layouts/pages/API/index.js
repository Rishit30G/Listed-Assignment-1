import { Card, CardContent } from "@mui/material";
import axios from "axios";
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import React, { useEffect, useState } from "react";

const baseURL =
  "https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

export default function APIPage() {
  const [post, setposts] = useState(null);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setposts(response.data);
    });
  }, []);

  if (!post) return null;

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <ArgonBox py={3} px={3}>
        <ArgonTypography
          variant="h2"
          fontWeight="bold"
          textTransform="capitalize"
          style={{ marginBottom: "15px" }}
        >
          Data Fetched From Jokes API
        </ArgonTypography>
      </ArgonBox>
      <Card>
        <CardContent>
          <ArgonTypography variant="h4">{post.joke}</ArgonTypography>
        </CardContent>
      </Card>
    </DashboardLayout>
  );
}
