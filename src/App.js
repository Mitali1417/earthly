function App() {
  return (
    <div className="App">
      <body className="bg-gradient-to-r from-lime-900 via-lime-700 to-lime-500 ">
        <div className=" grid grid-col-5 grid-flow-col">
          <div className="logo justify-start">
            <h1 className=" text-4xl text-lime-100 font-bold p-5">earthly</h1>
          </div>

          <div className=" grid grid-col-3 grid-flow-col justify-end">
            <a href="#home">
              <button className=" m-6 p-2 w-10/12 shadow-lg rounded-lg cursor-pointer font-normal text-lime-100 hover:bg-lime-500 ease-linear">
                Home
              </button>
            </a>
            <a href="#shop">
              <button className="m-6 p-2 w-10/12 shadow-lg rounded-lg cursor-pointer font-normal text-lime-100 hover:bg-lime-500 ease-linear">
                Shop
              </button>
            </a>
            <button className="m-6 ml-14 px-3 rounded-full font-normal cursor-pointer text-lime-100 duration-700 bg-lime-800 hover:-translate-y-1 hover:scale-110 hover:bg-lime-700 hover:text-lime-100">
              Get in Touch
            </button>
          </div>
        </div>

        <body
          className=" bg-cover bg-fixed bg-no-repeat bg-center p-40"
          style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c3VzdGFpbmFibGV8ZW58MHx8MHx8&auto=format&fit=crop&w=1400&q=60")`,
          }}
        >
          {/* <div className="backdrop-opacity-10 backdrop-invert shadow-2xl bg-lime-900/25 grid grid-cols-1 p-12 rounded-lg w-full"> */}
          <h1 className=" text-9xl p-5 text-lime-100 font-bold ">earthly</h1>
          <h3 className=" text-3xl px-5 text-lime-100 font-light	">
            Sustainable products at affordable prices
          </h3>
          {/* </div> */}
        </body>

        <div className="m-12 mt-24 text-center">
          <h1 className=" text-5xl text-lime-100 p-5">
            Sustainability Starter Kit
          </h1>
          <h3 className="text-1xl italic px-5 text-lime-100 font-light">
            This starter kit is all you need to start the revolution
          </h3>
          <hr className="w-2/12 m-auto my-10" />
        </div>

        <div className="grid grid-cols-2 grid-flow-row justify-center mx-32 p-20 bg-lime-800 rounded-lg">
          <div className="backdrop-opacity-5 backdrop-invert justify-center shadow-2xl bg-lime-900/25 m-8 p-12 rounded-lg hover:scale-125 duration-700">
            <img
              className="w-full rounded-lg "
              src="https://static.wixstatic.com/media/ead566_14e75a560cbc411ead722de92eaf8189~mv2.jpg/v1/fill/w_980,h_551,al_c,q_85,usm_0.66_1.00_0.01/ead566_14e75a560cbc411ead722de92eaf8189~mv2.webp"
              alt="Plant Based Reusable Cup with 2 lids"
            />
            <h2 className="text-1xl text-lime-100 font-light pt-4">
              Plant Based Reusable Cup with 2 lids
            </h2>
          </div>

          <div className="backdrop-opacity-5 backdrop-invert justify-center shadow-2xl bg-lime-900/25 m-8 p-12 rounded-lg hover:scale-125  duration-700">
            <img
              className="w-full rounded-lg "
              src="https://static.wixstatic.com/media/ead566_1e4ebac233ca43019bafaa65d0a4eeb1~mv2.jpg/v1/fill/w_980,h_551,al_c,q_85,usm_0.66_1.00_0.01/ead566_1e4ebac233ca43019bafaa65d0a4eeb1~mv2.webp"
              alt="2 Bamboo Straws"
            />
            <h2 className="text-1xl text-lime-100 font-light pt-4">
              2 Bamboo Straws
            </h2>
          </div>

          <div className="backdrop-opacity-5 backdrop-invert justify-center shadow-2xl bg-lime-900/25 m-8 p-12 rounded-lg hover:scale-125  duration-700">
            <img
              className="w-full rounded-lg "
              src="https://static.wixstatic.com/media/ead566_cad5cb7b64444962ade1c6fea43b525b~mv2.jpg/v1/fill/w_980,h_551,al_c,q_85,usm_0.66_1.00_0.01/ead566_cad5cb7b64444962ade1c6fea43b525b~mv2.webp"
              alt="1 box of 50 Bamboo Cotton Eartips"
            />
            <h2 className="text-1xl text-lime-100 font-light pt-4">
              1 box of 50 Bamboo Cotton Eartips
            </h2>
          </div>

          <div className="backdrop-opacity-5 backdrop-invert justify-center shadow-2xl bg-lime-900/25 m-8 p-12 rounded-lg hover:scale-125  duration-700">
            <img
              className="w-full rounded-lg "
              src="https://static.wixstatic.com/media/ead566_621d6a0ac1514a7892713f2aec051f51~mv2.jpg/v1/fill/w_980,h_551,al_c,q_85,usm_0.66_1.00_0.01/ead566_621d6a0ac1514a7892713f2aec051f51~mv2.webp"
              alt="1 Bamboo Toothbrush"
            />
            <h2 className="text-1xl text-lime-100 font-light pt-4">
              1 Bamboo Toothbrush
            </h2>
          </div>

          <div className="backdrop-opacity-5 backdrop-invert justify-center shadow-2xl bg-lime-900/25 m-8 p-12 rounded-lg hover:scale-125  duration-700">
            <img
              className="w-full rounded-lg "
              src="https://static.wixstatic.com/media/ead566_f6bd1296bdc747c0b1ecd468719a05e4~mv2.jpg/v1/fill/w_980,h_551,al_c,q_85,usm_0.66_1.00_0.01/ead566_f6bd1296bdc747c0b1ecd468719a05e4~mv2.webp"
              alt="1 Natural Loofah"
            />
            <h2 className="text-1xl text-lime-100 font-light pt-4">
              1 Natural Loofah
            </h2>
          </div>
        </div>
        <div className="py-20 ">
          <hr className="w-11/12 m-auto" />
          <h3 className="text-1xl p-5 text-lime-100 font-light text-center">Copyright ©</h3>
        </div>
      </body>
    </div>
  );
}

export default App;
