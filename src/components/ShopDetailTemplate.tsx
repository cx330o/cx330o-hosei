import { Link } from "react-router-dom";
import { Undo2 } from "lucide-react";
import type { ShopData } from "../utils/types";

interface ShopDetailTemplateProps {
  shop: ShopData;
}

const ShopDetailTemplate = ({ shop }: ShopDetailTemplateProps) => {
  return (
    <div className="bg-gray-100 dark:bg-zinc-950 p-8 min-h-screen text-black dark:text-white">
      <title>{shop.name} - たまっぷ提携店舗</title>
      <meta name="description" content={shop.metaDescription} />
      <Link
        to="/discount"
        className="top-2 left-2 fixed backdrop-blur-xs p-4 border-2 border-rose-500 rounded-full min-w-[44px] min-h-[44px] font-semibold text-lg"
      >
        <Undo2 />
      </Link>
      <div className="dark:bg-zinc-900 shadow-lg mx-auto mt-10 rounded-lg max-w-xl">
        <img
          src={shop.image}
          alt={`${shop.name}の画像`}
          width={500}
          height={500}
          className="rounded-t-lg w-full"
        />
        <div className="px-5 py-4">
          <p className="mt-2 font-bold text-2xl text-center">{shop.name}</p>
          {shop.description && <p className="mt-4">{shop.description}</p>}
          <p className="font-semibold text-rose-400 text-lg">割引内容</p>
          {shop.discountContent.map((line, i) => (
            <p key={i}>{line}</p>
          ))}
          <p className="font-semibold text-rose-400 text-lg">割引方法</p>
          <p>{shop.discountMethod}</p>
          <p className="font-semibold text-rose-400 text-lg">営業日／定休�?/p>
          {shop.businessHours.map((line, i) => (
            <p key={i}>{line}</p>
          ))}
          <p className="font-semibold text-rose-400 text-lg">お支払方�?/p>
          <p>{shop.paymentMethods}</p>
          <p className="font-semibold text-rose-400 text-lg">アクセス</p>
          <iframe
            src={shop.mapEmbedUrl}
            className="rounded-lg w-full h-64"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <p className="font-semibold text-rose-400 text-lg">問い合わせ先</p>
          <p>{shop.contactPhone}</p>
          <p>{shop.address}</p>
          <p className="font-semibold text-rose-400 text-lg">注意事項</p>
          {shop.notes.map((note, i) => (
            <p key={i}>{note}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopDetailTemplate;
// updated: ���nԔ����GoogleMap����z��
