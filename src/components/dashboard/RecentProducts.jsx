import Card from "../ui/Card";

const products = [
  "Detergent Powder",
  "Glass Cleaner",
  "Dish Wash Liquid",
  "Toilet Cleaner",
  "Floor Cleaner"
];

export default function RecentProducts() {
  return (
    <Card>
      <h3 style={{ marginBottom: 20 }}>Recent Products</h3>

      {products.map((product) => (
        <div
          key={product}
          style={{
            padding: "10px 0",
            borderBottom: "1px solid #f1f5f9"
          }}
        >
          {product}
        </div>
      ))}
    </Card>
  );
}