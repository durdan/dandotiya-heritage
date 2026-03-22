import { getPortalContent } from "../lib/getContent";
import PortalPage from "./components/PortalPage";

export default function Home() {
  const content = getPortalContent("hi");
  return <PortalPage content={content} lang="hi" />;
}
