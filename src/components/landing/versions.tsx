"use client";

import { Bug, CircleOff, Download, Github } from "lucide-react";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { DialogDescription } from "@radix-ui/react-dialog";
import { useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import Link from "next/link";
import moment from "moment";
import "moment/locale/pl";

export default function Versions() {
  const [releases, setReleases] = useState<GitHubRelease[]>([]);
  const [devs, setDevs] = useState<GithubArtifact[]>([]);
  useEffect(() => {
    async function fetchReleases() {
      try {
        const response = await fetch(
          "https://api.github.com/repos/majusss/purevideo/releases"
        );
        if (!response.ok) {
          return;
        }
        const data = await response.json();
        setReleases(data);
      } catch (error) {
        console.error("Failed to fetch versions:", error);
      }
    }

    async function fetchDevs() {
      const response = await fetch(
        "https://api.github.com/repos/majusss/purevideo/actions/artifacts"
      );
      if (!response.ok) {
        return;
      }
      const data = await response.json();
      setDevs(data.artifacts ?? []);
    }

    fetchReleases();
    fetchDevs();
  }, []);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">
          <Download /> Sprawdź wydania
        </Button>
      </DialogTrigger>
      <DialogContent className="border-none rounded-4xl gap-6">
        <DialogHeader>
          <DialogTitle>Wersje aplikacji</DialogTitle>
        </DialogHeader>
        <DialogDescription>
          <Tabs defaultValue="releases" className="w-full space-y-4">
            <TabsList>
              <TabsTrigger value="releases">Stabilne</TabsTrigger>
              <TabsTrigger value="devs">Deweloperskie</TabsTrigger>
            </TabsList>
            <TabsContent value="releases" className="mb-0">
              {releases.length > 0 ? (
                releases?.map((release, index) => (
                  <div key={index} className="min-h-16">
                    <div className="flex items-center justify-between">
                      <div className="flex items-start gap-4">
                        <Link
                          href={release.html_url}
                          target="_blank"
                          className="inline-flex gap-2 rounded-full bg-primary px-4 py-3 font-medium text-primary-foreground transition-all hover:bg-primary/90"
                        >
                          <Github />
                        </Link>
                        <div className="grid text-left">
                          <h2 className="font-medium">
                            Wersja {release.tag_name}
                          </h2>
                          <p className="text-sm">
                            {moment(release.published_at)
                              .locale("pl")
                              .fromNow()}
                          </p>
                        </div>
                      </div>
                      <Link href={release.assets[0].browser_download_url}>
                        <Download className="h-8 w-8" color="var(--primary)" />
                      </Link>
                    </div>
                    {index == releases.length - 1 ? null : (
                      <hr className="mt-4 h-[2px] w-full border-none bg-surfaceContainerHighest" />
                    )}
                  </div>
                ))
              ) : (
                <div className="flex flex-col items-center justify-center gap-4">
                  <CircleOff className="h-16 w-16" color="var(--primary)" />
                  <p>Brak wersji stabilnych</p>
                </div>
              )}
            </TabsContent>
            <TabsContent value="devs">
              <p className="font-bold text-accent text-center mb-6">
                Dostęp do wersji deweloperskich jest ograniczony dla
                zalogowanych użytkowników na GitHubie.
              </p>
              {devs.length > 0 ? (
                devs?.map((dev, index) => (
                  <div key={index} className="min-h-16">
                    <div className="flex items-center justify-between">
                      <div className="flex items-start gap-4">
                        <Link
                          href={`https://github.com/majusss/purevideo/actions/runs/${dev.workflow_run.id}`}
                          target="_blank"
                          className="inline-flex gap-2 rounded-full bg-primary px-4 py-3 font-medium text-primary-foreground transition-all hover:bg-primary/90"
                        >
                          <Bug />
                        </Link>
                        <div className="grid text-left">
                          <h2 className="font-medium">
                            Wersja{" "}
                            {moment(dev.created_at).locale("pl").format("LLL")}
                          </h2>
                          <p className="text-sm">
                            {moment(dev.created_at).locale("pl").fromNow()}
                          </p>
                        </div>
                      </div>
                      <Link
                        href={`https://github.com/majusss/purevideo/actions/runs/${dev.workflow_run.id}#artifacts`}
                      >
                        <Download className="h-8 w-8" color="var(--primary)" />
                      </Link>
                    </div>
                    {index == releases.length - 1 ? null : (
                      <hr className="mt-4 h-[2px] w-full border-none bg-surfaceContainerHighest" />
                    )}
                  </div>
                ))
              ) : (
                <div className="flex flex-col items-center justify-center gap-4">
                  <CircleOff className="h-16 w-16" color="var(--primary)" />
                  <p>Brak wersji deweloperskich</p>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
}
