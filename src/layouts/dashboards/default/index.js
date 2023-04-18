/* eslint-disable no-unused-vars */
/**
=========================================================
* Argon Dashboard 2 PRO MUI - v3.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-pro-mui
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";
// Argon Dashboard 2 PRO MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";

// Argon Dashboard 2 PRO MUI example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DetailedStatisticsCard from "examples/Cards/StatisticsCards/DetailedStatisticsCard";
import SalesTable from "examples/Tables/SalesTable";
import Table from "examples/Tables/Table";
import CategoriesList from "examples/Lists/CategoriesList";
import GradientLineChart from "examples/Charts/LineCharts/GradientLineChart";

// Argon Dashboard 2 PRO MUI base styles
import typography from "assets/theme/base/typography";

// Dashboard layout components
import Slider from "layouts/dashboards/default/components/Slider";
import TeamMembers from "layouts/dashboards/default/components/TeamMembers";
import TodoList from "layouts/dashboards/default/components/TodoList";
import ProgressTrack from "layouts/dashboards/default/components/ProgressTrack";
import BalanceCard from "layouts/dashboards/default/components/BalanceCard";
import CryptoCard from "layouts/dashboards/default/components/CryptoCard";

// Pages layout components
import Post from "layouts/pages/profile/teams/components/Post";

// Data
import reportsBarChartData from "layouts/dashboards/default/data/reportsBarChartData";
import gradientLineChartData from "layouts/dashboards/default/data/gradientLineChartData";
import projectsTableData from "layouts/dashboards/default/data/projectsTableData";
import salesTableData from "layouts/dashboards/default/data/salesTableData";
import authorsTableData from "layouts/dashboards/default/data/authorsTableData";
import categoriesListData from "layouts/dashboards/default/data/categoriesListData";
import { ArrowDropDown, ArrowRight, Rowing } from "@mui/icons-material";
import { GrantCard } from "examples/Cards/GrantCard";
import MiniGradientLineChart from "examples/Charts/LineCharts/MiniGradientLineChart";
import { Card, CardContent, Stack } from "@mui/material";
import PropTypes from "prop-types";
import PieChart from "examples/Charts/PieChart";
import ArgonBadgeDot from "components/ArgonBadgeDot";
import axios from "axios";

function Default() {
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
          Dashboard
        </ArgonTypography>
        <Grid container spacing={3} mb={3}>
          <Grid item xs={12} md={6} lg={3}>
            <DetailedStatisticsCard
              title="Total Revenue"
              count="$2,129,430"
              icon={{ color: "info", component: <i className="ni ni-money-coins" /> }}
              percentage={{ color: "success", count: "+55%", text: "since yesterday" }}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <DetailedStatisticsCard
              title="Total Transactions"
              count="1520"
              icon={{ color: "error", component: <i className="ni ni-world" /> }}
              // percentage={{ color: "success", count: "+3%", text: "since last week" }}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <DetailedStatisticsCard
              title="Total Likes"
              count="9721"
              icon={{ color: "success", component: <i className="ni ni-paper-diploma" /> }}
              // percentage={{ color: "error", count: "-2%", text: "since last quarter" }}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <DetailedStatisticsCard
              title="Total Users"
              count="892"
              icon={{ color: "warning", component: <i className="ni ni-cart" /> }}
              // percentage={{ color: "success", count: "+5%", text: "than last month" }}
            />
          </Grid>
        </Grid>

        <Grid container style={{ marginBottom: "50px" }}>
          <ArgonBox style={{ width: "100%" }}>
            <GradientLineChart
              title="Activity"
              description="May - June 2021"
              height={200}
              chart={{
                labels: ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5", "Week 6"],
                datasets: [
                  {
                    label: "Sales",
                    data: [50, 200, 88, 320, 400, 450],
                    color: "primary",
                  },
                  {
                    label: "Expenses",
                    data: [100, 28, 121, 30, 200, 340],
                    color: "secondary",
                  },
                ],
              }}
            />
          </ArgonBox>
        </Grid>

        <Grid container spacing={5}>
          <Grid item lg={6}>
            <Card>
              <ArgonBox px={3} py={3}>
              <CardContent>
                <Grid container justifyContent="space-between">
                  <Grid item>
                  <ArgonTypography variant="h3">Top Products</ArgonTypography>
                  </Grid>
                  <Grid item>
                  <ArgonTypography variant="body1" >May - June 2021 <ArrowDropDown></ArrowDropDown></ArgonTypography>
                  </Grid>
                </Grid>
                <Grid container spacing={3}>
                  <Grid item lg={6}>
                    <PieChart
                      chart={{
                        labels: ["Facebook", "Direct", "Organic", "Referral"],
                        datasets: {
                          label: "Projects",
                          backgroundColors: ["dark", "primary", "secondary"],
                          data: [14, 31, 55],
                        },
                      }}
                    />
                  </Grid>
                  <Grid item lg={6} style={{ marginTop: "40px" }}>
                    <Grid container spacing={2} direction="column">
                      <Grid item>
                        <ArgonBadgeDot
                          badgeContent="Basic Tees"
                          size="md"
                          color="secondary"
                          fontSize="button"
                          style={{ fontWeight: "200px" }}
                        ></ArgonBadgeDot>
                        <ArgonTypography variant="body1" style={{ marginLeft: "45px" }}>
                          55%
                        </ArgonTypography>
                      </Grid>
                      <Grid item>
                        <ArgonBadgeDot
                          badgeContent="Custom Short Pants"
                          size="md"
                          color="primary"
                          fontSize="button"
                          style={{ fontWeight: "200px" }}
                        ></ArgonBadgeDot>
                        <ArgonTypography variant="body1" style={{ marginLeft: "45px" }}>
                          31%
                        </ArgonTypography>
                      </Grid>
                      <Grid item>
                        <ArgonBadgeDot
                          badgeContent="Hoodies"
                          size="md"
                          color="dark"
                          fontSize="button"
                          style={{ fontWeight: "200px" }}
                        ></ArgonBadgeDot>
                        <ArgonTypography variant="body1" style={{ marginLeft: "45px" }}>
                          14%
                        </ArgonTypography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </CardContent>
              </ArgonBox>
            </Card>
          </Grid>

          <Grid item lg={6}>
            <Card>
              <ArgonBox px={3} py={3}>
                <CardContent>
                  <Grid container justifyContent="space-between" style={{ marginBottom: "45px" }}>
                    <Grid item>
                      <ArgonTypography variant="h2">Today's Schedule</ArgonTypography>
                    </Grid>
                    <Grid item>
                      <ArgonTypography varaint="body1">
                        See All <ArrowRight></ArrowRight>
                      </ArgonTypography>
                    </Grid>
                  </Grid>
                  <Grid container spacing={3} direction="column">
                    <Grid item>
                      <Stack style={{ borderLeft: "10px solid green", paddingLeft: "10px" }}>
                        <ArgonTypography variant="h5">
                          Meeting with the suppliers from Kuta Bali
                        </ArgonTypography>
                        <ArgonTypography variant="body1">14:00 - 15:00</ArgonTypography>
                        <ArgonTypography variant="body1">Sunset Road, Kuta, Bali</ArgonTypography>
                      </Stack>
                    </Grid>
                    <Grid item>
                      <Stack style={{ borderLeft: "10px solid blue", paddingLeft: "10px" }}>
                        <ArgonTypography variant="h5">
                          Check operation at Giga Factory 1
                        </ArgonTypography>
                        <ArgonTypography variant="body1">18.00-20.00</ArgonTypography>
                        <ArgonTypography variant="body1">at Central Jakarta </ArgonTypography>
                      </Stack>
                    </Grid>
                  </Grid>
                </CardContent>
              </ArgonBox>
            </Card>
          </Grid>
        </Grid>
      </ArgonBox>
    </DashboardLayout>
  );
}

export default Default;
