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

import { useState } from "react";

// react-router-dom components
import { Link } from "react-router-dom";

// @mui material components
import Switch from "@mui/material/Switch";
import github from "assets/images/logos/github.svg";
import google from "assets/images/logos/google.svg";

// Argon Dashboard 2 PRO MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import ArgonInput from "components/ArgonInput";
import ArgonButton from "components/ArgonButton";

// Authentication layout components
import IllustrationLayout from "layouts/authentication/components/IllustrationLayout";

// Image
const bgImage =
  "https://picsum.photos/927/1208";

function Illustration() {
  const [rememberMe, setRememberMe] = useState(false);

  const handleSetRememberMe = () => setRememberMe(!rememberMe);

  return (
    <IllustrationLayout
      title="Sign In"
      description="Sign in to your account"
      illustration={{
        image: bgImage,
        title: 'Board.',
      }}
    >
      <ArgonBox component="form" role="form">
        <ArgonBox display="flex" sx={{ mb: 3 }}>
          <ArgonButton size="small" sx={{ mr: 1 }}>
            <ArgonBox component="img" src={github} alt="github" width="23px" height="23px" />
            &nbsp; Github
          </ArgonButton>
          <ArgonButton size="small">
            <ArgonBox component="img" src={google} alt="github" width="23px" height="23px" />
            &nbsp; Google
          </ArgonButton>
        </ArgonBox>
        <ArgonBox mb={2}>
          <ArgonInput type="email" placeholder="Email" size="large" />
        </ArgonBox>
        <ArgonBox mb={2}>
          <ArgonInput type="password" placeholder="Password" size="large" />
        </ArgonBox>
        <ArgonBox display="flex" alignItems="center">
          <ArgonTypography variant="button" fontWeight="regular" style={{color: '#346BD4'}}>
            Forgot Password ?
          </ArgonTypography>
        </ArgonBox>
        <ArgonBox mt={4} mb={1}>
          <ArgonButton color="dark" size="large" fullWidth>
            Sign In
          </ArgonButton>
        </ArgonBox>
        <ArgonBox mt={3} textAlign="center">
          <ArgonTypography variant="button" color="text" fontWeight="regular">
            Don&apos;t have an account?{" "}
            <ArgonTypography
              component={Link}
              to="/authentication/sign-up/illustration"
              variant="button"
              fontWeight="medium"
              style={{color: '#346BD4'}}
            >
              Sign up
            </ArgonTypography>
          </ArgonTypography>
        </ArgonBox>
      </ArgonBox>
    </IllustrationLayout>
  );
}

export default Illustration;
