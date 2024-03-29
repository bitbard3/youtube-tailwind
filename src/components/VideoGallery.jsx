import img1 from "../assets/thumb1.webp";
import img2 from "../assets/thumb2.webp";
import img3 from "../assets/thumb3.webp";
import img4 from "../assets/thumb4.webp";
import img5 from "../assets/thumb5.webp";
import img6 from "../assets/thumb6.webp";
import img7 from "../assets/thumb7.webp";
import img8 from "../assets/thumb8.webp";
import { VideoCard } from "./VideoCard";
const data = [
  {
    title: "My Dad bough Vought",
    author: "Vought Inc.",
    img: img1,
    views: "100k",
    time: "10 days ago",
  },
  {
    title: "Goosebumps",
    author: "Travis Scott",
    img: img2,
    views: "1000",
    time: "1 day ago",
  },
  {
    title: "Can you be? (unreleased)",
    author: "dxmv sfx",
    img: img3,
    views: "100k",
    time: "10 days ago",
  },
  {
    title: "Travis Scott",
    author: "Vevo",
    img: img4,
    views: "100M",
    time: "2 days ago",
  },
  {
    title: "Moon is on fire",
    author: "Kanye West",
    img: img5,
    views: "10M",
    time: "5 days ago",
  },
  {
    title: "Till Further Notice",
    author: "Travis Scott",
    img: img6,
    views: "180k",
    time: "1 week ago",
  },
  {
    title: "Amazing Portfolio websites",
    author: "JackCodes",
    img: img7,
    views: "10k",
    time: "4 days ago",
  },
  {
    title: "Vultures song",
    author: "realxx",
    img: img8,
    views: "2k",
    time: "2 days ago",
  },
];
export const VideoGallery = () => {
  return (
    <div className="">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  grid-cols-1">
        {data.map((v, index) => (
          <div className="" key={index}>
            <VideoCard
              title={v.title}
              author={v.author}
              image={v.img}
              views={v.views}
              time={v.time}
            ></VideoCard>
          </div>
        ))}
      </div>
    </div>
  );
};
