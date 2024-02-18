"use client"
import React, { useEffect } from "react";
import FormatToCode from "./components/FormatToCode";
import Image from 'next/image';

export default function Home() {

  return (
    <>
      <div className="flex flex-col items-center justify-center my-8">
        <Image
          src="/logo.jpg"
          alt="Next.js"
          width={500}
          height={500}
          className="m-auto"
        />
        <span className="text-center m-auto w-full font-bold pb-6">Version Next.js : 14.1</span>
      </div>

      <div>
        Bonjour à tous, bienvenue dans notre cours sur Next.js ! Dans ce cours, nous allons explorer Next.js, qui est un framework de développement web basé sur React et qui peut nous aider à créer des applications web modernes, performantes et optimisées. Ce cours suivi des plusieurs exercices vous fournira des bases et des compétences pratiques pour développer des applications web avec Next.js. Préparez-vous à plonger dans le monde fascinant de Next.js !
      </div>
    </>
  );
}