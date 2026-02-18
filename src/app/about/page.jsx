import Image from "next/image";
import React from "react";
import DailyInsights from "../../Components/DailyInsight";
import LetsConnect from "../../Components/LetsConnect";
import Footer from "../../Components/Footer";
import FooterMobile from "../../Components/Footer";

function Page() {
  return (
    <section>
        <div className="flex flex-col items-center justify-center py-[150px] md:pt-s160 md:pb-[200px] space-y-s64 px-s16">

      {/* Heading */}
      <div className="heading-h2">
        About me
      </div>

      {/* Content Wrapper */}
      <div className="space-y-s64 w-full">

        {/* Top Row */}
        <div className="flex flex-col md:flex-row justify-around items-center max-w-7xl w-full mx-auto gap-s32">

          <p className="max-w-[200px] text-justify body-default">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>

          <Image
            src="/Images/about.jpg"
            alt="About me image"
            width={500}
            height={300}
            className="w-[250px] h-[400px]  lg:w-[400px] lg:h-[600px] rounded-r32 object-cover"
          />

          <p className="max-w-[200px] text-justify body-default">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>

        </div>

        {/* Bottom Text */}
        <div className="max-w-xl mx-auto heading-h6 text-center px-s16">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text
          ever since the 1500s.
        </div>

      </div>
    </div>
   <section className="space-y-[80px] md:space-y-[150px] lg:space-y-[200px] px-s24 md:px-0 pb-[100px] md:pb-s160">

  {/* ROW 1 */}
  <div className=" mx-auto flex flex-col md:flex-row items-center justify-between gap-10 md:gap-16">

    {/* TEXT */}
    <div className="w-full md:w-1/2 max-w-md lg:max-w-xl md:pl-s32 lg:pl-s160 ">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod nulla voluptas eveniet repellat sit, eum numquam nostrum. Autem eligendi labore rerum sit, minus ad
    </div>

    {/* IMAGE */}
    <div className="w-full md:w-1/2 flex justify-center md:justify-end">
      <Image
        src="/Images/img1.png"
        alt="About me image"
        width={700}
        height={400}
      className="
  w-full max-w-[420px]
  md:max-w-[600px]
  lg:max-w-[700px]
  h-[220px] md:h-[320px] lg:h-[400px]
  rounded-full md:rounded-r-none md:rounded-l-full
  object-cover
"

      />
    </div>

  </div>


  {/* ROW 2 */}
  <div className=" mx-auto flex flex-col md:flex-row items-center justify-between gap-10 md:gap-16">

    {/* IMAGE */}
    <div className="w-full md:w-1/2 flex justify-center md:justify-start order-2 md:order-1">
      <Image
        src="/Images/img1.png"
        alt="About me image"
        width={700}
        height={400}
        className="
          w-full max-w-[420px]
          md:max-w-[600px]
          lg:max-w-[700px]
          h-[220px] md:h-[320px] lg:h-[400px]
            rounded-full md:rounded-l-none md:rounded-r-full
          object-cover
        "
      />
    </div>

    {/* TEXT */}
    <div className="w-full md:w-1/2 max-w-md lg:max-w-xl md:pr-s32 lg:pr-s160  order-1 md:order-2">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod nulla voluptas eveniet repellat sit, eum numquam nostrum. Autem eligendi labore rerum sit, minus ad
    </div>

  </div>
  {/* ROW 3 */}

  <div className=" mx-auto flex flex-col md:flex-row items-center justify-between gap-10 md:gap-16">

    {/* TEXT */}
    <div className="w-full md:w-1/2 max-w-md lg:max-w-xl md:pl-s32 lg:pl-s160 ">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod nulla voluptas eveniet repellat sit, eum numquam nostrum. Autem eligendi labore rerum sit, minus ad
    </div>

    {/* IMAGE */}
    <div className="w-full md:w-1/2 flex justify-center md:justify-end">
      <Image
        src="/Images/img1.png"
        alt="About me image"
        width={700}
        height={400}
      className="
  w-full max-w-[420px]
  md:max-w-[600px]
  lg:max-w-[700px]
  h-[220px] md:h-[320px] lg:h-[400px]
  rounded-full md:rounded-r-none md:rounded-l-full
  object-cover
"

      />
    </div>

  </div>
  {/* ROW 4 */}
    <div className=" mx-auto flex flex-col md:flex-row items-center justify-between gap-10 md:gap-16">

    {/* IMAGE */}
    <div className="w-full md:w-1/2 flex justify-center md:justify-start order-2 md:order-1">
      <Image
        src="/Images/img1.png"
        alt="About me image"
        width={700}
        height={400}
        className="
          w-full max-w-[420px]
          md:max-w-[600px]
          lg:max-w-[700px]
          h-[220px] md:h-[320px] lg:h-[400px]
            rounded-full md:rounded-l-none md:rounded-r-full
          object-cover
        "
      />
    </div>

    {/* TEXT */}
    <div className="w-full md:w-1/2 max-w-md lg:max-w-xl md:pr-s32 lg:pr-s160  order-1 md:order-2">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod nulla voluptas eveniet repellat sit, eum numquam nostrum. Autem eligendi labore rerum sit, minus ad
    </div>

  </div>

</section>

    <DailyInsights/>
    <LetsConnect/>
    <Footer/>
    </section>
  );
}

export default Page;
