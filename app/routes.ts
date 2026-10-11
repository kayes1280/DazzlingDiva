import {
  type RouteConfig,
  route,
  index,
  layout,
  prefix,
} from "@react-router/dev/routes";

export default [
  
  layout("./mainLayout/mainlayout.tsx", [
    index("./routes/home.tsx"),
    
  ]),

] satisfies RouteConfig;
