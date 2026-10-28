export default function ProviderLogo({ provider: provider }) {
  return (
    <span className="provider-brand">
      <span
        className="provider-logo"
        style={{
          background: provider.color,
        }}
      >
        {provider.initial}
      </span>
      {provider.name}
      <small>SAMPLE</small>
    </span>
  );
}
