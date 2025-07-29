interface GitHubRelease {
  tag_name: string;
  html_url: string;
  body: string;
  published_at: string;
  assets: Array<{
    browser_download_url: string;
  }>;
}

interface GithubArtifact {
  created_at: string;
  workflow_run: {
    id: number;
  };
}
