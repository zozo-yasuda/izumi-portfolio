
const Page: React.FC = () => {
return(
<div className="w-[1440px] h-[1024px] relative bg-stone-50">
  <div className="w-[1221px] h-[280px] left-[219px] top-[158px] absolute bg-rose-100"></div>
  <div className="left-[289px] top-[229px] absolute text-green-600 text-[40px] font-normal font-['Tomarik'] uppercase leading-[25px]">Let’s connect!</div>
  <div className="left-[292px] top-[289px] absolute text-lime-900 text-xl font-normal font-['Corbel'] leading-relaxed tracking-wider">Email me at: yasuda.i@ufl.edu<br/>Text me at: (561)339-0255<br/>My LinkedIn: https://www.linkedin.com/in/izumi-yasuda/</div>
  <div className="w-[75px] h-[74px] left-[1166px] top-[121px] absolute"></div>
  <div className="w-[45px] h-[45px] left-[339px] top-[415px] absolute"></div>
  <div className="w-[1440px] h-28 left-0 top-[1px] absolute">
    <div className="w-[1440px] h-28 left-0 top-0 absolute bg-stone-50"></div>
  </div>
</div>
);
}

export default Page;