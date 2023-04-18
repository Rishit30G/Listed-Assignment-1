import { Card, CardContent } from "@mui/material";
import axios from "axios";
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import React, { useEffect, useState } from "react";

const baseURL =
  "https://newsapi.org/v2/top-headlines?country=us&apiKey=78f751fe5d7f4e98b6b314afd5f21e18";

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
          Data Fetched From NEWS API 
        </ArgonTypography>
      </ArgonBox>
      <Card>
        <CardContent>
          <ArgonTypography variant="h4">{post.articles[0].author}</ArgonTypography>
          <ArgonTypography variant="h4">{post.articles[0].title}</ArgonTypography>
        </CardContent>
      </Card>
      <Card style={{marginTop: '15px'}}>
        <CardContent>
          <ArgonTypography variant="h4">{post.articles[1].author}</ArgonTypography>
          <ArgonTypography variant="h4">{post.articles[1].title}</ArgonTypography>
        </CardContent>
      </Card>
    </DashboardLayout>
  );
}
