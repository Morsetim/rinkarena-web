import Image from 'next/image';
import { Button } from './ui/button'; // Adjust import based on your button component
import { Badge } from './ui/badge'; // Adjust import based on your badge component

interface ProductCardProps {
  imageUrl: string;
  altText: string;
  title: string;
  price: string;
  taxInfo?: string;
  badgeText?: string;
  onAddToCart?: () => void;
  width?: number;
  height?: number;
  className?: string;
  originalPrice?: string;
}

export const ProductCard = ({
  imageUrl,
  altText,
  title,
  price,
  taxInfo = "Sales Tax Included",
  badgeText,
  onAddToCart,
  width = 400,
  height = 300,
  className = "",
  originalPrice,
}: ProductCardProps) => {
  return (
    <div className={`bg-white overflow-hidden shadow-sm ${className}`}>
      <div className="relative">
        <Image
          src={imageUrl}
          alt={altText}
          width={400}
          height={300}
          className="w-full h-64 object-cover"
        />
        {badgeText && (
          <Badge className="absolute top-[-1px] left--1 bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-none">
            {badgeText}
          </Badge>
        )}
      </div>
      <div className="">
        <h3 className="text-md font-semibold text-gray-900 mb-4 mx-2">{title}</h3>
        <div className="flex items-center gap-3 mb-2 p-2">
          {originalPrice && (
            <span className="text-md text-slate-800 line-through">{originalPrice}</span>
          )}
          <span className="text-md font-bold text-gray-900">{price}</span>
        </div>
        {taxInfo && <p className="text-xs text-gray-600 mb-4 mx-2">{taxInfo}</p>}
        <Button 
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg rounded-none"
          onClick={onAddToCart}
        >
          Add to Cart
        </Button>
      </div>
    </div>
  );
};