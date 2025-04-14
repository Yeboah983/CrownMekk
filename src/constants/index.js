import { Home, PlusIcon, Settings, User } from "lucide-react";


export default {
  NAVLINKS: [
    { name: "Overview", path: "/dashboard", icon: Home },

    { name: "Create Ad", path: "/dashboard/create-ad", icon: PlusIcon },

    { name: "Vendor Ads", path: "/dashboard/ads", icon:User },

    { name: "Setting", path: "/dashboard/profile", icon: Settings },
  ],
};
