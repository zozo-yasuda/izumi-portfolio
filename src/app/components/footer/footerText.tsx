
const FooterText = () => {
  return (
    <footer className="bg-rose">
      <div className="mx-auto max-w-screen-xl lg:py-4">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-4">
          <div className="col-span-2">
            <h1 className="text-green text-xl font-tomarik uppercase">
              let&apos;s connect!
            </h1>
            <br />
            <p className="text-green font-sans leading-tight">
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
