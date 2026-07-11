export default function SectionTitle({
  title,
  subtitle
}) {
  return (
    <div
      style={{
        marginBottom: 20
      }}
    >
      <h2
        style={{
          fontSize: 22,
          marginBottom: 4
        }}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          style={{
            color: "#6b7280"
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}