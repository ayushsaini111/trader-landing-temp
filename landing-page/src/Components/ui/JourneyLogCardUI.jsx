import Button from "./Button";

export default function JourneyLogCardUI({ log, onView }) {
  const thumbnail =
    log.thumbnailType === "open"
      ? log.thumbnailOpen
      : log.thumbnailClose;

  return (
    <div className="bg-background rounded-r24 p-s24 md:p-s32 flex flex-col md:flex-row gap-s24 lg:gap-s32">
      <img
        src={thumbnail}
        alt="Journey log"
        className="w-full md:w-[465px] h-[220px] sm:h-[280px] lg:h-[350px] rounded-r16 object-cover shrink-0"
      />

      <div className="flex flex-col justify-between flex-1 gap-s16">
        <div className="md:max-w-[30vw] flex flex-col">
          <p className="body-default line-clamp-3 break-words">
            {log.description}
          </p>
        </div>

        <div className="flex items-center justify-between gap-s16">
          <p className="caption text-secondary">
         {new Date(log.createdAt).toLocaleDateString("en-IN")}

          </p>

          <Button  onClick={() => onView(log)}>
            View more
          </Button>
        </div>
      </div>
    </div>
  );
}
