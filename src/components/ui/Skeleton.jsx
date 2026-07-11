export default function Skeleton({
  height = 18
}) {
  return (
    <div
      style={{
        width: "100%",
        height,
        borderRadius: 6,
        background: "#e5e7eb",
        marginBottom: 10
      }}
    />
  );
}