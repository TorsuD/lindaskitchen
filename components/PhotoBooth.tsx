import Image from "next/image";

export default function PhotoBooth() {
  const foodPhotos = [
    {
      id: 1,
      src: "/photo_7.jpg",
      title: "beans",
    },
    {
      id: 2,
      src: "/photo_2.jpg",
      title: "beans",
    },
    {
      id: 3,
      src: "/photo_3.jpg",
      title: "beans",
    },
    {
      id: 4,
      src: "/photo_4.jpg",
      title: "beans",
    },
    {
      id: 5,
      src: "/photo_5.jpg",
      title: "beans",
    },
  ];
  return (
    <div>
      <div className="h-fit my-10 px-5">
        <div className="flex flex-col items-center text-center mb-20">
          <h1 className="header-font text-[var(--main-color-secondary)] text-7xl mb-5 font-extrabold">
            Just a glimpse
          </h1>
          <p className="text-lg subHeader-font">A glance of what we cook</p>
        </div>

        <div className="flex items-center overflow-scroll gap-5">
          {foodPhotos?.map((food) => (
            <Image
              key={food.id}
              src={food?.src}
              alt="food"
              height={900}
              width={900}
              className="h-[50vh] shrink-0 w-[300px] object-cover rounded-2xl "
            />
          ))}
        </div>
      </div>
    </div>
  );
}
