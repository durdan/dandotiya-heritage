import { getPortalContent } from "../../lib/getContent";
import PortalPage from "../components/PortalPage";

export default function EnglishPortal() {
  const content = getPortalContent("en");
  return <PortalPage content={content} lang="en" />;
}
