import Wave from "react-wavify";
import { Button } from "../ui/button";
import { Download, Github, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Phone from "./phone";

import logo from "@/media/logo.png";
import Versions from "./versions";

export default function Landing() {
  return (
    <section className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen place-items-center">
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
              <Link href="https://github.com/majusss/purevideo" target="_blank">
                <Button>
                  <Github /> Sprawdz na GitHubie
                </Button>
              </Link>
              <Versions />
            </div>
          </div>
          <p className="text-sm inline-flex items-center gap-1">
            *Nie zaponij o gwiazdce <Star fill="gold" stroke="gold" size={16} />
          </p>
        </div>
        <div>
          <Phone />
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
