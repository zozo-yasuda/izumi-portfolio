
const FooterText = () => {
  return (
    <footer className="relative bg-offwhite z-0 w-screen">
        <div className="absolute inset-0 transform translate-y-4 bg-rose bg-bottom bg-cover z-0 left-0 bottom-0 z-10">
                </div>
                <h1 className="relative flex flex-shrink-0 items-center text-lime text-3xl font-tomarik 
                                                  uppercase tracking-5 z-20 pl-12 left-0">
                  let&apos;s connect!
                </h1>
                
                <p className="relative flex flex-shrink-0 items-center text-green text-base tracking-5 font-sans
                                    justify-between w-full md:flex md:w-auto md:order-1 left-0 p-6 pl-12 z-20">
                  Email me at: yasuda.i@ufl.edu
                  <br />
                  Text me at: (561)339-0255
                  <br />
                  My LinkedIn: https://www.linkedin.com/in/izumi-yasuda/
                </p>
    </footer>
    
  );
};

export default FooterText;
