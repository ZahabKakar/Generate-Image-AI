"use client";

import Image from "next/image";
import Input from "@/components/Input";
import Button from "@/components/Button";
import { useState } from "react";

type image = {
  url: string;
};
type Response = {
  prompt: string;
  images: string[];
};
export default function Home() {
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async () => {
    setIsLoading(true);

    const response = await fetch(`/generate?prompt=${input}`);
    const data = (await response.json()) as Response;

    const image = data.images[0];

    setIsLoading(false);
    window.open(image, "_blank");
  };

  return (
    <>
      <div className="h-screen w-full">
        <Image
          width={100}
          height={50}
          alt="bg-image"
          src="/images/img2.webp"
          className=" rounded-full absolute top-[40rem]  right-[5rem] "
        />
        <Image
          width={100}
          height={50}
          alt="bg-image"
          src="/images/img3.webp"
          className="absolute bottom-[6rem] left-[13rem] rounded-full"
        />
        <Image
          width={120}
          height={50}
          alt="bg-image"
          src="/images/img1.webp"
          className="absolute left-[35rem] top-[10rem]  rounded-full "
        />
        <Image
          width={100}
          height={50}
          alt="bg-image"
          src="/images/img4.webp"
          className="absolute right-64 rounded-full"
        />
        <Image
          width={100}
          height={50}
          alt="bg-image"
          src="/images/img5.webp"
          className="absolute left-10  top-32 rounded-full   "
        />

        <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)]"></div>
        </div>
        <div className="h-full w-full flex flex-col items-center  justify-center">
          <div>
            <p className="h-full w-full  flex items-center justify-center p-8 capitalize font-serif text-7xl leading-[6rem] text-center	 ">
              Create beautiful art with <br /> artificial intelligence
            </p>
          </div>
          <div className="w-[600px] h-16 flex items-center justify-between  bg-white rounded-full shadow-md">
            <Input
              placeholder="Generate an image"
              onChange={(e: any) => setInput(e.target.value)}
            />
            <Button
              title={isLoading ? "Generating..." : "Generate"}
              handleClick={handleClick}
            />
          </div>
        </div>
      </div>
    </>
  );
}
