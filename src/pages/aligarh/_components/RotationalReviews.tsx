import DomeGallery from "../../../components/DomeGallery";
import WavyDivider from "@/components/ui/WavyDivider";
export default function RotationalReviews() {
  return (
    <>
      <WavyDivider
        color="#04060afd" // match next section bg
        height={80}
      />
      <section className="relative h-[80vh] w-full bg-gradient-to-b from-white via-neutral-900/80 to-black">
        <div className="absolute inset-0">
          <DomeGallery
            fit={0.5}
            minRadius={600}
            segments={22}
            dragDampening={22}
            grayscale={false}
          />
        </div>
      </section>
      <WavyDivider
        color="#04060afd" // match next section bg
        height={80}
        flip
      />
    </>
  );
}
