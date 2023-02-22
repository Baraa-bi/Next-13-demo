import Card from "./Card";
import SidebarLink from "./SidebarLink";

export type SidebarLinkData = {
  label: string;
  icon: string;
  link: string;
};

const links: SidebarLinkData[] = [
  { label: "Home", icon: "Grid", link: "/home" },
  { label: "Calendar", icon: "Calendar", link: "/calendar" },
  { label: "Profile", icon: "User", link: "/profile" },
  { label: "Settings", icon: "Settings", link: "/settings" },
];

const Sidebar = () => {
  return (
    <Card className="h-full w-40 flex items-center justify-between flex-wrap">
      <div className="w-full flex justify-center items-center">
        {/* <Image src={logo} alt="Able logo" priority className="w-14" /> */}
      </div>
      {links.map((link) => (
        <SidebarLink key={link.label} link={link} />
      ))}
    </Card>
  );
};

export default Sidebar;
