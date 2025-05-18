export interface NavigationItem {
  title: string;
  href: string;
  submenu?: NavigationItem[];
}
