import Wave from "react-wavify";
import { Button } from "../ui/button";
import { Github, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Phone from "./phone";

import logo from "@/media/logo.png";
import Versions from "./versions";

export default function Landing() {
  return (
    <section className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen place-items-center gap-20">
        <div className="space-y-1 md:pt-0 pt-24">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="md:text-6xl text-4xl font-semibold md:inline-flex flex flex-col md:flex-row md:text-left text-center items-center gap-2 justify-center">
                <Image src={logo} alt="PureVideo Logo" width={128} />
                <div>
                  PureVideo -{" "}
                  <span className="text-accent">Filmy i seriale za darmo</span>
                </div>
              </h1>
              <p className="md:text-xl text-center md:text-left">
                Aplikacja do odtwarzania filmów z darmowych źródeł takich jak
                filman.cc i obejrzyj.to w jednym miejscu i bez reklam
              </p>
            </div>
            <div className="flex md:flex-row flex-col space-y-4 md:space-y-0 justify-center md:justify-start md:space-x-4">
              <Link href="https://github.com/majusss/purevideo" target="_blank">
                <Button className="w-full md:w-auto">
                  <Github /> Sprawdź na GitHubie
                </Button>
              </Link>
              <Versions />
            </div>
            <div className="text-sm inline-flex items-center gap-1 text-center justify-center w-full md:justify-start">
              <p>*Nie zaponij o gwiazdce </p>{" "}
              <Star fill="gold" stroke="gold" size={16} />
            </div>
          </div>
        </div>
        <div>
          <Phone />
        </div>
      </div>
      <Wave
        className="md:absolute fixed bottom-0 left-0 w-full z-10 h-[200px]"
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
