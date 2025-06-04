import Image from "next/image";

export default function ProductCard({ product }: any) {
  return (
    <div className="border rounded-xl overflow-hidden shadow hover:shadow-lg transition-all cursor-pointer">
      <Image src={product.image} alt={product.name} width={500} height={500} />
      <div className="p-4">
        <h3 className="text-xl font-semibold">{product.name}</h3>
        <p className="text-gray-500">${product.price}</p>
      </div>
    </div>
  );
}