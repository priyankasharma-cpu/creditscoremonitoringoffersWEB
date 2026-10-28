import { useSeo } from "../hooks/useSeo";
import { policies } from "../data/policies";
import PageIntro from "../components/common/PageIntro";
import InformationPageContent from "../components/common/InformationPageContent";
export default function About() {
  const data = policies["about"];
  useSeo(data?.[0] || "Page not found", data?.[1] || "Page not found");
  return (
    <>
      <PageIntro title={data[0]} />
      <InformationPageContent data={data} />
    </>
  );
}
