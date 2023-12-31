import { useId } from 'react';
import { NImage as Image } from '../next/Image';

type TSectionCard5Props = {
  imageUrl?: string;
  title?: string;
  sub?: string;
};

const SectionCard5 = ({ imageUrl = '', sub, title }: TSectionCard5Props) => {
  const uid = useId();
  return (
    <div className="flex w-[11.25rem] flex-shrink-0 snap-start snap-always flex-col">
      <div className="relative mb-2.5 h-[7.125rem] w-full">
        <Image
          fill
          src={imageUrl}
          alt={''}
          className="object-contain"
          quality={100}
          priority
        />
      </div>
      <div className="mb-2.5 flex h-[30px] items-center justify-center overflow-hidden whitespace-nowrap rounded-full border-[1.5px] px-2 text-base font-[600] text-green1">
        {title}
      </div>
      <div className="text-center text-[0.9375rem] font-[600] text-gray-50">
        {sub}
      </div>
    </div>
  );
};

export default SectionCard5;
