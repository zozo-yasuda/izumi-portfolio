
const FooterText = () => {
  return (
    <footer className="relative bg-offwhite">
      <div className="mx-auto max-w-screen-xl lg:py-4">
        
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-4">
        <div className="absolute inset-0 transofrm translate-y-6 bg-rose bg-bottom bg-cover z-0 left-0 bottom-0">
                </div>
          <div className="col-span-2 z-20">
                <h1 className="text-lime text-3xl font-tomarik uppercase tracking-5">
                  let&apos;s connect!
                </h1>
                <br />
                <p className="text-green font-sans leading-normal tracking-5">
                  Email me at: yasuda.i@ufl.edu
                  <br />
                  Text me at: (561)339-0255
                  <br />
                  My LinkedIn: https://www.linkedin.com/in/izumi-yasuda/
                </p>
                
                </div>   
          </div>
          
        </div>
    </footer>
    
  );
};

export default FooterText;
