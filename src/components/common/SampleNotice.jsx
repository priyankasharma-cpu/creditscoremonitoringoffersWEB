import { Info } from "lucide-react";
export default function SampleNotice() {
  return (
    <div className="sample-notice">
      <Info size={16} />
      <span>
        <strong>A transparent starting point.</strong> Providers below are
        fictional examples. Order is illustrative, not an editorial ranking.
        Verified brands and offers are coming later.
      </span>
    </div>
  );
}
