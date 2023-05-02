import { TextBlock } from "@/components/TextBlock";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="site-container">
      <div className="site-body">
        <h1>Heading</h1>
        <TextBlock />
        <TextBlock />
        <TextBlock />
        <TextBlock />
        <TextBlock />
      </div>
    </div>
  );
}
