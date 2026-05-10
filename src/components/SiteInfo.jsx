import { Clock3, Eye } from "lucide-react";
import { useEffect, useState } from "react";

export default function SiteInfo() {
  const [views, setViews] = useState(null);

  const lastUpdate =
    import.meta.env.VITE_LAST_UPDATE ||
    new Date().toLocaleDateString("pl-PL");

  useEffect(() => {
    async function fetchViews() {
      try {
        const res = await fetch(
          "https://api.countapi.xyz/hit/dkupracz-portfolio/homepage"
        );

        const data = await res.json();

        setViews(data.value);
      } catch (err) {
        console.error(err);
      }
    }

    fetchViews();
  }, []);

  return (
    <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 text-sm text-zinc-400 mt-10">
      <div className="flex items-center gap-2">
        <Clock3 size={18} />
        <span>
          Ostatnia aktualizacja: {lastUpdate}
        </span>
      </div>

      <div className="flex items-center gap-2">
        <Eye size={18} />
        <span>
          Odwiedziny:{" "}
          {views !== null ? views : "..."}
        </span>
      </div>
    </div>
  );
}