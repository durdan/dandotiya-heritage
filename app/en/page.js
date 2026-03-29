import { getPortalContent } from "../../lib/getContent";
import PortalPage from "../components/PortalPage";

export const metadata = {
  title: "Dandotiya Heritage Portal — English",
  description: "Digital heritage portal of the Dandotiya family — Bhrigu Vansh, Yajur Veda, Madhyandini Shakha. Tracing lineage from Maharishi Bhrigu to present day.",
  alternates: { canonical: "https://www.dandotiya.com/en" },
};

export default function EnglishPortal() {
  const content = getPortalContent("en");
  return <PortalPage content={content} lang="en" />;
}
