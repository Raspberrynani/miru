import { Drawer as DrawerPrimitive } from 'vaul-svelte'

import Content from './drawer-content.svelte'
import Description from './drawer-description.svelte'
import Footer from './drawer-footer.svelte'
import Header from './drawer-header.svelte'
import NestedRoot from './drawer-nested.svelte'
import Overlay from './drawer-overlay.svelte'
import Title from './drawer-title.svelte'
import Root from './drawer.svelte'

const Trigger = DrawerPrimitive.Trigger
const Portal: typeof DrawerPrimitive.Portal = DrawerPrimitive.Portal
const Close = DrawerPrimitive.Close

export {
  Root,
  NestedRoot,
  Content,
  Description,
  Overlay,
  Footer,
  Header,
  Title,
  Trigger,
  Portal,
  Close,
  //
  Root as Drawer,
  NestedRoot as DrawerNestedRoot,
  Content as DrawerContent,
  Description as DrawerDescription,
  Overlay as DrawerOverlay,
  Footer as DrawerFooter,
  Header as DrawerHeader,
  Title as DrawerTitle,
  Trigger as DrawerTrigger,
  Portal as DrawerPortal,
  Close as DrawerClose
}
