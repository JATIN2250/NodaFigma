import Image from "next/image";

interface FeatureCardProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
}

export default function FeatureCard({ imageSrc, imageAlt, title, description }: FeatureCardProps) {
  return (
    <div className="bg-background rounded-lg shadow-md p-6 flex flex-col   h-[320px] w-[350px]">
      <div className="mb-4 ml-[100px]">
        <Image src={imageSrc} alt={imageAlt} width={120} height={120} />
      </div>
      <h3 className="font-montserrat text-brand-blue text-[20px] font-bold mb-2 text">
        {title}
      </h3>
      <p className="font-montserrat text-brand-black text-[14px]">
        {description}
      </p>
    </div>
  );
}