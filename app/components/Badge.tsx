import React from 'react';

export default function Badge({ quantity }: { quantity: number }) {
    return (
        <div className="absolute bg-cardinal rounded-full w-max py-2 px-1 h-2 flex items-center justify-center bottom-2.5 z-10 -right-4">
           <p className="text-white text-[10px] font-bold">
               {+quantity > 99 ? '99+' : quantity}
            </p>
        </div>
    );
}
