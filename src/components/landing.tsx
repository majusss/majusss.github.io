import Wave from "react-wavify";
import { Button } from "./ui/button";
import { Download, Github, Star } from "lucide-react";
import Image from "next/image";

import logo from "@/media/logo.png";

export default function Landing() {
  return (
    <section className="container mx-auto">
      <div className="grid grid-cols-2 min-h-screen place-items-center">
        <div className="space-y-1">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl font-semibold inline-flex items-center gap-2">
                <Image src={logo} alt="PureVideo Logo" width={128} />
                <div>
                  PureVideo -{" "}
                  <span className="text-accent">Filmy i seriale za darmo</span>
                </div>
              </h1>
              <p className="text-xl">
                Aplikacja do odtwarzania filmów z darmowych źródeł takich jak
                filman.cc i obejrzyj.to w jednym miejscu i bez reklam
              </p>
            </div>
            <div className="flex flex-row space-x-4">
              <Button>
                <Github /> Sprawdz na GitHubie
              </Button>
              <Button variant="outline">
                <Download /> Sprawdz wydania
              </Button>
            </div>
          </div>
          <p className="text-sm inline-flex items-center gap-1">
            *Nie zaponij o gwiazdce <Star fill="gold" stroke="gold" size={16} />
          </p>
        </div>
        <div>
          <div className="aos-init aos-animate">
            <div className="float relative h-[600px] max-w-[300px] rounded-[2.5rem] border-[14px] border-onSurface bg-onSurface dark:border-onSurface">
              <div className="rounded-s-lg absolute -start-[17px] top-[72px] h-[32px] w-[3px] bg-onSurface dark:bg-onSurface"></div>
              <div className="rounded-s-lg absolute -start-[17px] top-[124px] h-[46px] w-[3px] bg-onSurface dark:bg-onSurface"></div>
              <div className="rounded-s-lg absolute -start-[17px] top-[178px] h-[46px] w-[3px] bg-onSurface dark:bg-onSurface"></div>
              <div className="rounded-e-lg absolute -end-[17px] top-[142px] h-[64px] w-[3px] bg-onSurface dark:bg-onSurface"></div>
              <div className="bg-white h-[572px] w-[272px] overflow-hidden rounded-[2rem] dark:bg-onSurface">
                <Image src={logo} className="h-[572px] w-[272px]" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Wave
        className="absolute bottom-0 left-0 w-full z-10 h-[200px]"
        fill="var(--primary)"
        options={{
          height: 100,
          amplitude: 30,
          speed: 0.3,
          points: 5,
        }}
      />
    </section>
  );
}
