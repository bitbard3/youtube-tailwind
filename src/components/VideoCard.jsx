export const VideoCard = ({ image, title, author, views, time }) => {
  return (
    <div className="">
      <div className="img-container max-w-fit">
        <img src={image} alt="" className="rounded-xl" />
      </div>
      <div className="content-container flex  pt-4">
        <img
          src={image}
          className="rounded-full w-12 h-12 object-cover"
          alt=""
        />
        <div className="flex flex-col pl-3">
          <p className="font-roboto font-medium ">{title}</p>
          <p className="text-sm text-gray-500">{author}</p>
          <div className="flex">
            <p className="text-sm text-gray-500">{views}</p>
            <p className="text-sm text-gray-500 pl-2">{time}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
