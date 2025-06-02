import { NavigationItem } from "../types/navigation";

export const mainNavItems: NavigationItem[] = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Pages",
    href: "#",
    submenu: [
      { title: "Destinations", href: "/destinations" },
      {
        title: "About Us",
        href: "/about-us",
        submenu: [
          { title: "About Us", href: "/about-us" },
          { title: "About Us 2", href: "/about-us-2" },
          { title: "About Team", href: "/about-team" },
        ],
      },
      { title: "Our Service", href: "/our-service" },
      {
        title: "Contact",
        href: "#",
        submenu: [
          { title: "Contact", href: "/contact" },
          { title: "Contact 2", href: "/contact-2" },
          { title: "Contact 3", href: "/contact-3" },
        ],
      },
      { title: "Gallery", href: "/gallery" },
    ],
  },

  {
    title: "Room List",
    href: "/room",
    submenu: [
      { title: "Room Grid", href: "/room" },
      { title: "Room Grid 2", href: "/room-grid-2" },
      { title: "Room Grid 3", href: "/room-grid-3" },
      { title: "Room Grid 4", href: "/room-grid-4" },
      { title: "Room Grid 5", href: "/room-grid-5" },
      { title: "Room Modern", href: "/room-modern" },
      { title: "Room Side Thumbnail", href: "/room-modern-2" },
      { title: "Room Cart", href: "/room-cart" },
    ],
  },

  {
    title: "Blog",
    href: "/blog-full-right-sidebar-with-frame",
    submenu: [
      {
        title: "Blog Full",
        href: "/blog-full-right-sidebar-with-frame",
        submenu: [
          {
            title: "Blog Full Right Sidebar With Frame",
            href: "/blog-full-right-sidebar-with-frame",
          },
          {
            title: "Blog Full Left Sidebar With Frame",
            href: "/blog-full-left-sidebar-with-frame",
          },
          {
            title: "Blog Full Both Sidebar With Frame",
            href: "/blog-full-both-sidebar-with-frame",
          },
        ],
      },
      {
        title: "Blog Grid",
        href: "/blog-grid-3-columns-no-space",
        submenu: [
          { title: "Blog Grid 2 Columns", href: "/blog-grid-2-columns" },
          { title: "Blog Grid 3 Columns", href: "/blog-grid-3-columns" },
          { title: "Blog Grid 4 Columns", href: "/blog-grid-4-columns" },
        ],
      },
      {
        title: "Blog Columns",
        href: "/blog-3-columns-with-frame",
      },
      {
        title: "Single Posts",
        href: "#",
      },
    ],
  },
];
