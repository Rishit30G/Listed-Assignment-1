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

/** 
  All of the routes for the Argon Dashboard 2 PRO MUI are added here,
  You can add a new route, customize the routes and delete the routes here.

  Once you add a new route on this file it will be visible automatically on
  the Sidenav.

  For adding a new route you can follow the existing routes in the routes array.
  1. The `type` key with the `collapse` value is used for a route.
  2. The `type` key with the `title` value is used for a title inside the Sidenav. 
  3. The `type` key with the `divider` value is used for a divider between Sidenav items.
  4. The `name` key is used for the name of the route on the Sidenav.
  5. The `key` key is used for the key of the route (It will help you with the key prop inside a loop).
  6. The `icon` key is used for the icon of the route on the Sidenav, you have to add a node.
  7. The `collapse` key is used for making a collapsible item on the Sidenav that contains other routes
  inside (nested routes), you need to pass the nested routes inside an array as a value for the `collapse` key.
  8. The `route` key is used to store the route location which is used for the react router.
  9. The `href` key is used to store the external links location.
  10. The `title` key is only for the item with the type of `title` and its used for the title text on the Sidenav.
  10. The `component` key is used to store the component of its route.
*/

// Argon Dashboard 2 PRO MUI layouts
import Landing from "layouts/dashboards/landing";
import Default from "layouts/dashboards/default";
import Automotive from "layouts/dashboards/automotive";
import SmartHome from "layouts/dashboards/smart-home";
import VRDefault from "layouts/dashboards/virtual-reality/vr-default";
import VRInfo from "layouts/dashboards/virtual-reality/vr-info";
import CRM from "layouts/dashboards/crm";
import ProfileOverview from "layouts/pages/profile/profile-overview";
import Teams from "layouts/pages/profile/teams";
import AllProjects from "layouts/pages/profile/all-projects";
import Reports from "layouts/pages/users/reports";
import NewUser from "layouts/pages/users/new-user";
import Settings from "layouts/pages/account/settings";
import Billing from "layouts/pages/account/billing";
import Invoice from "layouts/pages/account/invoice";
import Security from "layouts/pages/account/security";
import General from "layouts/pages/projects/general";
import Timeline from "layouts/pages/projects/timeline";
import NewProject from "layouts/pages/projects/new-project";
import Widgets from "layouts/pages/widgets";
import Charts from "layouts/pages/charts";
import SweetAlerts from "layouts/pages/sweet-alerts";
import Notifications from "layouts/pages/notifications";
import PricingPage from "layouts/pages/pricing-page";
import RTL from "layouts/pages/rtl";
import Kanban from "layouts/applications/kanban";
import Wizard from "layouts/applications/wizard";
import DataTables from "layouts/applications/data-tables";
import Calendar from "layouts/applications/calendar";
import Analytics from "layouts/applications/analytics";
import Overview from "layouts/ecommerce/overview";
import NewProduct from "layouts/ecommerce/products/new-product";
import EditProduct from "layouts/ecommerce/products/edit-product";
import ProductPage from "layouts/ecommerce/products/product-page";
import ProductsList from "layouts/ecommerce/products/products-list";
import OrderList from "layouts/ecommerce/orders/order-list";
import OrderDetails from "layouts/ecommerce/orders/order-details";
import Referral from "layouts/ecommerce/referral";
import SignInBasic from "layouts/authentication/sign-in/basic";
import SignInCover from "layouts/authentication/sign-in/cover";
import SignInIllustration from "layouts/authentication/sign-in/illustration";
import SignUpBasic from "layouts/authentication/sign-up/basic";
import SignUpCover from "layouts/authentication/sign-up/cover";
import SignUpIllustration from "layouts/authentication/sign-up/illustration";
import ResetBasic from "layouts/authentication/reset-password/basic";
import ResetCover from "layouts/authentication/reset-password/cover";
import ResetIllustration from "layouts/authentication/reset-password/illustration";
import LockBasic from "layouts/authentication/lock/basic";
import LockCover from "layouts/authentication/lock/cover";
import LockIllustration from "layouts/authentication/lock/illustration";
import VerificationBasic from "layouts/authentication/2-step-verification/basic";
import VerificationCover from "layouts/authentication/2-step-verification/cover";
import VerificationIllustration from "layouts/authentication/2-step-verification/illustration";
import Error404 from "layouts/authentication/error/404";
import Error500 from "layouts/authentication/error/500";

// Argon Dashboard 2 PRO MUI components
import ArgonBox from "components/ArgonBox";
import GrantsandProposals from "layouts/pages/grants-proposals";
import JobProfile from "layouts/pages/job-profile";
import Grants from "layouts/pages/grants-proposals/Grant";
import Proposals from "layouts/pages/grants-proposals/Proposals";
import Jobs from "layouts/pages/grants-proposals/Jobs";
import Reputation from "layouts/pages/profile/reputation";
import PastExperience from "layouts/pages/profile/past-experience";
import Overview2 from "layouts/pages/profile/overview";
import Articles from "layouts/pages/articles";
import ArticleMain from "layouts/pages/article-main";
import ProposalDiscussion from "layouts/pages/proposal-discussion";
import JobListing from "layouts/pages/job-listing";
import NewDAOProtocol from "layouts/pages/dao-protocol";
import ProtocolDiscussion from "layouts/pages/dao-protocol/protocol-discussion";
import RelatedProtocols from "layouts/pages/dao-protocol/related-protocols";
import { CalendarToday, Dashboard, SettingsAccessibility } from "@mui/icons-material";
import { Money } from "@material-ui/icons";
import { User } from "@web3uikit/icons";
import APIPage from "layouts/pages/API";


const routes = [
  {
    type: "collapse",
    name: "Dashboards",
    key: "dashboards",
    icon: <Dashboard />,
    collapse: [
      {
        name: "Default",
        key: "default",
        route: "/dashboards/default",
        component: <Default />,
      },
      {
        name: "Sign In",
        key: "illustration",
        route: "/authentication/sign-in",
        component: <SignInIllustration />,
      },
      {
        name: "API", 
        key: "api",
        route: "/api",
        component: <APIPage/>
      }
    ],
  },
  {
    type: "collapse",
    name: "Transaction", 
    key: "Transaction", 
    icon: <Money/>
  },
  {
    type: "collapse",
    name: "Schedule", 
    key: "Transaction", 
    icon: <CalendarToday/>
  },
  {
    type: "collapse",
    name: "Users", 
    key: "Transaction", 
    icon: <User/>
  },
  {
    type: "collapse",
    name: "Settings", 
    key: "Transaction", 
    icon: <SettingsAccessibility/>
  },

  {

  }
];
export default routes;
