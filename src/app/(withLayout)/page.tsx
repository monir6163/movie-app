import HomeContent from "@/components/home/HomeContent";

export default function Home() {
  if (
    navigator.userAgent.includes("FBAN") ||
    navigator.userAgent.includes("FBAV")
  ) {
    return (
      <div>
        <h1>Facebook App Browser Detected</h1>
        <p>
          Please open this link in your default browser to view the content.
        </p>
      </div>
    );
  }

  return (
    <div>
      <HomeContent />
    </div>
  );
}
