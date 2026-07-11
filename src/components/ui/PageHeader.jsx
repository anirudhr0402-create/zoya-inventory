export default function PageHeader({
  title,
  subtitle
}) {
  return (
    <div
      style={{
        marginBottom: 24
      }}
    >
      <h1 className="page-title">{title}</h1>

      <p className="page-subtitle">
        {subtitle}
      </p>
    </div>
  );
}