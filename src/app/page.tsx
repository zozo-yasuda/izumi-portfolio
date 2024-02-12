const Image = require("next/image").default;

export default function Page() {
  return (
    <div className="w-[1440px] h-[1362px] relative">
      <div className="w-[1062px] h-[783px] left-[314px] top-[119px] relative">
        <Image
          width={249}
          height={249}
          src="https://via.placeholder.com/249x249"
        />
        <div className="w-[249px] h-[249px] left-0 top-[534px] absolute bg-rose-100" />
        <Image
          width={249}
          height={249}
          src="https://via.placeholder.com/249x249"
        />
        <Image
          width={249}
          height={249}
          src="https://via.placeholder.com/249x249"
        />
        <div className="w-[249px] h-[249px] left-[270px] top-[534px] absolute bg-rose-100" />
        <Image
          width={249}
          height={249}
          src="https://via.placeholder.com/249x249"
        />
        <Image
          width={249}
          height={249}
          src="https://via.placeholder.com/249x249"
        />
        <div className="w-[249px] h-[249px] left-[541px] top-[534px] absolute bg-rose-100" />
        <Image
          width={249}
          height={249}
          src="https://via.placeholder.com/249x249"
        />
        <div className="w-[249px] h-[249px] left-[811px] top-[534px] absolute bg-rose-100" />
        <div className="w-[249px] h-[249px] left-[811px] top-[267px] absolute bg-rose-100" />
      </div>
      <div className="w-[1440px] h-40 left-0 top-[1202px] absolute bg-rose-100" />
      <div className="left-[47px] top-[1185px] absolute text-green-600 text-[40px] font-normal font-sans uppercase leading-[25px]">
        Let’s connect!
      </div>
      <div className="left-[50px] top-[1245px] absolute text-lime-900 text-base font-normal font-['Corbel'] leading-[23px] tracking-wide">
        Email me at: yasuda.i@ufl.edu
        <br />
        Text me at: (561)339-0255
        <br />
        My LinkedIn: https://www.linkedin.com/in/izumi-yasuda/
      </div>
      <div className="w-10 h-[25px] left-[41px] top-[168px] absolute">
        <div className="w-10 h-3 left-0 top-[10px] absolute bg-rose-100" />
        <div className="left-[3px] top-0 absolute text-lime-900 text-base font-normal font-['Corbel'] uppercase leading-[25px] tracking-[2.88px]">
          All
        </div>
      </div>
      <div className="left-[44px] top-[256px] absolute text-lime-900 text-base font-normal font-['Corbel'] uppercase leading-[25px] tracking-[2.88px]">
        print
      </div>
      <div className="left-[44px] top-[300px] absolute text-lime-900 text-base font-normal font-['Corbel'] uppercase leading-[25px] tracking-[2.88px]">
        motion
      </div>
      <div className="left-[44px] top-[344px] absolute text-lime-900 text-base font-normal font-['Corbel'] uppercase leading-[25px] tracking-[2.88px]">
        marketing
      </div>
      <div className="left-[44px] top-[388px] absolute text-lime-900 text-base font-normal font-['Corbel'] uppercase leading-[25px] tracking-[2.88px]">
        illustration
      </div>
      <div className="left-[44px] top-[212px] absolute text-lime-900 text-base font-normal font-['Corbel'] uppercase leading-[25px] tracking-[2.88px]">
        branding
      </div>
    </div>
  );
}
