import { capitalize } from "../lib/utils";
import { Routes } from "./routes";
import icons from "./icons";

const BottomTabs = [
  {
    name: Routes.home.name,
    title: capitalize(Routes.home.name),
    icon: icons.home,
    activeIcon: icons.homeFill,
  },
  {
    name: Routes.bookmark.name,
    title: capitalize(Routes.bookmark.name),
    icon: icons.bookmark,
    activeIcon: icons.bookmarkFill,
  },
  {
    name: Routes.create.name,
    title: capitalize(Routes.create.name),
    icon: icons.create,
    activeIcon: icons.createFill,
  },
  {
    name: Routes.profile.name,
    title: capitalize(Routes.profile.name),
    icon: icons.profile,
    activeIcon: icons.profileFill,
  },
];

export default { BottomTabs };
