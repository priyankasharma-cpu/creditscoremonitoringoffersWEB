import { useSeo } from "../hooks/useSeo";
import { policies } from "../data/policies";
import PageIntro from "../components/common/PageIntro";
import InformationPageContent from "../components/common/InformationPageContent";
export default function Methodology() {
  const data = policies["methodology"];
  useSeo(data?.[0] || "Page not found", data?.[1] || "Page not found");
  return (
    <>
      <PageIntro title={data[0]} />
      <InformationPageContent data={data} showMethodology />
    </>
  );
}
