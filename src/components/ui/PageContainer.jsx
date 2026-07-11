export default function PageContainer({ children }) {
  return (
    <div
      style={{
        width: "100%",
        maxWidth: 1600,
        margin: "0 auto"
      }}
    >
      {children}
    </div>
  );
}